import axios from "axios";

export default{
    state:{
        blogListArr:[],
        categoryArr:[],
        categoryKind:'',
        blogData:{},
        classIdx:0,
    },
    actions:{
        blogData({commit},id){
            return axios.get(`${process.env.VUE_APP_BLOG_API}${id}`).then((res)=>{
                commit('blogData',res.data.datas);
            }).catch((err)=>{
                return err.response.status;
            });
        },
        classIdx({commit},num){
            commit('classIdx',num)
        },
        handCategoryArr({commit},category){
            const strCategory = category
            commit('handCategoryArr',strCategory)
        },
        handBlogList({commit}){
            return axios.get(process.env.VUE_APP_BLOG_API)
            .then((res)=>{
                let sortBlog = res.data.datas.sort((a,b)=>{
                    return b.id - a.id 
                })
                commit('handBlogList',sortBlog);
                // console.log(res.data);
                return sortBlog
            })
        },
        categoryKind({commit},kind){
            commit('categoryKind',kind)
        },
    },
    mutations:{
        blogData(state,payload){
            state.blogData = payload
        },
        classIdx(state,num){
            state.classIdx = num;
        },
        handBlogList(state,payload){
            state.categoryArr = payload;
            state.blogListArr = payload;
        },
        handCategoryArr(state,strCategory){
            // console.log(state.categoryArr);
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
    },
    getters:{
        blogListArr(state){
            return state.blogListArr;
        },
        categoryArr(state){
            return state.categoryArr;
        },
        categoryKind(state){
            return state.categoryKind;
        },
        blogData(state){
            return state.blogData;
        },
        classIdx(state){
            return state.classIdx;
        },
    }
}