async function myfunction(){
   let p1=new Promise((resolve,reject)=>{
     setTimeout(()=>{
       resolve('delhi weather is 27 degree');
     },1000);
   });
  let p2=new Promise(async(resolve,reject)=>{
    setTimeout(()=>{
      resolve("banglore weather is 21 degree");
    });
    
  })
  let d= await p1;
  let b=await p2;
  return [d,b];
}

let values=myfunction();
//console.log(values);
values.then((value)=>{
  console.log(value);
})

//output of above program is 
(2) ["delhi weather is 27 degree", "banglore weather is 21 degree"]





// two function at the same time 
async function myfunction(){
   let p1=new Promise((resolve,reject)=>{
     setTimeout(()=>{
       resolve('delhi weather is 27 degree');
     },1000);
   });
  let p2=new Promise(async(resolve,reject)=>{
    setTimeout(()=>{
      resolve("banglore weather is 21 degree");
    });
    
  })
  let d= await p1;
  let b=await p2;
  return [d,b];
}
async function hello(){
  console.log("hello everyone");
}
let values=myfunction();
let b=hello();
//console.log(values);
values.then((value)=>{
  console.log(value);
})

b.then((value)=>{
  console.log(value);
}
)


//output of above program is::
hello everyone
undefined
(2) ["delhi weather is 27 degree", "banglore weather is 21 degree"]

