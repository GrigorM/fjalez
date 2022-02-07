<template>
<div class="board-container">
    <div class="board">
        <div class="word" v-for="(word, wIndex) in words" v-bind:key="wIndex">
            <LetterTile :letter="letter" class="letter" v-for="(letter, lIndex) in word" v-bind:key="lIndex"/>
        </div>
    </div>
</div>
</template>

<script>
import LetterTile from './LetterTile.vue'

export default {
    components: {
      LetterTile
    },
    props: ['words'],
}
</script>

<style scoped>
.board-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
}
.board {
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 5px;
    text-align: center; 
    margin: 10px auto;
    height: calc(100vh - var(--keyboard-and-header));
    width: calc(5*(100vh - var(--keyboard-and-header))/6);
    max-width: 80vw;
    max-height: calc(6*80vw/5);
}
.board .word {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
}
</style>