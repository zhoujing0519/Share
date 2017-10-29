<template>
	<container :title="title" :sub="sub">
		<div class="fixer">
			<div class="column">
				<p class="sub-title">一、Autoprefixer</p>
				<p>相较之前的预处理器，我们前端可能盲目的使用css前缀，所有属性乱加一通</p>
				<div>
					<img src="./function.png">
				</div>
				<p>其中有些属性可能浏览器已经支持了，不再需要添加前缀了</p>
				<p>其中有些可能根本没有这种前缀的写法，浏览器根本不支持这个CSS属性</p>
				<p>通过postcss，配置autoprefixer中所需要兼容的浏览器版本，可以有效的去除一些本不需要添加的属性</p>
				<p>Gulp使用（gulpfile.js）</p>
				<div>
					<img src="./gulp.png">
				</div>
				<p>Webpack使用（webpack.config.js）</p>
				<div>
					<img src="./webpack.png">
				</div>
			</div>
			<div class="column">
				<p class="sub-title">二、Cssnext</p>
				<p>cssnext已经包含了autoprefixer，无需再加引用</p>
				<p>cssnext允许我们使用未来的css4中的属性和方法</p>
			</div>
		</div>
	</container>
</template>

<script>
	import Container from '@/base/container/container'

	export default {
		data(){
			return {
				title: '后处理器',
				sub: 'Postcss'
			}
		},
		components: {
			Container
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	
</style>