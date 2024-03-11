setTimeout(function(){
  alert("inside timeout")},10000);
document.write("hello");
let b=prompt("do you want to run the timeout y or n");
if(b=="n")
{
  clearTimeout(a);
}


//setTimeout in function with parameter
const sum=(a,b)=>{
  console.log("addition: "+ (a+b));
}
setTimeout(sum,3000,1,2);


//setInterval

setInterval(
  function()
  {
    alert("hello")
      },
  1000);
