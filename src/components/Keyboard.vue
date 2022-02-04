<template>
    <div class="keyboard">
        <div class="row">
            <button v-for="(letter, index) in row1" 
                :key="`r1-${index}`"
                @click="type(letter)" 
                :class="letterState(letter)">
                {{ letter }}
            </button>
        </div>
        <div class="row">
            <!-- <div class="spacer-half"></div> -->
            <button v-for="(letter, index) in row2"
                :key="`r2-${index}`" 
                @click="type(letter)" 
                :class="letterState(letter)">
                {{ letter }}
            </button>
            <!-- <div class="spacer-half"></div> -->
        </div>
        <div class="row">
            <button id="enter" @click="check">Enter</button>
            <button v-for="(letter, index) in row3"
                :key="`r3-${index}`" 
                @click="type(letter)" 
                :class="letterState(letter)">
                {{ letter }}
            </button>
            <button id="backspace" @click="clear" aria-label="clear">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path fill="#fafafa" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['usedLetters'],
    data() {
        return {
            row1: ['q', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'ë'],
            row2: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç'],
            row3: ['z', 'x', 'c', 'v', 'b', 'n', 'm']
        }
    },
    methods: {
        check() {
            this.$emit('check')
        },
        clear() {
            this.$emit('clear')
        },
        type(char) {
            this.$emit('type', char)
        },
        letterState(letter) {
            const usedLetter = this.usedLetters.filter(l => {
                if (l.letter === letter) return l;
            });
            return usedLetter.length ? usedLetter[0].state : '';  
        }
    },
    mounted() {
        window.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.check();
            } else if (e.key === 'Backspace') {
                this.clear();
            } else if (e.keyCode >= 65 && e.keyCode <=90) { // what about ë and ç
                this.type(e.key);
            }
        });
    }
}
</script>

<style>
.keyboard {
  padding: 0 7px;
}

.keyboard .row {
    display: flex;
    justify-content: stretch;
}

.keyboard .row button {
    height: 58px;
    flex: 1;
    margin-bottom: 7px;
    text-transform: uppercase;
    background-color: #818384;
    color: #fafafa;
    font-weight: 700;
    border: none;
    border-radius: 3px;
}

.keyboard .row button.absent {
  background-color: #3a3a3c;
}
.keyboard .row button.present {
  background-color: #b59f3b;
}
.keyboard .row button.correct {
  background-color: #538d4e;
}

.keyboard .row button:not(:last-child) {
    margin-right: 5px; 
}

.keyboard .row .spacer-half {
  flex: 0.5;
  margin-right: 5px;
}

.keyboard .row button#enter, .keyboard .row button#backspace {
  flex: 1.7;
  /* margin: 0 5px; */
}
</style>