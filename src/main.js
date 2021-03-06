import App from './a.vue'
import Vue from 'vue'
import cvv from "./c.vue";
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import elocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import VueI18n from 'vue-i18n';

Vue.use(ElementUI);

// Vue.component('c-cp', cvv);
// import 'element-ui/lib/theme-chalk/index.css'
Vue.component('app', App);

var locales = {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    ja: {
      message: {
        hello: 'こんにちは、世界'
      }
    }
}
// Vue.config.lang = 'en'
Vue.use(VueI18n);
// Object.keys(locales).forEach(function (lang) {
//     Vue.locale(lang, locales[lang])
// })
Vue.config.lang = 'en';
Vue.locale('ja', locales.ja)
Vue.locale('en', locales.en)
// i18n.locale = 'en';
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
    // i18n,
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
    mounted: function() {
        console.log(this.$i18n);
        var that = this;
        setTimeout(function() {
            that.a = 10;
        }, 4000)
    },
    computed: {
        sss: function() {
            return this.a+9;
        }
    }
 });


 window.vmObj = new Vue({data: {
     b: 10
 }})
 vmObj.$watch("$data", function(var0, var1) {
 }, { deep: true });
 


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

