<template>
	<container :title="title" :sub="sub">
		<div class="handle">
			<div class="column">
				<p class="sub-title">一、结构（更直观）</p>
				<div>
					<img src="./html.png">
					<img src="./styl.png">
					<img src="./css.png">
				</div>
			</div>
			<div class="column">
				<p class="sub-title">二、变量（可以统一修改）</p>
				<div>
					<p>文件：variable.styl</p>
					<img src="./variable.png">
				</div>
			</div>
			<div class="column">
				<p class="sub-title">三、函数（Mixin：混入）</p>
				<div>
					<p>文件：mixin.styl</p>
					<img src="./function.png">
				</div>
			</div>
			<div class="column">
				<p class="sub-title">四、支持模块引入（@import）</p>
				<div>
					<img src="./import.png">
				</div>
			</div>
		</div>
	</container>
</template>

<script>
	import Container from '@/base/container/container'

	export default {
		data(){
			return {
				title: '预处理器',
				sub: 'Sass、Less、Stylus'
			}
		},
		components: {
			Container
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import './handle'
</style>