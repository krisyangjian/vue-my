<template>
	<div>
		<div @click="handleClick" :style="[paddingStyle]" > asdasdasdasdsadasdA Vue {{ todo }} </div>
    </div>
</template>

<script>
	export default {
		name: "aCp",
		data () {
			return {
s
				message: "aaaaaaaaaaaaaaa"
     		}
   		},
   		props: ['todo', 'paddingA'],
   		methods: {
   			handleClick() {
   				console.log('item click from item');
   				// this.$emit('itemClick', this);
   			}
   		},
      computed: {
        paddingStyle() {
          // let padding = 20;

          return {paddingLeft: paddingA + 'px'}
        }
      }
 	}
</script>