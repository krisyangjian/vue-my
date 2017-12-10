import App from './a.vue'
import Vue from 'vue'
import cvv from "./c.vue";


Vue.component('c-cp', cvv);
// import 'element-ui/lib/theme-chalk/index.css'
Vue.component('app', App)
window.sss = Vue.component('c0', {
    props: ['todo'],
    // created: function() {
    //     console.log(this.todo)
    // },
    template: '<div>{{ todo }}</div>'
})
var Child = {
    template: '<div>A custom component!</div>'
  }
// window.test = 1111111;
window.obj = {
    name: "yangjian"
}
window.vm = new Vue({
	el: '#main',
    // components: {
    //     'c-0' : Child
    //  },
    // created: function () {
        // `this` 指向 vm 实例
        // console.log('a is: ' + this.a)
    // },
    template: '<div class="sdsd"><app></app></div>',
    // render: h => h(App),
    data: {
    	a: 9
    },
    computed: {
        sss: function() {
            return this.a+9;
        }
    }
 });
//  window.vm2 = new Vue({
// 	el: '#app',
//     // components: { c-0 },
//     // created: function () {
//         // `this` 指向 vm 实例
//         // console.log('a is: ' + this.a)
//     // },
//     template: '<div class="sdsd"><b-cp></b-cp></div>'
//  });
// console.log(vm.$children.computedValue)
// setTimeout(function(){
// 	vm.$children[0].fullName = "fuck!!!!!!!!!!!!!"
// }, 3000)

