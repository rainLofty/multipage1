import Vue from 'vue'

import "@css/index.css"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Http from "@/utils/http.js"
Vue.prototype.http = Http;