<template>
<div class="board-container">
    <div class="board">
        <div class="word" v-for="(word, wIndex) in words" v-bind:key="wIndex">
            <div class="letter" :class="letter.state" v-for="(letter, lIndex) in word" v-bind:key="lIndex">
                {{ letter.letter }}
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['words'],
}
</script>