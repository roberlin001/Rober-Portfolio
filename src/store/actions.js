import axios from "axios";

export default {
    handCategoryArr({commit},category){
        const strCategory = category
        commit('handCategoryArr',strCategory)
    },
    handBlogList({commit}){
        axios.get(window.location.href.replace(window.location.pathname,"")+'/api/blogList.json')
        .then((res)=>{
            commit('handBlogList',res.data);
        })
    },
    handInit({commit}){
        return axios.get(window.location.href+'api/portfolio.json')
        .then((res)=>{
            commit('init',res.data);
            return res.data.portfolio;
        })
    },
    handIsLoad({commit},bool){
        // console.log(bool)
        commit('handIsLoad',bool)
    },
    handIsMenu(context){
        const bool = !context.state.isMobileMenu
        context.commit('handIsMenu',bool)
    },
    handIsAboutFalse(context){
        const bool = false;
        context.commit('handIsAboutFalse',bool)
    },
    handIsAboutTrue(context){
        const bool = true;
        context.commit('handIsAboutTrue',bool)
    }
};