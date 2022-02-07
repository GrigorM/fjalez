<template>
  <Header @share="shareBoard" @openStats="openStats" @openSettings="openSettings"/>
  <Board :words="words"/>
  <Keyboard @check="check" @type="type" @clear="clear" :usedLetters="usedLetters"/>
  <Toast :message="message" :open="openToast"/>
  <Modal :open="openModal" :finished="finished" @share="shareBoard" @closeModal="closeModal" />
  <Loading :open="loading"/>
  <Settings :open="showSettings" :page="settingsPage" @closeSettings="closeSettings" />
</template>

<script>
import Header from './components/Header.vue'
import Board from './components/Board.vue'
import Keyboard from './components/Keyboard.vue'
import Toast from './components/Toast.vue'
import Modal from './components/Modal.vue'
import Loading from './components/Loading.vue'
import Settings from './components/Settings.vue'

import { initialBoardState } from './assets/constants';

export default {
  name: 'App',
  components: {
    Header,
    Board,
    Keyboard,
    Toast,
    Modal,
    Loading,
    Settings,
  },
  data() {
      return {
          fjalezat: ["ideal","maçok","provë","janar","qasje","idiot","trung"],
          fjaleza: '',
          fIndex: 0,
          round: 0,
          letterPointer: 0,
          words: initialBoardState,
          usedLetters: [],
          finished: false,
          openToast: false,
          message: '',
          openModal: false,
          loading: false,
          showSettings: false,
          settingsPage: 'INFO'
      }
  },
  methods: {
    joinWord() {
      let hipoteza = this.words[this.round].map(({letter}) => letter).join("")
      return hipoteza;
    },
    check() {
      if (!this.finished) {
        if (this.letterPointer < 5) {
          this.showToast('S\'ka mjaftueshem germa')
        } else {
          const guess = this.joinWord();
          this.loading = true;
          fetch(`https://qub10cxllf.execute-api.eu-central-1.amazonaws.com/prod/define/${guess}`)
            .then(res => res.json())
            .then(data => {
              this.loading = false;
              if (data.exactMatches.length === 0) {
                this.showToast('Fjale e pavlefshme')
              } else {
                this.feedback()
              }
            })
            .catch(error => {
              console.log(error);
              alert('Error')
              this.loading = false;
            })
        }
      }
    },
    clear() {
      if (!this.finished) {
        if (this.letterPointer > 0) {
          this.letterPointer--;
          this.words[this.round][this.letterPointer].letter = '';
        }
      }
    },
    type(char) {
      // const doubleCharsWith = {
      //   'h': ['d', 's', 't', 'x', 'z'],
      //   'r': ['r'],
      //   'l': ['l'],
      //   'j': ['g', 'n']
      // }
      // const doubleCharKeys = Object.keys(doubleCharsWith);     
      // if (this.letterPointer > 0 && 
      //     doubleCharKeys.indexOf(char) !== -1 && 
      //     doubleCharsWith[`${char}`].indexOf(this.words[this.round][this.letterPointer - 1].letter) !== -1) {
      //     const previousChar = this.words[this.round][this.letterPointer - 1].letter;
      //     char = `${previousChar}${char}`;
      //     this.letterPointer--;
      // } 
      if (!this.finished && this.letterPointer < 5) {          
          this.words[this.round][this.letterPointer].letter = char;
          this.letterPointer++;
      }
    },
    getLetterCount(str) {
      const obj = {};
      for(let x = 0; x < str.length; x++) {
          let l = str.charAt(x)
          obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
      }
      return obj;
    },
    feedback() {
      let guessed = false;
      const guess = this.joinWord();
      if (guess === this.fjaleza) {
        guessed = true;
      }
      const letterCount = this.getLetterCount(guess);
      const letterCountOriginal = this.getLetterCount(this.fjaleza);

      this.words[this.round].forEach((letter, index) => {
        let count = letterCount[letter.letter];
        let fjalezaCount = letterCountOriginal[letter.letter];
        if (count == fjalezaCount || count < fjalezaCount) {
          this.checkPosition(letter, index);
        } else if (count > fjalezaCount && fjalezaCount > 0) {
          // evaluate only the ${fjalezaCount} first occurences
          const indexes = guess.split('').map((c, i) => {
                            if (c === letter.letter) return i;
                          }).filter(e => e !== undefined);
          if (index < indexes[fjalezaCount]) {
            this.checkPosition(letter, index);         
          } else {
            letter.state = 0;
          }
        } else if (!fjalezaCount) {
          letter.state = 0;
        }
      })

      if (guessed || this.round === 6) {
        this.finished = true;
      }

      if (guessed) {
        setTimeout(() => {
          this.openModal = true;
        }, 3000)
      }

      this.round ++;
      this.letterPointer = 0;
      this.updateUsedLetters();
      this.saveToLocalStorage();
    },
    checkPosition(letter, index) {
      if (letter.letter === this.fjaleza[index]) {
        letter.state = 2;
      } else if ( this.fjaleza.indexOf(letter.letter) !== -1) {
        letter.state = 1;
      } 
    },
    updateUsedLetters() {
      for(let j = 0; j< 5; j++) {
        const letter = this.words[this.round-1][j];
        const previousIndex = this.usedLetters.findIndex(l => l.letter === letter.letter);
        if (previousIndex != -1) {
          if (letter.state > this.usedLetters[previousIndex].state ) {
            this.usedLetters[previousIndex].state = letter.state;
          }
        } else {
          this.usedLetters.push(letter)
        }
      }
    },
    saveToLocalStorage() {
      const obj = {
        boardState: this.words,
        round: this.round,
        finished: this.finished,
        usedLetters: this.usedLetters
      }
    
      localStorage.setItem('fjaleza', JSON.stringify(obj))
    },
    shareBoard() {
      let text = `Fjalez ${this.fIndex} ${this.round}/6\n`;
      for(let i=0; i < this.round; i++) {
        for(let j=0; j<5; j++) {
          switch (this.words[i][j].state) {
            case 0:
              text += '⬛'
              break;
            case 1:
              text += '🟨'
              break;
            case 2:
              text += '🟩'
              break;
          
            default:
              break;
          }
        }
        text += '\n';
      }
      navigator.clipboard.writeText(text);
    },
    showToast(message) {
      this.message = message;
      this.openToast = true;
      setTimeout(() => {
        this.openToast = false;
      }, 1000);
    },
    openStats() {
      this.openModal = true;
    },
    closeModal() {
      this.openModal = false;
    },
    openSettings(page) {
      this.showSettings = true;
      this.settingsPage = page;
    },
    closeSettings() {
      this.showSettings = false;
    }
  },
  mounted() {
    let lastPlayed;
    const start = new Date(2022, 2, 4, 0, 0, 0);
    const today = new Date();
    if (localStorage.getItem('flp')) {
      lastPlayed = JSON.parse(localStorage.getItem('flp'))
      const lastPlayedDate = new Date(lastPlayed.date)
      const diffPlayed = today.getDate() - lastPlayedDate.getDate();
      if(diffPlayed > 0) {
        localStorage.removeItem('fjaleza')
      }
      if (localStorage.getItem('fjaleza')) {
        const words = JSON.parse(localStorage.getItem('fjaleza')) 
        this.words = words.boardState
        this.round = words.round
        this.finished = words.finished
        this.usedLetters = words.usedLetters
      }
      const date = {
        date: new Date().toString()
      } 
      localStorage.setItem('flp', JSON.stringify(date));
    } else {
      localStorage.removeItem('fjaleza')
      const date = {
        date: new Date().toString()
      } 
      localStorage.setItem('flp', JSON.stringify(date));
    }
    
    const diff = today.getDate() - start.getDate();
    this.fIndex = diff;
    this.fjaleza = this.fjalezat[diff];
  }
}
</script>

<style>
@import './assets/app.css';
</style>