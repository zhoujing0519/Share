<template>
	<container :title="title" :sub="sub">
		<div class="pack">
			<div class="column">
				<p class="sub-title">简介：</p>
				<p>1. 打包工具</p>
				<p>2. 模块化识别</p>
				<p>3. 编译模块代码</p>
			</div>
			<div class="column">
				<p class="sub-title">Seajs / Requirejs：</p>
				<p>1. 在线编译模块的方案，相当于在页面上加载一个CMD/AMD解释器</p>
				<p>2. 使得浏览器能够识别define、exports、module</p>
			</div>
			<div class="column">
				<p class="sub-title">Webpack / Browerify：</p>
				<p>1. 预编译模块的方案，不需要在页面上加载一个CMD/AMD解释器</p>
				<p>2. 无论是AMD、CMD、ES6风格的模块化，它都能识别，并将它们编译成浏览器能识别的JS</p>
				<div>
					<img src="./webpack.png">
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
				title: '模块化方案',
				sub: 'Seajs / Requirejs、Webpack / Browerify'
			}
		},
		components: {
			Container
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	
</style>