<template>
<div class="settings" :class="open ? 'show': 'hide'">
    <header class="settings__header">
        <h2 v-if="page=='info'">Si te luajme</h2>
        <h2 v-if="page=='settings'">Parametrat</h2>
        <button class="close-settings" @click="closeSettings">x</button>
    </header>
    <article v-if="page=='info'" class="settings__body">
        <p>Gjej FJALËZËN me 6 prova</p>
        <p>Cdo provë duhet të jetë një fjalë e vlefshme me 5 gërma (gërmat dyshe numërohen si 2 gërma 🙁)</p>
        <p></p>
        <p>Pas cdo prove ngjyra e gërmave do ndryshojë për të treguar sa pranë gjetjes së fjales je.</p>
        <hr />
        <h2>Shembuj</h2>
        <div class="word">
            <LetterTile :letter="{letter: 'q', state: 2}"/>
            <LetterTile :letter="{letter: 'a', state: ''}"/>
            <LetterTile :letter="{letter: 'r', state: ''}"/>
            <LetterTile :letter="{letter: 't', state: ''}"/>
            <LetterTile :letter="{letter: 'ë', state: ''}"/>
        </div>
        <p>Gërma Q gjendet në fjale në atë pozicion</p>
        <div class="word">
            <LetterTile :letter="{letter: 's', state: ''}"/>
            <LetterTile :letter="{letter: 'i', state: ''}"/>
            <LetterTile :letter="{letter: 'k', state: 1}"/>
            <LetterTile :letter="{letter: 'u', state: ''}"/>
            <LetterTile :letter="{letter: 'r', state: ''}"/>
        </div>
        <p>Gërma K është pjesë e fjalës, por jo në këtë pozicion</p>
        <div class="word">
            <LetterTile :letter="{letter: 'm', state: ''}"/>
            <LetterTile :letter="{letter: 'a', state: ''}"/>
            <LetterTile :letter="{letter: 't', state: ''}"/>
            <LetterTile :letter="{letter: 'j', state: 0}"/>
            <LetterTile :letter="{letter: 'e', state: ''}"/>
        </div>
        <p>Gërma J nuk është pjesë e fjalës</p>

        <hr />
        <p>Cdo ditë një FJALËZ e re!</p>
    </article>
    <article v-else-if="page=='settings'">
        <p>Nuk janë akoma gati.</p>
        <p>
            <input type="text" v-model="secret"/>
            <button @click="reset">Reset</button>
        </p>
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
    data() {
        return {
            le_secret: '00000',
            secret: ''
        }
    },
    methods: {
        closeSettings() {
            this.$emit('closeSettings');
        },
        reset() {
            if (this.secret === this.le_secret) {
                localStorage.removeItem('fjaleza')
                window.location.reload()
                // this.$emit('reset')
            }
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
    padding: 0 10px;
    font-size: 1.4rem;
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