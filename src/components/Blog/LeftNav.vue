<script>
import { ref } from '@vue/reactivity';
import {useStore} from 'vuex'
export default {
  setup(){
    const store = useStore();
    const tagParent = ref(null);
    const classIdx = ref(0);
    const category = ref('');

    const categoryArr = ()=>{
      return store.getters.categoryArr;
    };

    const handAll = (classNum)=>{
      // alert('handAll')
      classIdx.value = classNum;
      category.value="";
      store.dispatch('handCategoryArr',category.value);
    };

    const handKnowledge = (classNum)=>{
      // alert('handKnowledge')
      classIdx.value = classNum;
      category.value="網頁知識";
      store.dispatch('handCategoryArr',category.value);
    };

    const handShare = (classNum)=>{
      // alert('handShare');
      classIdx.value = classNum;
      category.value="網頁技術分享";
      store.dispatch('handCategoryArr',category.value);
    }

    const handMovie = (classNum)=>{
      // alert('handMovie');
      classIdx.value = classNum;
      category.value="電影哈拉";
      store.dispatch('handCategoryArr',category.value);
    }

    const handNBA = (classNum)=>{
      // alert('handNBA');
      classIdx.value = classNum;
      category.value="NBA反指標";
      store.dispatch('handCategoryArr',category.value);
    }

    const handLife = (classNum)=>{
      // alert('handLife');
      classIdx.value = classNum;
      category.value="生活來打屁";
      store.dispatch('handCategoryArr',category.value);
    }

    return{handAll,handKnowledge,handShare,handMovie,handNBA,handLife,classIdx,categoryArr}
  }
}
</script>

<template>
  <aside class="leftNav">
    <h1>部落格</h1>
    <ul>
      <li><a href="javascript:;" @click="handAll(0)" :class="{current:classIdx==0}">全部文章</a></li>
      <li><a href="javascript:;" @click="handKnowledge(1)" :class="{current:classIdx==1}">網頁知識</a></li>
      <li><a href="javascript:;" @click="handShare(2)" :class="{current:classIdx==2}">網頁技術分享</a></li>
      <li><a href="javascript:;" @click="handMovie(3)" :class="{current:classIdx==3}">電影哈拉</a></li>
      <li><a href="javascript:;" @click="handNBA(4)" :class="{current:classIdx==4}">NBA反指標</a></li>
      <li><a href="javascript:;" @click="handLife(5)" :class="{current:classIdx==5}">生活來打屁</a></li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
@import '~@/assets/scss/_mixins.scss';
.leftNav{
  width:225px;
  @include breakpoint(nb){
    width:$full;
  }
  h1{
    font-size: 30px;
    font-weight: 400;
    color: $white;
    letter-spacing: 3px;
  }
  ul{
    margin-top: 20px;
    @include breakpoint(nb){
      margin-top: 0;
      white-space: nowrap;
      overflow: auto;
    }
    li{
      display: block;
      margin-top: 18px;
      @include breakpoint(nb){
        display: inline-block;
        width: 120px;
        margin-right: 10px;
      }
      a{
        color: $white;
        font-weight: 100;
        font-size: 16px;
        display: block;
        letter-spacing: 1px;
        transition: 0.2s all;
        @include breakpoint(nb){
          border: 1px solid $white;
          padding:5px 0;
          text-align: center;
        }
        &:hover{
          text-decoration: underline;
        }
      }
    }
    .current{
      text-decoration: underline;
      font-weight: 400;
    }
  }
}
</style>