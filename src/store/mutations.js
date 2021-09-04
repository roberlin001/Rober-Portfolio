import state from "./state";

export default{
    init(state,payload){
        state.portfolioArr = payload.portfolio;
    },
    handBlogList(state,payload){
        state.categoryArr = payload.datas;
        state.blogListArr = payload.datas;
    },
    handCategoryArr(state,strCategory){
        state.categoryArr = state.blogListArr.filter((item)=>{
            if(strCategory !== ''){
                return item.kind === strCategory;
            }else{
                return state.blogListArr
            }
        });
    },
    categoryKind(state,categoryKind){
        state.categoryKind = categoryKind;
    },
    handIsLoad(state,bool){
        state.isLoad = bool
    },
    handIsMenu(state,bool){
        state.isMobileMenu = bool;
    },
    handIsAboutFalse(state,bool){
        state.isAbout = bool
    },
    handIsAboutTrue(state,bool){
        state.isAbout = bool
    },
}