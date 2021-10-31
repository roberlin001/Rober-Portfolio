import axios from "axios";
import Cookies from 'js-cookie'

export default{
    state:{
        isLogin:false
    },
    actions:{
        handLogin({commit},payload){
            return axios.post(`${process.env.VUE_APP_MAIL_LOGIN}`,JSON.stringify(payload),{headers:{'Content-Type': 'application/json'}}).then((res)=>{
                commit('handLogin',res);
            });
        },
        handIsLogin({commit},bool){
            commit('handIsLogin',bool)
        }
    },
    mutations:{
        handLogin(state,res){
            console.log(res.data);
            Cookies.set('login', res.data)
            state.isLogin = true;
        },
        handIsLogin(state,bool){
            state.isLogin = bool;
        }
    },
    getters:{
        loginState(state){
            return state.isLogin
        }
    },
}