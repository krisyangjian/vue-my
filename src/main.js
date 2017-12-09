import App from './v.vue'
import Vue from 'vue'
// import 'element-ui/lib/theme-chalk/index.css'

window.test = 1111111;
var vm = new Vue({
	el: '#main',
    components: { App },
    created: function () {
        // `this` 指向 vm 实例
        console.log('a is: ' + this.a)
    },
    template: '<div class="sdsd"><app></app></div>',
    // render: h => h(App),
    data: {
    	a: 1
    }
 });
console.log(vm.$children.computedValue)
// setTimeout(function(){
// 	vm.$children[0].fullName = "fuck!!!!!!!!!!!!!"
// }, 3000)