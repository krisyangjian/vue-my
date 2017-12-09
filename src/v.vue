<template>
	<div>
		<div v-on:click="modifyMsg">
      sss
	    	<!-- <p> {{ greeting }} world!</p>
	    	<el-button :type="greeting">主要按钮</el-button>
  	    <el-button type="success">成功按钮</el-button>
  	    <el-button type="info">信息按钮</el-button>
  	    <el-button type="warning">警告按钮</el-button>
  	    <el-button type="danger">危险按钮</el-button> -->
  	</div>
  	<!-- <div><a-cp v-bind:todo="greeting" @itemClick="handleItemClick" paddingA="100"></a-cp></div> -->
    <div> {{ computedValue }} </div>
    <div> {{ obj.sss }} </div>
  </div>
</template>

<script>
	// import { Button, Select } from 'element-ui'
	// import  A from './a.vue'
	// import Vue from 'vue'

	// Vue.component(A.name, A)
	// Vue.component(Button.name, Button)

	export default {
		name: "aBp",
		data () {
			return {
				greeting: 'button',
        num: 1,
        obj: {
          name: "yangjian"
        }
     	}
   	},
    // props: [],
   		// components: { aCp: A },
   		methods: {
   			modifyMsg: function() {
   				// this.greeting = "submit"
       //    this.greeting = "sss";
       //    this.$nextTick(function() {
       //      this.greeting = "3333";
       //    })
       //    let a = 3;
       //    let b = 4;
       //    this.greeting = "45asd";
       //    if(this.computedValue) {
       //      console.log(this.computedValue);
       //      // this.computedValue = "modify ÷computedValue";
       //    } else {
       //      console.log("noooooooo")
       //    }
          // console.log(this.num);
         this.obj.sss = "kris"
   			},
        functionValue: function() {
          console.log("function exec...............")
          return this.greeting;
        },
        handleItemClick() {
          console.log('item click from parent')
        }
   		},
      computed: {
        computedValue: function() {
          console.log("computed exec...............")
          return this.obj.name;
        }
      }
 	}
</script>

