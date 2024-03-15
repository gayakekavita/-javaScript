
//Promise is the solution to callback hell or pyramide of doom
//here we used resolve state of a promise 

let p=new Promise((resolve,reject)=>{

  console.log("promise is pending");
  setTimeout(function()
             {
               console.log("promise fullfilled")
             },5000);
  resolve(true);
})
console.log(p);

/* output of above program is::
  promise is pending
  promise{ }
  promise fullfilled

*/

//here we used reject 

let p=new Promise((resolve,reject)=>{

  console.log("promise is pending");
  setTimeout(function()
             {
               console.log("promise fullfilled")
             },5000);
  //resolve(true);
  reject(new Error("Error"));
})


/*

output of above program is
console.log(p);
promise is pending
Promise {}
Error: Errorhttps://a6290855-2c03-4223-98c5-a6b595c6c9ca-00-31avz2q2o66l2.kirk.replit.dev/script.js:9
promise fullfilled

  */



// then and catch
let p1=new Promise((resolve,reject)=>{
  console.log("promise 1 is pending");
  setTimeout(function(){
    console.log("promise 1 is fullfilled");
  },3000)
  resolve(true);
});
let p2=new Promise((resolve,reject)=>{
  console.log("promise 2 is pending");
  setTimeout(function(){
    console.log("promise 2 is rejected");
    reject(new Error("error"));
  },1000)
})

//To get the value
p1.then((value)=>{
  console.log("value of promise 1 "+ value)
})


//To catch the error
p2.catch((error)=>
  {
    console.log("Error is: "+ error);
  })


/* output of above program is :
promise 1 is pending
promise 2 is pending
value of promise 1 true
promise 2 is rejected
Error is: Error: error
promise 1 is fullfilled
*/
