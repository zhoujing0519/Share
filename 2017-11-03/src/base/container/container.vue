<template>
	<div class="container">
		<h1 class="title">{{title}}</h1>
		<span class="sub">{{sub}}</span>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '标题',
			},
			sub: {
				type: String,
				default: '副标题',
			}
		},
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import './container'
</style>