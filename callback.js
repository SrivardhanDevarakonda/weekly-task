var fs=require("fs");
console.log("first line");
var f='assignment.txt';
fs.readFile(f,'utf8',function(err,data){
    if(err)console.log(err);
    console.log(data);
});
console.log("srivardhan hello world");