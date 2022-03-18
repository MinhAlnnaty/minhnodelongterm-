const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url === '/')
    res.end('welcometo out home page')
   if(req.url==='/about')
    res.end('here is our history')

    res.end(`

        <h1>Ooops!</h1>
        <p>we can't seem to find the page you are looking for</p>
        <a href="/">backhome</a>
    `)

})

server.listen(5000)