<script>
import {useRouter} from "vue-router";
import {useStore} from 'vuex';
import { computed, watch } from '@vue/runtime-core';
export default {
    setup(){
        const store = useStore();
        const router = useRouter();

        const isAbout = computed(()=>{
            return store.getters.isAbout
        });
        
        const isMobileMenu = computed(()=>{
            return store.getters.isMobileMenu;
        });

        const handMobileMenu = ()=>{
            store.dispatch('handIsMenu');
            
        };


        const gotoHomeRouter = ()=>{
            router.push({path:`/`});
            store.dispatch('handIsAboutFalse');
            if(window.innerWidth < 600){
                store.dispatch('handIsMenu');
            };
        };

        const gotoBlogRouter = ()=>{
            router.push({path:`/blog`});
            store.dispatch('handIsAboutFalse');
            if(window.innerWidth < 600){
                store.dispatch('handIsMenu');
            };
        };

        const gotoAboutRouter = ()=>{
            router.push({path:`/about`});
            store.dispatch('handIsAboutTrue');
            if(window.innerWidth < 600){
                store.dispatch('handIsMenu');
            }
            
        };

        return {
                gotoAboutRouter,
                gotoHomeRouter,
                isAbout,
                isMobileMenu,
                handMobileMenu,
                gotoBlogRouter
            }
    }
}
</script>

<template>
  <header>
        <img src="~@/assets/img/logo.svg" class="logo" alt="">
        <div class="mobileBtn" @click="handMobileMenu">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <nav :class="{showNav:isMobileMenu}">
            <div><a href="javascript:;" @click="gotoHomeRouter">作品</a></div>
            <div><a href="javascript:;" @click="gotoAboutRouter">關於我</a></div>
            <div><a href="javascript:;" @click="gotoBlogRouter">部落格</a></div>
        </nav>
    </header>
</template>


<style lang="scss" scoped>
@import '~@/assets/scss/_mixins.scss';
header{
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30px;
    align-items: center;
    z-index: 9;
    .logo{
        width: 130px;
    }
    nav{
        @include breakpoint(m1){
            overflow: hidden;
            height: 0;
            width: $full;
            padding-top: 0;
            transition: 0.5s all;
        }
        >div{
            display: inline-block;
            margin-left: 40px;
            @include breakpoint(m1){
                width: $full;
                height: 50px;
                text-align: center;
                line-height: 50px;
                margin-left: 0;
                background-color: rgba(255,255,255,0.1);
            }
            a{
                letter-spacing: 2px;
                color: $white;
                font-size: 14px;
                font-weight: 300;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
    .showNav{
        @include breakpoint(m1){
            height: 100px;
            padding-top: 30px;
        }
    }
    .mobileBtn{
        display: none;
        width: 20px;
        @include breakpoint(m1){
            display: block;
        }
        div{
            height: 2px;
            background-color: $white;
            margin-bottom: 3px;
            &:last-child{
                margin-bottom: 0;
            }
        }
    }
}
</style>