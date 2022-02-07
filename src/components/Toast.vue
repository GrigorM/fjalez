<template>
    <div class="toast" :class="openToast">{{ message }}</div>
</template>

<script>
export default {
    props: ['message', 'open'],
    computed: {
      openToast() {
        if (this.open) return 'show';
        else return 'hide';
      }
    }
}
</script>

<style scoped>
.toast {
  background-color: white;
  color: #3a3a3a;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 160px;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 10px;
  font-size: 1.6rem;
  font-weight: bold;
  visibility: hidden;
}

.toast.show {
  visibility: visible;
  animation: fadein 0.1s, fadeout 1.5s 2.5s;
}


@keyframes fadein {

  from {

    bottom: 0;

    opacity: 0;

  }

  to {

    bottom: 30px;

    opacity: 1;

  }

}


@keyframes fadeout {

  from {

    bottom: 30px;

    opacity: 1;

  }

  to {

    bottom: 0;

    opacity: 0;

  }

}
</style>