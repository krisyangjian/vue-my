<template>
	<div>
		<div v-on:click="modifyMsg">
	    	<p> {{ greeting }} world!</p>
	    	<el-button :type="greeting">主要按钮</el-button>
  	    <el-button type="success">成功按钮</el-button>
  	    <el-button type="info">信息按钮</el-button>
  	    <el-button type="warning">警告按钮</el-button>
  	    <el-button type="danger">危险按钮</el-button>
  	</div>
  	<div><a-cp v-bind:todo="greeting"></a-cp></div>
  </div>
</template>

<script>
	import { Button, Select } from 'element-ui'
	import  A from './a.vue'
	import Vue from 'vue'

	// Vue.component(A.name, A)
	Vue.component(Button.name, Button)

	export default {
		name: "aBp",
		data () {
			return {
				greeting: 'button'
     		}
   		},
   		components: { aCp: A },
   		methods: {
   			modifyMsg: function() {
   				this.greeting = "submit"
   			}
   		}
 	}
</script>

