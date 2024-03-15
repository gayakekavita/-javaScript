//Promise is a code of execution which executes or gives results based on either resolve or rejected.

//Syntax of promise:
    let promise=new Promise(function(resolve,reject){

      //body of execution
    }

                            

 
                            
//code
  let promise=new Promise(function (resolve,reject){
 
  resolve(56)
  
});

setTimeout(function(){
  console.log("hello in 2 seconds")
},2000);

console.log("hello two");
console.log(promise);


//output of above code is 
/*
hello two
Promise { 56 }
hello in 2 seconds
*/

/*
  There are two properties of promise object:
   1.state
   2. result

   --initially value of state is null either it is fullfilled or rejected .
     --if it is resolved then it returns resolved value.
     --if it is rejected then it does not return value.
*/
