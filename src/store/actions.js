export default {
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
    },
    
};