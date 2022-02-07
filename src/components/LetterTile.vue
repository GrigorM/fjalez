<template>
    <div class="letter" :class="letterState">
        {{ letter.letter }}
    </div>
</template>

<script>
import { LETTER_STATE } from '../assets/constants';

export default {
    props: ['letter'],
    computed: {
      letterState() {
        return LETTER_STATE[this.letter.state];
      }
    }
}
</script>

<style scoped>
.letter {
  border: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
}
.letter.absent {
  background-color: #3a3a3c;
}
.letter.present {
  background-color: #b59f3b;
}
.letter.correct {
  background-color: #538d4e;
}
</style>