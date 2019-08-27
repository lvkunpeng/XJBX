// define 声明模块 通过require使用一个模块
let factories = {}
function define(moduleName,dependencie,factory){
    factories[moduleName] = factory
}
function require(modules,callback){
    let rets = modules.map((ele) => {
        let factory = factories[ele]
        let exports;
        exports = factory();
        return exports
    })
    callback.apply(null,rets)
}
define('name',[],function(){
    return 'xj'
})

define('age',[],function(){
    return 'bx'
})

require(['name','age'],function(name,age){
    console.log(name,age)
})