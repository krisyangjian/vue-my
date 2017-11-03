import App from './v.vue';
import Vue from 'vue';

new Vue({
   el: '#main',
   render: h => h(App),
  	data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
 });