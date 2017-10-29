<template>
	<container :title="title" :sub="sub">
		<div class="phone">
			<div class="column">
				<p class="sub-title">一、有关手机屏幕的一些参数</p>
				<div class="sample">
					<img src="./sample.png" alt="样本">
				</div>
			</div>
			<div class="column guide">
				<p class="sub-title">
					二、<a href="./static/dpr.jpg" target="_blank">Iphone分辨率终极指南</a>
				</p>
				<div>
					<p>设备像素比 = 设备像素（物理像素、屏幕分辨率） / 设备独立像素（点、css像素）</p>
					<p>PC端：设备像素比 = 1</p>
					<p>手机端不同</p>
					<p>dip(device-independent pixels) => 设备独立像素</p>
					<p>当ppi === 160时，1dip = 1px</p>
				</div>
				<p>
					有一个很好的理论：苹果像素，因为它想使显示更清晰，更流畅，而Android厂商增加的像素在屏幕上塞进更多的东西。它解释了为什么苹果强调非视网膜视网膜的连续性，而Android集中在原始像素数。
				</p>
			</div>
			<div class="column">
				<p class="sub-title">三、比较</p>
				<ul>
					<li><img src="./compire.jpg"></li>
					<li>
						<p>向上采样</p>
						<p>由于单个位图像素不可以再进一步分割，所以只能就近取色，从而导致图片模糊</p>
						<img src="./upsample.jpg">
					</li>
					<li>
						<p>向下采样</p>
						<p>肉眼看上去虽然图片不会模糊，但是会觉得图片缺少一些锐利度，或者是有点色差</p>
						<img src="./downsample.jpg">
					</li>
				</ul>
			</div>
			<div class="column pic">
				<p class="sub-title">四、举例：logo.png</p>
				<ul>
					<li>
						<img src="./logo@1x.png">
						<span>logo@1x.png</span>
					</li>
					<li>
						<img src="./logo@2x.png">
						<span>logo@2x.png</span>
					</li>
					<li>
						<img src="./logo@3x.png">
						<span>logo@3x.png</span>
					</li>
				</ul>
				<p>样式预处理</p>
				<div>
					<img src="./styl.png">
				</div>
			</div>
			<div class="column px">
				<p class="sub-title">五、1像素边框问题</p>
				<p>css样式里的1px，在不同的设备像素比下，可能由1,4,9个像素点构成。</p>
				<p>可以实现设备上的一像素</p>
				<p>但是不能通过0.5px这种写法，浏览器不支持0.5px这种写法，它会把剩余的0.5px补全，大于1像素时向下取整</p>
				<p>这时候，需要使用CSS3缩放属性，将1px压缩成0.5px</p>
				<div>
					<img src="./1.jpg">
					<img src="./2.jpg">
					<img src="./3.jpg">
				</div>
				<p>样式预处理</p>
				<div>
					<img src="./1px.png">
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
				title: '设备像素比',
				sub: 'DevicePixelRatio'
			}
		},
		components: {
			Container
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import './phone'
</style>