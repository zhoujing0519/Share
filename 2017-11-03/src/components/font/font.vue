<template>
	<container :title="title" :sub="sub">
		<div class="font">
			<div class="column">
				<p class="sub-title">一、iconfont是矢量图片，不用考虑适配的问题</p>
				<p class="sub-title">二、减少服务器的请求（制作Sprites图片）</p>
				<ul>
					<li>
						<img width="100" src="./font_black.png">
						<span>3.63k</span>
					</li>
					<li>
						<img width="100" src="./font_white.png">
						<span>3.38k</span>
					</li>
					<li>
						<img width="200" src="./font_sprites.png">
						<span>4.84k</span>
					</li>
				</ul>
				<p class="sub-title">三、可以自定义颜色</p>
				<p class="sub-title">四、操作简单</p>
				<p class="sub-title">五、更好的管理图标</p>
				<p class="sub-title"><a href="http://www.iconfont.cn/">*传送门</a></p>
			</div>
		</div>
	</container>
</template>

<script>
	import Container from '@/base/container/container'

	export default {
		data(){
			return {
				title: '图标字体',
				sub: 'iconfont'
			}
		},
		components: {
			Container
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	img
		border: 1px solid #eee
</style>