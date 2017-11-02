<template>
	<container :title="title" :sub="sub">
		<div class="phone">
			<div class="column">
				<p class="sub-title">一、移动端设计稿的尺寸</p>
				<p>有关手机屏幕的一些参数</p>
				<div class="sample">
					<img src="./sample.png" alt="样本">
				</div>
				<ul>
					<li><p>1. 英寸（屏幕对角线的长度，不是面积单位）</p></li>
					<li><p>2. 分辨率（设备像素、物理像素）</p></li>
					<li>
						<p>3. PPI（pixels-per-inch: 每英寸像素数 || 像素密度）</p>
						<p>在1英寸的长度里，像素数量越多，PPI值越大。</p>
						<img src="./ppi-x.png">
						<p> </p>
						<img src="./ppi.png" alt="">
						<p>高清显示屏起源于retina。它的特点是，具备足够高的像素密度而使人眼无法分辨其中单独像素点的液晶屏。</p>
					</li>
				</ul>
			</div>
			<div class="column guide">
				<p class="sub-title">二、此像素非彼像素</p>
				<div>
					<p>设备像素（device pixel）：设备像素是物理概念，指的是设备中使用的物理像素。也就是我们的手机屏幕的分辨率</p>
					<p>CSS像素（css pixel）：是web编程的概念，指的是CSS样式代码中使用的逻辑像素。它是一个相对单位，相对的是设备像素。</p>
					<p>比如iphone6使用的是retina视网膜屏幕，使用2*2的设备像素代表1*1的CSS像素。所以设备像素是750*1334px，而CSS逻辑像素是375*667px</p>
					<img src="./retina.png" alt="">
				</div>
			</div>
			<div class="column guide">
				<p class="sub-title">三、设备像素与CSS像素之间的换算是如何产生的</p>
				<div>
					<p>设备像素比（device pixel ratio）：通过PPI得到密度分界，获得默认缩放比例，即设备像素比。</p>
					<img src="./classify.jpg" alt="">
					<p>获得设备像素比后，便可得知设备像素与CSS像素之间的比例。</p>
					<p>当这个比率为1:1时，使用1个设备像素显示1个CSS像素。</p>
					<p>当这个比率为2:1时，使用4个设备像素显示1个CSS像素。</p>
					<p>当这个比率为3:1时，使用9（3*3）个设备像素显示1个CSS像素。</p>
					<p>plus的设备像素比已经达到3了。如果我们任然用2倍尺寸的设计稿制作页面。</p>
					<p>如下图：原图已经无法再进行分割，手机会进行图片的向上采样，它会就近取色，导致图片模糊。</p>
					<img src="./upsample.jpg" alt="">
					<p>尺寸适配</p>
					<div>
						<img src="./logo@2x.png" alt="">
						<span>logo@2x.png</span>
					</div>
					<div>
						<img src="./logo@3x.png" alt="">
						<span>logo@3x.png</span>
					</div>
					<p>样式预处理</p>
					<img src="./styl.png" alt="">
				</div>
			</div>
			<div class="column px">
				<p class="sub-title">四、1像素边框问题</p>
				<p>设计稿里面1像素的边框，在CSS中也写1像素的话，在高设备像素比的手机上，就会显得边框比较粗。</p>
				<p>因为，手机实际显示的物理像素可能已经是2px或者3px了。</p>
				<p>这时候，我们可以使用CSS3缩放属性，将1CSS像素压缩成0.5像素或者0.33像素，来还原设计稿的1物理像素边框。</p>
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