<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import FadeBg from '@/components/FadeBg.vue';
import { onBeforeMount, onMounted } from '@vue/runtime-core';
export default {
  components:{
    Header,
    Footer,
    FadeBg,
  },
}
</script>

<template>
  <Header />
  <FadeBg />
  <!-- <About /> -->
  <router-view></router-view>
  <Footer />
</template>

<style lang="scss">
@import '~@/assets/scss/_mixins.scss';
@import '~@/assets/scss/_rest.scss';
button{
  position: relative;
  z-index: 5;
}
</style>