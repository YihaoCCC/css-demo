/**
 * 定义类型
 */
interface watermarkType {
	noChangeObserver: any,
	noDeleteObserver:any,
	set: Function,
	del: Function,
	watermarkListener: number,
	text?: string
}

/**
 * 页面添加水印效果 
 */ 
const setWatermark = (str: string) => {
	const id = '1.23452384164.123412416';
	if (document.getElementById(id) !== null) document.body.removeChild(<HTMLElement>document.getElementById(id));
	const can = document.createElement('canvas');
	can.width = 200;
	can.height = 130;
	const cans = <CanvasRenderingContext2D>can.getContext('2d');
	cans.rotate((-20 * Math.PI) / 180);
	cans.font = '12px Vedana';
	cans.fillStyle = 'rgba(200, 200, 200, 0.30)';
	cans.textBaseline = 'middle';
	cans.fillText(str, can.width / 10, can.height / 2);
	const div = document.createElement('div');
	div.id = id;
	div.style.pointerEvents = 'none';
	div.style.top = '0px';
	div.style.left = '0px';
	div.style.position = 'fixed';
	div.style.zIndex = '10000000';
	div.style.width = `${document.documentElement.clientWidth}px`;
	div.style.height = `${document.documentElement.clientHeight}px`;
	div.style.background = `url(${can.toDataURL('image/png')}) left top repeat`;
	document.body.appendChild(div);
	return id;
};

/**
 * 页面添加水印效果
 * @method set 设置水印
 * @method del 删除水印
 */
const watermark:watermarkType = {
	// 被修改标识
	noChangeObserver: null,
	// 被删除标识
	noDeleteObserver: null,
	// 设置水印
	set: (str: string) => {
		if (watermark.noDeleteObserver || watermark.noChangeObserver) {
			clearOberseve()
		}
		if(watermark.watermarkListener === 0) {
			let id = setWatermark(str);
			if (document.getElementById(id) === null) id = setWatermark(str);
			noAllowDelete(str)
			noAllowChange(str)
			watermark.text = str
			// window.addEventListener('resize',resizeHandle(str))
			// 添加监听器
			window.addEventListener('resize', handleWindowResize);
			
		}
	},
	// 删除水印
	del: (str: string) => {
		// window.removeEventListener('resize',resizeHandle(str));
		window.removeEventListener('resize', handleWindowResize); 
		clearOberseve()
		let id = '1.23452384164.123412416';
		if (document.getElementById(id) !== null) {
			console.log('有了先删除');
			document.body.removeChild(<HTMLElement>document.getElementById(id));
		}
	},
	watermarkListener: 0
};
/**
 * 防止被修改
 * @method noAllowChange
 */
const noAllowChange = (str:string) => {
	console.log('不许改');
	const watermark1 = document.getElementById('1.23452384164.123412416') as HTMLElement;
	// 创建水印的监听器
	watermark.noChangeObserver = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			// 检查是否是属性变化，且变化的属性名为style
			// 防止用户更改base64的水印图或者更改水印的位置,所有style变化都要重新生成水印
			if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
				const oldValue = mutation.oldValue;
				const newValue = watermark1.getAttribute('style');
				if (oldValue !== newValue) {
					console.log('style 属性被修改了');
					watermark.set(str)
				}
			}
			if (mutation.attributeName === 'class') {
				// 禁止类名被添加
				watermark.set(str)
			}
		});
	});
	// 配置并启动观察器
	const config = { attributes: true, attributeOldValue: true, subtree: true };
	watermark.noChangeObserver.observe(watermark1, config);
}


/**
 * 防止被删除
 * @method noAllowDelete
 */
const noAllowDelete= (str:string) => {
	console.log('不许删除');
	const watermark1 = document.getElementById('1.23452384164.123412416');
	watermark.noDeleteObserver = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			console.log(mutation);
			if (mutation.removedNodes.length > 0 && mutation.removedNodes[0] === watermark1) {
				// 水印元素被删除，重新添加
				console.log('水印元素被删除，重新添加');
				watermark.set(str)
			}
		});
	});
	// 配置并启动观察器
	const config = { childList: true };
	watermark.noDeleteObserver.observe(document.body, config);
}

/**
 * 清空所有监控
 * @method clearOberseve
 */
const clearOberseve = () => {
	watermark.noDeleteObserver.disconnect()
	watermark.noChangeObserver.disconnect()
	watermark.watermarkListener = 0
} 

/**
 * 监听窗口变化
 * @method resizeHandle
 */
// const resizeHandle:any = (str:string) => {
// 	return () => {
// 		console.log('存在监听器');
// 		if(flag) {
// 			watermark.noDeleteObserver.disconnect()
// 			setWatermark(str)
// 			noAllowChange(str)
// 			watermark.watermarkListener++
// 			console.log('检测到窗口变化');
// 		} else {
// 			return
// 		}
// 	}
	
// }
function handleWindowResize() {
    console.log('窗口大小变化了');
    // 具体的处理逻辑
	watermark.noDeleteObserver.disconnect()
	setWatermark(watermark.text || '')
	noAllowChange(watermark.text || '')
	watermark.watermarkListener++
	console.log('检测到窗口变化');
}


// 导出方法
export default watermark;
