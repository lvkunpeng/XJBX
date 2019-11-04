// aop 
function say(who){
  console.log(who + '说话')
}

Function.prototype.before =  function(beforeFun) {
  // console.log(this)

  return (...args) => {
    // 指向了 module.exports 如果上层函数使用了箭头函数。就会导致函数执行的时候，没有执行上下文，在浏览器中
    // 就会指向window 在node环境中，就指向了module.exports 即一个空对象，也就没有say方法。就会报错
    // https://www.cnblogs.com/pssp/p/5321506.html
    // console.log(this === module.exports)

    beforeFun();
    console.log(this)
    this(...args);
  }
}

let newFn = say.before(function(){
  console.log('说话前')
})
// console.log(newFn)
newFn('我')

// 改造原生函数方法  同时还是要注意this指向的问题

let oldPush = Array.prototype.push;

function push(...args){
  console.log('数据更新')
  oldPush.call(this,...args)
}

let arr = [1,2,3]
// push.call(arr,4,5,6)
// console.log(arr)

Array.prototype.push1 = function(...args){
  console.log('数据更新')
  console.log(...args)
  console.log(this)
  oldPush.call(this,...args)
}
arr.push1(4)
console.log(arr)