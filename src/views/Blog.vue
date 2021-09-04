<script>
import LeftNav from '@/components/Blog/LeftNav.vue';
export default {
    components:{
        LeftNav,
    },
    setup(){
      return{}
    }
}
</script>

<template>
  <div class="blogContainer">
    <LeftNav />
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
  @import '~@/assets/scss/_mixins.scss';
  .blogContainer{
    max-width: 1290px;
    box-sizing: border-box;
    padding: 60px 30px;
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @include breakpoint(m){
      padding: 30px;
    }
    @include breakpoint(nb){
      flex-wrap: wrap;
    }
  }
</style>