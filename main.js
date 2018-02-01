import './static/css/reset.css';
import Vue from 'vue';
import ElementUI from 'element-ui';
import { store } from './src/store/store';
import router from './src/router/config.js';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './src/http/axios.js';
import App from './App.vue';
Vue.use(ElementUI);
new Vue({
    el: '.container',
    store,
    router,
    render: function (createElement) {
        return createElement(App);
    } 
});
if (module.hot) {
    module.hot.accept();
}