import App from './v.vue'
import Vue from 'vue'
// import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select } from 'element-ui'

Vue.component(Button.name, Button)

new Vue({
	el: '#main',
    components: { App },
    created: function () {
        // `this` 指向 vm 实例
        console.log('a is: ' + this.a)
    },
    template: '<App/>',
    // render: h => h(App),
    data: {
    	a: 1
    }
 });