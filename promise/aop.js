// 回调函数是高阶函数的一种

// 高阶函数  如果函数的参数是一个函数 就是高阶函数  
// 或者一个函数返回了一个函数


// 常见的高阶函数的应用

// AOP 面向切片编程

function say(){
  console.log("说话")
}

Function.prototype.before = function(beforeFunc) {
  // 剩余运算符 函数参数里叫剩余   调用的时候参数叫做展开
  return (...args)=>{  // newFn  箭头函数没有this 没有arguments 没有原型
    console.log(args)
    beforeFunc()
    // 展开运算符
    this(...args)
  }
}

let newFn = say.before(function(){
  console.log("说话前")
})

newFn()