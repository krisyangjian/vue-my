<template>
	<div>
		<div> asdasdasdasdsadasdA Vue {{ message }} </div>
		<!-- <b-cp></b-cp> -->
		<c-cp></c-cp>
  </div>
</template>

<script>
import Vue from 'vue';
import bvv from "./b.vue";
// import cvv from "./c.vue";
Vue.component('b-cp', bvv);
	export default {
		name: "aCp",
		data () {
			return {
				message: "aaaaaaaaaaaaaaa"
     		}
			 }
    // components: {
    //     'b-cp' : bvv
    //  }
   		// props: ['todo', 'paddingA'],
   		// methods: {
   		// 	handleClick() {
   		// 		console.log('item click from item');
   		// 		// this.$emit('itemClick', this);
   		// 	}
   		// },
      // computed: {
        // paddingStyle() {
        //   // let padding = 20;
        //   window.a = this;
        //   return {paddingLeft: a.paddingA + 'px'}
        // }
      // }
 	}
</script>
<!--
<style>
  div {
    background-color: $--background-color-head;
  }
  
</style>-->