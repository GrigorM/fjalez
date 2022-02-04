<template>
    <div class="letter" :class="letter.state">
        {{ letter.letter }}
    </div>
</template>

<script>
export default {
    props: ['letter']
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