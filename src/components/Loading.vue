<template>
    <div class="loading" :class="show">
        <div class="lds-dual-ring"></div>
    </div>
</template>

<script>
export default {
    props: ['open'],
    computed: {
        show() {
            console.log(this.open)
            return this.open ? 'show' : 'hide';
        }
    }
}
</script>

<style>
.loading {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}
.loading.hide {
    display: none;
}
.loading.show {
    display: flex;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>