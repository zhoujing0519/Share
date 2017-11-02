<template>
	<container :title="title" :sub="sub">
		<div class="fontsize">
			<div class="column">
				<p class="sub-title">一、字号：</p>
				<p>用到了哪些字号，给个区间</p>
			</div>
			<div class="column">
				<p class="sub-title">二、颜色：</p>
				<p>主题、背景、标题、正文、边框、遮罩、阴影...</p>
				<img src="./colors.png">
				<p>颜色不一定要用16进制表示，看不出关联性</p>
				<p>rgba（red-green-blue-alpha）：比如指定一个灰色为基准色，通过调整它的透明度，变相显示明暗</p>
				<p>hsla（hue-saturation-lightness-alpha）：指定一个色相，通过调整它的饱和度和明暗度，来修改颜色</p>
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