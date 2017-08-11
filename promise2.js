var read=require('fs-readfileAsync-promise');
console.log('first statement');
fullfilled=data=>console.log(data.toString());
reject=err=>console.error(err.message());
read('assignment.txt').then(fullfilled).catch(reject);
console.log('last statement');