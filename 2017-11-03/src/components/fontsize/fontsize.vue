<template>
	<container :title="title" :sub="sub">
		<div class="fontsize">
			<div class="column">
				<p class="sub-title">一、字号：</p>
				<p>标题（大）、副标（中）、正文（小）...</p>
			</div>
			<div class="column">
				<p class="sub-title">二、颜色：</p>
				<p>主题、背景、标题、正文、边框、遮罩、阴影...</p>
				<img src="./colors.png">
			</div>
			<div class="column">
				<p class="sub-title">三、圆角：</p>
				<p>直角、小、中、大...</p>
			</div>
			<div class="column">
				<p class="sub-title">四、等等等等...</p>
			</div>
		</div>
	</container>
</template>

<script>
	import Container from '@/base/container/container'

	export default {
		data(){
			return {
				title: '字号、颜色等问题',
				sub: '如何划分'
			}
		},
		components: {
			Container
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>