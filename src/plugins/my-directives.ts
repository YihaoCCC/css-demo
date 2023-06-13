import { App, VNode } from "vue"

const number = {
    created(el:HTMLElement, binding:any, vnode:VNode) {
        // console.log(binding.value);
        let finalNum = binding.value.number || binding.value;
        let rate = 60;
        let time = binding.value.time || 800;
        
        let step = finalNum / (time / rate);
        let count:any = 0;
        let timer:any = setInterval(() => {
            count+= step;
            
            el.innerText = count.toFixed(0);
            if (count > finalNum) {
                count = finalNum;
                el.innerText = count;
                clearInterval(timer);
                timer = null;
            }
        }, rate)
    },
    updated(el:HTMLElement, binding:any, vnode:VNode, prevVnode:VNode) {
       // console.log(binding.value)
       let finalNum = binding.value.number || binding.value;
       let rate = 40;
       let time = binding.value.time || 400;
       
       let step = finalNum / (time / rate);
       let count:any = 0;
       let timer:any = setInterval(() => {
           count+= step;
           
           el.innerText = count.toFixed(0);
           if (count > finalNum) {
               count = finalNum;
               el.innerText = count;
               clearInterval(timer);
               timer = null;
           }
       }, rate)
    },
}

const arr:any = {
    'cyh-number': number
}

const myDirectives = (app:App) => {
    for(let i in arr) {
        app.directive(i, arr[i])
    }
}


export default myDirectives