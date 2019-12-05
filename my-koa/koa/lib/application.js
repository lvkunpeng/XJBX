const http = require('http')
console.log('------------my-koa------------')
class Application{
  constructor(){
    this.middleWares = []
  }
  use(fn){
    this.middleWares.push(fn)
  }
  handleRequest(req,res){
    
  }
  listen(...args){
    let server = http.createServer(this.handleRequest)
    server.listen(...args)
  }
}

module.exports = Application