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
    resolve(3);
  },3000);
});

let Promiseall=Promise.all([p1,p2,p3]);
Promiseall.then((value)=>{
  console.log(value);
})


/*
In the above program we have created three promises called as p1,p2 and p3.
here p1 resolved after 1 second 
then p2 resolved 
then p3 resolved 

after three second 
it will create one array with the name of Promiseall variable and stores all value of promises specified in it.

then it will print array as follows after .then method of promise
output::

(3) [1, 2, 3]
*/
