<template>
	<div>
		<div> A Vue {{ todo }} </div>
    </div>
</template>

<script>
	export default {
		name: "aCp",
		data () {
			return {
				message: "aaaaaaaaaaaaaaa"
     		}
   		},
   		props: ['todo']
 	}
</script>