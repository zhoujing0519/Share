import tpl from './btn.html'
import './btn.styl'	

export default class Btn {
	constructor({text = '按钮'}){
		this.text = text;
		this.init();
	}

	init(){
		this.render();
	}

	render(){
		let _tpl = tpl.replace('{text}', this.text);

		this.wrap = document.body.appendChild(document.createElement('div'));
		this.wrap.innerHTML = _tpl;
		this.dom = this.wrap.children[0];

		/*
			this.dom.outerHTML = tpl;
			console.log(this.dom); // this.dom => <div></div> 还是保持对原来元素的引用
		*/
	}
}