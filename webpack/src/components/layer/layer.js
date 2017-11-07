import tpl from './layer.html';
import './layer.styl';

const CLASS_ACTIVE = 'active'; // 定义状态类
const DELAY = 2000; // 定义动画延迟

export default class Layer {
	constructor(delay = DELAY){
		this.delay = delay;
		this.init();
	}

	// 初始化
	init(){
		this.render();
		this.bind(); 
	}

	// 渲染
	render(){
		this.wrap = document.body.appendChild(document.createElement('div'));
		this.wrap.innerHTML = tpl;

		this.dom = this.wrap.children[0];

		/*
			this.dom.outerHTML = tpl;
			console.log(this.dom); // this.dom => <div></div> 还是保持对原来元素的引用
		*/

	}

	// 绑定事件
	bind(){
		this._click();
	}

	// 点击事件
	_click(){
		this.dom.addEventListener('click', () => {
			this.hide();
		});
	}

	// 显示弹窗
	show(){
		this.dom.classList.add(CLASS_ACTIVE);
		if(this.timer) clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			this.dom.classList.remove(CLASS_ACTIVE);
		}, this.delay);
	}

	// 隐藏弹窗
	hide(){
		if(this.timer) clearTimeout(this.timer);
		this.dom.classList.remove(CLASS_ACTIVE);
	}
}