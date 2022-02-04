<template>
<div class="settings" :class="open ? 'show': 'hide'">
    <header class="settings__header">
        <h2>Si te luajme</h2>
        <button class="close-settings" @click="closeSettings">x</button>
    </header>
    <article class="settings__body">
        <p>Gjej FJALËZËN me 6 prova</p>
        <p>Cdo provë duhet të jetë një fjalë e vlefshme me 5 gërma (gërmat dyshe numërohen si 2 gërma 🙁)</p>
        <p></p>
        <p>Pas cdo prove ngjyra e gërmave do ndryshojë për të treguar sa pranë gjetjes së fjales je.</p>
        <hr />
        <h2>Shembuj</h2>
        <div class="word">
            <LetterTile :letter="{letter: 'q', state: 'correct'}"/>
            <LetterTile :letter="{letter: 'a', state: ''}"/>
            <LetterTile :letter="{letter: 'r', state: ''}"/>
            <LetterTile :letter="{letter: 't', state: ''}"/>
            <LetterTile :letter="{letter: 'ë', state: ''}"/>
        </div>
        <p>Gërma Q gjendet në fjale në atë pozicion</p>
        <div class="word">
            <LetterTile :letter="{letter: 's', state: ''}"/>
            <LetterTile :letter="{letter: 'i', state: ''}"/>
            <LetterTile :letter="{letter: 'k', state: 'present'}"/>
            <LetterTile :letter="{letter: 'u', state: ''}"/>
            <LetterTile :letter="{letter: 'r', state: ''}"/>
        </div>
        <p>Fjala përmban gërmën K, por në një tjetër pozicion</p>
        <div class="word">
            <LetterTile :letter="{letter: 'm', state: ''}"/>
            <LetterTile :letter="{letter: 'a', state: ''}"/>
            <LetterTile :letter="{letter: 't', state: ''}"/>
            <LetterTile :letter="{letter: 'j', state: 'absent'}"/>
            <LetterTile :letter="{letter: 'e', state: ''}"/>
        </div>
        <p>Fjala nuk përmban gërmën J</p>

        <hr />
        <p>Cdo ditë një FJALËZ e re</p>
    </article>
</div>
</template>

<script>
import LetterTile from './LetterTile';
export default {
    components: {
        LetterTile
    },
    props: ['open', 'page'],
    methods: {
        closeSettings() {
            this.$emit('closeSettings');
        }
    },
    mounted() {
        window.addEventListener('keyup', (e) => {
            if (this.open && e.key === 'Escape') {
                this.$emit('closeSettings');
            }
        })
    }
}
</script>

<style scoped>
.settings {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--background-color);
    max-width: 500px;
    margin: auto;
}
.settings.show {
    display: block;
}
.settings.hide {
    display: none;
}
.settings__header {
    justify-content: center;
    text-transform: uppercase;
}
.settings__body {
    font-size: 1.4rem;
}
.word {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
  width: 220px;
  height: 40px;
}
.close-settings {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: white;
    position: absolute;
    right: 5px;
}
</style>