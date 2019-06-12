// let str = require('../webpack/a.js')
let fs = require('fs');
function req(moduleName){
    // content代表文件
    let content = fs.readFileSync(moduleName,'utf8');
    // 最后一个参数是函数的内容
    let fn = new Function('exports' ,'module','require','__dirname','__filename',content + '\n return module.exports')
    let module = {
        exports:{
        }
    }
    return fn(module.exports,module,req,__dirname,__filename)
}

let str = req('a.js')

console.log(str)