let koa = require('./koa')
let app = new koa()

app.use((ctx)=>{
  console.log('hello')
  ctx.body = 'world'
})

app.listen(3000,item=>{
  console.log('3000端口执行成功！')
})