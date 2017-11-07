import Btn from '../components/btn/btn.js'
import Layer from '../components/layer/layer.js'

const btn = new Btn({
	text: '发射'
});
const layer = new Layer(5000);

btn.dom.addEventListener('click', () => layer.show());