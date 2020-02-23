import { simpleLocalStorage } from "simple-storage";
const types = {
    SWITCH_LOGIN: 'SWITCH_LOGIN',
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const dafaultState = {
    loginStatus: "QRCODE",
    currentUser: {}
};

const getters = {
    loginStatus() {
        return localStorage.getItem('loginStatus')
    }
};

const actions = {
    switch_login({ commit }, payload) {
        simpleLocalStorage.setItem('loginStatus', payload);
        commit(types.SWITCH_LOGIN, payload);
    },
    set_current_user({ commit }, payload) {
        payload.fullName = encodeURIComponent(payload.fullName || '');
        const btoAUser = btoa(JSON.stringify(payload));
        simpleLocalStorage.setItem('currentUser', btoAUser);
        commit(types.SET_CURRENT_USER, btoAUser);
    }
};

const mutations = {
    [types.SWITCH_LOGIN]: (state, data) => {
        state.loginStatus = data;
    },
    [types.SET_CURRENT_USER]: (state, data) => {
        state.currentUser = data;
    }
};

export default {
    namespaced: true,
    state: dafaultState,
    getters,
    actions,
    mutations
};