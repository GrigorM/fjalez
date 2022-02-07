<template>
    <aside class="backdrop" :class="showModal" tabIndex="-1" role="presentation" >
        <div class="modal" role="dialog" aria-modal="true">
            <div class="modal__header">
                <h3>Statistika</h3>
                <button class="close" @click="closeModal">x</button>
            </div>
            <div class="modal__body">
                <p>Nuk janë akoma gati. Mundesh thjesht të ndash rezultatin në fund të lojës</p>
                
                <button v-if="finished" class="share" @click="shareBoard">Share</button>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    props: ['open', 'finished'],
    computed: {
        showModal() {
            return this.open ? 'show' : 'hide';
        }
    },
    methods: {
        shareBoard() {
            this.$emit('share')
            this.$emit('closeModal');
        },
        closeModal() {
            this.$emit('closeModal');
        }
    },
    mounted() {
        document.addEventListener('keyup', (e) => {
            if (this.open && e.key === 'Escape') {
                this.$emit('closeModal');
            }
        }) 
    }
}
</script>

<style scoped>
.backdrop {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.backdrop.show {
    display: block;
}

.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 500px;
    min-height: 100px;
    margin: 0 auto;

    background-color: #121213;
    border-radius: 7px;
    box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 1.4rem;
}
.modal__header h3 {
    margin: 0;
}
.modal__body {
    text-align: center;
}
.modal .close {
    position: absolute;
    top: 5px;
    right: 10px;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
}
.modal .share {
    background-color: #538d4e;
    color: white;
    border: 1px solid #538d4e;
    width: 150px;
    height: 52px;
    padding: 7px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
}
</style>