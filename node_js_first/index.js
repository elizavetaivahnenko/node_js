const http=require('http');
const server=http.createServer(requestListener);
server.listen(3000); //port

function requestListener(request,response){
    console.log('It is my first server');
}