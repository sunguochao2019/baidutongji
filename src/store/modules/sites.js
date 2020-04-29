import Axios from 'axios'

const state = {
    siteList: [],
    defaultSiteId: sessionStorage.getItem('defaultSiteId') ? sessionStorage.getItem('defaultSiteId') : '',
    getData: []
}

const getters = {

}

const mutations = {
    checkSiteList(state, payload) {
        //console.log(payload + '----->');
        state.siteList = payload
    },
    setSelectSite(state, payload) {
        state.defaultSiteId = payload
        sessionStorage.setItem('defaultSiteId', payload);
    },
    getData(state, payload) {
        state.getData = payload
    }
}

const actions = {
    async getSiteList({ commit }) {
        //console.log(payload);
        const response = await Axios.post("/getSiteList",
            {
                header: {
                    username: sessionStorage.getItem('Username'),
                    password: sessionStorage.getItem('Password'),
                    token: sessionStorage.getItem('Authorization')
                }
            })
        //console.log(response);
        const status = response.data.header.status;

        if (status === 0) {
            const siteList = response.data.body.data[0].list;
            commit('checkSiteList', siteList)
        } else if (status === 3) {
            console.log("error------>" + response.data.header.failures[0])
        }
    }
    , async getData({ commit }, payload) {
        //console.log(payload);
        const response = await Axios.post("/getData",
            {
                header: {
                    username: sessionStorage.getItem('Username'),
                    password: sessionStorage.getItem('Password'),
                    token: sessionStorage.getItem('Authorization')
                },
                body: payload
            })
        //console.log(response);
        const status = response.data.header.status;

        if (status === 0) {
            const reqData = response.data.body.data[0].result;
            //console.log(reqData);
            commit('getData', reqData)
        } else if (status === 3) {
            console.log("error------>" + response.data.header.failures[0])
        }
    }

}

export default { state, getters, mutations, actions }