let http=require('http');
let PORT_NO=3001;
http
.createServer((request,response)=>{
    let username ='Abhi';
    response.writeHead(200,{'content_type':"text/html"});
    response.write(`<h1>Hello App</h1>`);
    response.write(`<h2>Username: ${username}</h2>`);
    response.end();
})
.listen(PORT_NO,()=> console.log(`server is running in ${PORT_NO}`));