import axios from "axios";

export default{
    state:{
        isLoad : false,
        portfolioArr:[],
    },
    actions:{
        handInit({commit}){
            return axios.get(`${process.env.VUE_APP_CROS}${window.location.host}/api/portfolio.json`)
            .then((res)=>{
                commit('init',res.data);
                return res.data.portfolio;
            })
        },
        handIsLoad({commit},bool){
            commit('handIsLoad',bool)
        },
    },
    mutations:{
        init(state,payload){
            state.portfolioArr = payload.portfolio;
        },
        handIsLoad(state,bool){
            state.isLoad = bool
        },
    },
    getters:{
        isLoad(state){
            return state.isLoad;
        },
        portfolioArr(state){
            return state.portfolioArr;
        },
    }
}