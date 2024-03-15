let p1=new Promise((resolve,reject)=>{
 setTimeout(function(){
   resolve(4);
 },3000) ;
})
p1.then((value)=>{
  console.log(value);
})
p1.then((value)=>{
  console.log("hello promise is resolved");
})
p1.then(()=>{
  console.log("done");
})

/*

output of above program is:
4
hello promise is resolved
done
*/
