import Vue from "vue";
import Vuex from "vuex";
import login_module from "@/store/modules/login";
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {login: login_module}
})

export default store;