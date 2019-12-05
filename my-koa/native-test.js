const http = require('http')

http.createServer(async (req,res)=>{
  let body = ''
  await new Promise((resolve,reject)=>{
    setTimeout(()=>{
      body = 'hello world'
      resolve()
    },5000)
  })
  res.end(body)
}).listen(3001)