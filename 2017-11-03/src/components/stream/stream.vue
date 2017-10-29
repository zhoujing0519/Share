<template>
	<container :title="title" :sub="sub">
		<div class="stream">
			<div class="column">
				<p class="sub-title">简介：</p>
				<p>1. 解放双手</p>
				<p>2. 自动化</p>
				<p>3. 提高效率</p>
			</div>
			<div class="column">
				<p class="sub-title">功能：</p>
				<p>1. 自动刷新页面</p>
				<p>2. 压缩css</p>
				<p>3. 压缩js</p>
				<p>4. 编译sass、less、stylus</p>
				<p>5. 制作雪碧图</p>
				<p>6. 等等等等</p>
			</div>
		</div>
	</container>
</template>

<script>
	import Container from '@/base/container/container'

	export default {
		data(){
			return {
				title: '优化前端工作流程',
				sub: 'Grunt、Gulp'
			}
		},
		components: {
			Container
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>