// define 声明模块 通过require使用一个模块
let factories = {}
function define(moduleName,dependencie,factory){
    factory.dependencies = dependencie
    factories[moduleName] = factory
}
function require(modules,callback){
    let rets = modules.map((ele) => {
        let factory = factories[ele]
        let exports;
        let dependencies = factory.dependencies
        require(dependencies,() => {
            factory.apply(null,arguments)
        })
        exports = factory();
        return exports
    })
    callback.apply(null,rets)
}
define('name',[],function(){
    return 'xj'
})

define('age',['name'],function(name){
    return name + 'bx'
})

require(['age'],function(age){
    console.log(name,age)
})