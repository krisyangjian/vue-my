<template>
	<div class="c-p">
		<div class="mes"> asdasdasdasdsadasdA Vue {{ message }} </div>
		<el-button type="primary" @click="open">{{ $t("message.hello") }}</el-button>
		<b-cp id="b-p"></b-cp>
		<!-- <c-cp></c-cp> -->
  </div>
</template>

<script>
import Vue from 'vue';
// import { t } from 'element-ui/lib/locale';
// import Locale from 'element-ui/lib/mixins/locale';
import bvv from "./b.vue";
import './a.css';

const asssssss = () => {return 3+3;}
// import cvv from "./c.vue";
// Vue.component('b-cp', bvv);
// import { Button } from 'element-ui';
// Vue.component(Button.name, Button)
	export default {
		name: "aCp",
		// mixins: [Locale],
		data () {
			return {
				message: "aaaaaaaaaaaaaaa"
     	}
		},
    components: {
        'b-cp' : bvv
     },
   		// props: ['todo', 'paddingA'],
   		methods: {
   			open() {
					 Vue.config.lang = 'ja';
					//  console.log(this.$i18n)
					// this.$i18n.locale = 'en';
   				// this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
						//  confirmButtonText: '确定',
						//  cancelButtonText: '取消',
						//  type: 'warning'
					//  })
   				// this.$emit('itemClick', this);
   			}
   		},
      // computed: {
        // paddingStyle() {
        //   // let padding = 20;
        //   window.a = this;
        //   return {paddingLeft: a.paddingA + 'px'}
        // }
      // }
 	}
</script>

<style scoped>
	.c-p {
		margin-left: 100px;
	}
	.mes {
		font-size: 18px;
	}
	#b-p {
		margin-top: 100px;
	}
</style>