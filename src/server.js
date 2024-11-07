import http from 'node:http';

 const server = http.createServer((request, response)=> {
   const method = request.method;
   const url = request.url;

   if (method == 'GET' && url == '/users')
   {
      return response.end('Listagem de usuário');
   }

   if (method == 'POST' && url == '/users')
   {
      return response.end('Criação de usuário');
   }
   
   return response.end("Hello World");
 });

 server.listen(3333);