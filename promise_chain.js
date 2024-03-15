let p1=new Promise((resolve,reject)=>{
  setTimeout(function(){
    console.log("settimeout");
  },3000);
  resolve("first value");
});

p1.then((value)=>{
  console.log(value);
  return new Promise((resolve,reject)=>{
    resolve("second value");
  });
}).then((value)=>{
  console.log(value);
  return new Promise((resolve,reject)=>{
    resolve("third value");
  });
}).then((value)=>{
  console.log(value);
})


/*
  output of above program

  first value
second value
third value
settimeout
*/
