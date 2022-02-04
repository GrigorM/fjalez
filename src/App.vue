<template>
  <Header @share="shareBoard" @openStats="openStats" @openSettings="openSettings"/>
  <!-- <main> -->
    <Board :words="words"/>
    <Keyboard @check="check" @type="type" @clear="clear" :usedLetters="usedLetters"/>
    <Toast :message="message" :open="openToast"/>
    <Modal :open="openModal" @share="shareBoard" @closeModal="closeModal" />
    <Loading :open="loading"/>
    <Settings :open="showSettings" :page="settingsPage" @closeSettings="closeSettings" />
  <!-- </main> -->
</template>

<script>
import Header from './components/Header.vue'
import Board from './components/Board.vue'
import Keyboard from './components/Keyboard.vue'
import Toast from './components/Toast.vue'
import Modal from './components/Modal.vue'
import Loading from './components/Loading.vue'
import Settings from './components/Settings.vue'

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
          fjaleza: 'ideal',
          round: 0,
          letterPointer: 0,
          words: [
              [{
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }],
              [{
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }],
              [{
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }],
              [{
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }],
              [{
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }],
              [{
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }, {
                letter: '',
                state: ''
              }],
          ],
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
      let hipoteza = this.words[this.round].map(({letter}) => letter)
      hipoteza = hipoteza.join("");
      return hipoteza;
    },
    check() {
      if (!this.finished) {
        if (this.letterPointer < 5) {
          // alert('s\'ka mjaftueshem germa')
          this.showToast('S\'ka mjaftueshem germa')
        } else {
          const guess = this.joinWord();
          this.loading = true;
          fetch(`https://qub10cxllf.execute-api.eu-central-1.amazonaws.com/prod/define/${guess}`)
            .then(res => res.json())
            .then(data => {
              this.loading = false;
              if (data.exactMatches.length === 0) {
                // alert('Fjale e pavlefshme')
                this.showToast('Fjale e pavlefshme')
              } else {
                this.feedback()
              }
            })
            .catch(error => {console.log(error); alert('Error')})
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
    feedback() {
      let guessed = false;
      const guess = this.joinWord();
      if (guess === this.fjaleza) {
        guessed = true;
      }
      this.words[this.round].forEach((letter, index) => {
        if (letter.letter === this.fjaleza[index]) {
          letter.state = 'correct';
        } else if ( this.fjaleza.indexOf(letter.letter) !== -1 ) {
          letter.state = 'present';
        } else {
          letter.state = 'absent';
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
    updateUsedLetters() {
      for(let i = 0; i<this.round; i++) {
        for(let j = 0; j< 5; j++) {
          if (this.usedLetters.indexOf(this.words[i][j]) === -1) {
            this.usedLetters.push(this.words[i][j])
          }
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
      let text = '';
      for(let i=0; i < this.round; i++) {
        for(let j=0; j<5; j++) {
          switch (this.words[i][j].state) {
            case 'absent':
              text += '⬛'
              break;
            case 'present':
              text += '🟨'
              break;
            case 'correct':
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
      console.log('open modal')
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
    if (localStorage.getItem('fjaleza')) {
      const words = JSON.parse(localStorage.getItem('fjaleza')) 
      this.words = words.boardState
      this.round = words.round
      this.finished = words.finished
      this.usedLetters = words.usedLetters
    }
  }
}
</script>

<style>
.nightmode {
  --background-color: #121213;
  --color: #fafafa;
  --border: #3a3a3c;
}
.daymode {
  --background-color: #121213;
  --color: #fafafa;
  --border: #3a3a3c;
}
:root {
  --keyboard-and-header: 270px;
}
html {
  font-size: 10px;
  font-family: sans-serif;
  --header-height: 50px;
  height: 100%;
}

body {
  background-color: var(--background-color);
  color: var(--color);
  padding: 0;
  margin: 0;
  height: 100%;
}
#game {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
}

main {
  width: 100%;
  max-width: 500px;
  margin: auto;
}
</style>