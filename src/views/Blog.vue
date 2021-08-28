<script>
import LeftNav from '@/components/Blog/LeftNav.vue';
import ListBlog from '@/components/Blog/ListBlog.vue';
export default {
    components:{
        LeftNav,
        ListBlog
    }
}
</script>

<template>
  <div class="blogContainer">
    <LeftNav />
    <ListBlog />
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