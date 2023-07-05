
import axios from 'axios'
import qs from 'qs'
import {
    getCurDate,
    setSessionStorage,
    getSessionStorage,
    removeSessionStorage,
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage
} from '../utils/common'

export default {
    install(app, options) {
        // 设置axios的基础url部分
        axios.defaults.baseURL = 'https://dog.ceo/api';
        app.config.globalProperties.$axios = axios
        app.config.globalProperties.$qs = qs

        // 挂载全局方法
        app.config.globalProperties.$getCurDate = getCurDate;
        app.config.globalProperties.$setSessionStorage = setSessionStorage;
        app.config.globalProperties.$getSessionStorage = getSessionStorage;
        app.config.globalProperties.$removeSessionStorage = removeSessionStorage;
        app.config.globalProperties.$setLocalStorage = setLocalStorage;
        app.config.globalProperties.$getLocalStorage = getLocalStorage;
        app.config.globalProperties.$removeLocalStorage = removeLocalStorage;
    }
}


