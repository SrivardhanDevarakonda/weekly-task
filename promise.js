var read=require('fs-readfile-promise');
read('assignment.txt')
.then(data=>console.log(data.toString()))
.catch(err=>console.error(err.message())); 