import http from "http";

export function main(){
 http.createServer(function(req, res){
  res.writeHead(200, {
   "Content-Type": "application/json",
   "Access-control-allow-origin": "*",
   "Access-control-allow-methods":"OPTIONS, POST, GET",
   "access-control-max-age": "2592000", //Fix this later
  });
  const result = JSON.stringify({ok: true});
  res.write(result);
  res.end();
 })
 .listen(8080);
};