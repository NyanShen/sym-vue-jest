import Vue from "vue";
import QS from "qs";
import axios from "axios";
import App from "./app.vue";
import Element from "element-ui";
import store from "@/store/index";
import router from "./configs/routes";
import 'font-awesome/css/font-awesome.min.css';
import './styles/_element.variables.scss';
import './styles/main.scss';

Vue.use(Element);
Vue.prototype.qs = QS;
Vue.prototype.$axios = axios;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount(document.getElementById('root'))