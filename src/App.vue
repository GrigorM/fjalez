<template>
  <Header />
  <!-- <main> -->
    <Board :words="words"/>
    <Keyboard @check="check" @type="type" @clear="clear" :usedLetters="usedLetters"/>
  <!-- </main> -->
</template>

<script>
import Header from './components/Header.vue'
import Board from './components/Board.vue'
import Keyboard from './components/Keyboard.vue'

export default {
  name: 'App',
  components: {
    Header,
    Board,
    Keyboard
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
      }
  },
  methods: {
    check() {
      if (this.letterPointer < 5) {
        alert('s\'ka mjaftueshem germa')
      } else {
        let hipoteza = this.words[this.round].map(({letter}) => letter)
        hipoteza = hipoteza.join("");

        fetch(`https://qub10cxllf.execute-api.eu-central-1.amazonaws.com/prod/define/${hipoteza}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.exactMatches.length === 0) {
              alert('nuk osht llaf')
            } else {
              this.feedback()
            }
          })
          .catch(error => console.log(error))
      }
    },
    clear() {
      // let word = this.words[this.round].trim();
      // word = word.slice(0, -1).padEnd(5, ' ')
      // this.words[this.round] = word
      if (this.letterPointer > 0) {
        this.letterPointer--;
        this.words[this.round][this.letterPointer].letter = '';
      }
    },
    type(char) {
      this.words[this.round][this.letterPointer].letter = char;
      this.letterPointer++;
    },
    feedback() {
      console.log('feedback')
      this.words[this.round].forEach((letter, index) => {
        if (letter.letter === this.fjaleza[index]) {
          letter.state = 'correct';
        } else if ( this.fjaleza.indexOf(letter.letter) !== -1 ) {
          letter.state = 'present';
        } else {
          letter.state = 'absent';
        }
      })
      this.round ++;
      this.letterPointer = 0;
      this.updateUsedLetters();
    },
    updateUsedLetters() {
      for(let i = 0; i<this.round; i++) {
        for(let j = 0; j< 5; j++) {
          if (this.usedLetters.indexOf(this.words[i][j]) === -1) {
            this.usedLetters.push(this.words[i][j])
          }
        }
      }
    }
  }
}
</script>

<style>
/* @import "styles/main.css"; */
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

</style>
