<template>
  <Header @share="shareBoard" @openStats="openStats"/>
  <!-- <main> -->
    <Board :words="words"/>
    <Keyboard @check="check" @type="type" @clear="clear" :usedLetters="usedLetters"/>
    <Toast :message="message" :open="openToast"/>
    <Modal :open="openModal" @share="shareBoard" @closeModal="closeModal" />
  <!-- </main> -->
</template>

<script>
import Header from './components/Header.vue'
import Board from './components/Board.vue'
import Keyboard from './components/Keyboard.vue'
import Toast from './components/Toast.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Header,
    Board,
    Keyboard,
    Toast,
    Modal,
  },
  data() {
      return {
          fjaleza: 'parim',
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
      }
  },
  methods: {
    check() {
      if (!this.finished) {
        if (this.letterPointer < 5) {
          // alert('s\'ka mjaftueshem germa')
          this.showToast('S\'ka mjaftueshem germa')
        } else {
          let hipoteza = this.words[this.round].map(({letter}) => letter)
          hipoteza = hipoteza.join("");
  
          fetch(`https://qub10cxllf.execute-api.eu-central-1.amazonaws.com/prod/define/${hipoteza}`)
            .then(res => res.json())
            .then(data => {
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
      if (!this.finished && this.letterPointer < 5) {
        this.words[this.round][this.letterPointer].letter = char;
        this.letterPointer++;
      }
    },
    feedback() {
      let guessed = false;
      this.words[this.round].forEach((letter, index) => {
        if (letter.letter === this.fjaleza[index]) {
          letter.state = 'correct';
          guessed = true;
        } else if ( this.fjaleza.indexOf(letter.letter) !== -1 ) {
          letter.state = 'present';
          guessed = false;
        } else {
          letter.state = 'absent';
          guessed = false;
        }
      })

      if (guessed || this.round === 6) {
        this.finished = true;
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