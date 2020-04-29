
const state = {
    //菜单展开
    Collapsed: false,
    // Collapsed: sessionStorage.getItem('Collapsed') ? sessionStorage.getItem('Collapsed') : ""

}

const getters = {

}

const mutations = {
    setCollapsed(state, payload) {
        state.Collapsed = payload;
       // sessionStorage.setItem('Collapsed', payload);
       // console.log(sessionStorage.getItem('Collapsed'))
       
    }
}

const actions = {

}

export default { state, getters, mutations, actions }