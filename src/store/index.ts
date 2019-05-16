import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 设置变量
    },
    getters: {
        ...getters
        // 获取返回数据，从state中取值
    },
    mutations: {
        // 更新返回数据
    },
    actions: {
        // 请求的接口在这里触发
    },
    modules: {

    }
});
