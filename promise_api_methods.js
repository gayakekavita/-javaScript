/*
 following are the methods which we can use while using promise api:
   1. Promise.all
      --This method stores result or value of promises if all the promises are resolved. when we print value of promise then it print array of values of all the specified promises.
      --if any promise get rejected then it shows error and ignores  all other promises .


   2.Promise.all_Setlled()
       --This method stores result or value of promises if all the promises are resolved. when we print value of promise then it print array of values of all the specified promises.
       --if any promise get rejected then it ignores the rejected promises and shows the values of resolved promises.

   3.Promise.race():
        --This method stores result or value of promises if all the promises are resolved. when we print value of promise then it print array of values of all the specified promises.
        --it resloves promises and wait for the resolving of first promise whcih we provided to it.
        --if first promise resolved then it resolves or go for other promises.
        --but if the first promise is rejected then  it does not go for other promises it will show the error.

  4.Promise.any():
       --This method stores result or value of promises if all the promises are resolved. when we print value of promise then it print array of values of all the specified promises.
       --if the first promise get rejected then it will move forward with next promises.
       --it will check all the promises until it finds resolved .
       --if all the promises are rejectd then it will show the error.

    5.Promise.resolv(6):
    
*/

//Promise.resolve
let p1=new Promise((resolve,reject)=>{
  setTimeout(function(){
    resolve(1);
  },1000);
});
let p2=new Promise((resolve,reject)=>{
  setTimeout(function(){
    resolve(2);
  },2000);
});
let p3=new Promise((resolve,reject)=>{
  setTimeout(function(){
    reject(3);
  },3000);
});

Promise.resolve(6);
p1.then((value)=>{
  console.log(value);
})

p2.then((value)=>{
  console.log(value);
})
p1.catch((error)=>{
  console.log(error);
})
p3.then((value)=>{
  console.log(value);
})

//output of above program is
1
2
Error: 3https://866b8104-1573-4baa-a511-843723b6b7e9-00-20e8nby4d9b1q.picard.replit.dev/__replco/static/devtools/devtools.js:74

