    // 入口文件

import Vue from "vue"
import app from "./app.vue"
import "@babel/polyfill"
import "./assets/css/main.css"


let ele = new Vue({
    render: function(createElement,context){
        return createElement(app)
    }
})


ele.$mount("#app")