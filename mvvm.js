// mock mvvm theory
let obj = {
	a: 123,
	b: {
		c: 1,
		d: 2
	}
}

let obj2 = []

let arrayProto = Array.prototype
let proto = Object.create(arrayProto)
let methods = ['pop','push']
methods.forEach((item)=>{
	proto[item] = function(){
		render();
		arrayProto[item].call(this,...arguments)
	}
})
// make a render function
function render(){
	console.log("data render!")
}

function makeReactive (obj){
	if(Array.isArray(obj)){
		obj.__proto__ = proto
		return;
	}
	if(typeof obj == "object"){
		console.log(obj)
		for(key in obj){
			definePropert(obj,key,obj[key])
		}
	}
}

function definePropert(obj,key,val){
	makeReactive(val)
	Object.defineProperty(obj,key,{
		get(){
			return val
		},
		set(newVal){
			makeReactive(val)
			if(newVal !== val){
				render()
				val = newVal
			}else{
				console.log("val is same")
			}
		}
	})
}
function $set(obj,key,val){
	definePropert(obj, key, val)
}
// makeReactive(obj)
// // obj.a = 222
// // obj.b.c = 456;
// // obj.b.qq = 123
// $set(obj,'qq',123)
// obj.qq = 1111

makeReactive(obj2)

obj2.push(123)
console.log(obj2)
