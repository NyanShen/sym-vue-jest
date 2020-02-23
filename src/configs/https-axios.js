import axios from 'axios';
import storage from "@/common/storage";

axios.defaults.timeout = 5000;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use(
    (config) => {
        if (config.data && config.data.$skipAuthHandler) {
            config.$skipAuthHandler = true;
            delete config.data.$skipAuthHandler;
        }
        if (config.params && config.params.$skipAuthHandler) {
            config.$skipAuthHandler = true;
            delete config.params.$skipAuthHandler;
        }
        //config.headers.Authorization = _loginUser.authorization();
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
);

axios.interceptors.response.use(
    (response) => {
        return Promise.resolve(response);
    },
    (error) => {
        const err = error.response;
        storage.clearAllItems();
        if (err.status === 401 && !!err.config && !err.config.$skipAuthHandler) {
            storage.clearAllItems();
            window.location = '/unauthorization';
        }
        //toastr.error(err.data.message);
        return Promise.reject(error);
    }
);

function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                typeof resolve === 'function' && resolve(res.data);
            }).catch(err => {
                typeof reject === 'function' && reject(err);
            })
    })
}

function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: param })
            .then(res => {
                typeof resolve === 'function' && resolve(res.data);
            }).catch(err => {
                typeof reject === 'function' && reject(err);
            })
    })
}

function fetchRequest(param) {
    return new Promise((resolve, reject) => {
        axios.request({
            url: param.url || '',
            method: param.method || 'GET',
            data: param.datq || null,
            params: param.params || '',
            headers: {
                'Content-Type': param.contenType || "application/json;charset=UTF-8"
            }
        }).then(res => {
            typeof resolve === 'function' && resolve(res.data);
        }).catch(err => {
            typeof reject === 'function' && reject(err);
        })
    })
}
export default { fetchGet, fetchPost, fetchRequest }