let http = require("http");
let url = require("url");
let PORT_NO = 3001;

http
.createServer((request, response) => {
    let urlString = request.url;
    if(urlString != '/favicon.ico') {
       
        let urlObject = url.parse(urlString, true); 
        let user = urlObject.query;
        console.log(user); 
        console.log(JSON.stringify(user));
        response.writeHead(200, {'content-type': 'text/html'});
        response.write(`<h1>Hello ${user.name}, your age is ${user.age}</h1>`)
    }
    response.end();
})
.listen(PORT_NO, () => console.log(`Server running at ${3001}`));