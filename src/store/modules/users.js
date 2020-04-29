import Axios from 'axios'

const state = {
    //user用户数据
    Username: sessionStorage.getItem('Username') ? sessionStorage.getItem('Username') : '',
    Password: sessionStorage.getItem('Password') ? sessionStorage.getItem('Password') : '',
    Authorization: sessionStorage.getItem('Sitelist') ? sessionStorage.getItem('Sitelist') : ''
}

const getters = {


}

const mutations = {
    loginIn(state, payload) {

        state.Authorization = payload.token;
        state.Username = payload.username;
        state.Password = payload.password;

        sessionStorage.setItem('Authorization', payload.token);
        sessionStorage.setItem('Username', payload.username);
        sessionStorage.setItem('Password', payload.password);
        //console.log(state.siteLlist + '--->');
    },
    loginOut(state) {
        state.Authorization = ""
        sessionStorage.clear()
    }
}

const actions = {
    async checkLogin({ commit }, payload) {
        //console.log(payload);
        const response = await Axios.post("/getSiteList",
            {
                header: {
                    username: payload.username,
                    password: payload.password,
                    token: payload.token
                }
            })
        //console.log(response);
        const status = response.data.header.status;
        if (status === 0) {
            commit('loginIn', payload)
        } else if (status === 3) {
            console.log("error------>" + response.data.header.failures[0].message+"")
        }
    }
}

export default { state, getters, mutations, actions }