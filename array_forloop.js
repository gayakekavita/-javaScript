let a=[8,9,'h','fsts',"yddt",true,false];
//simple for loop
for(let i=0;i<a.length;i++)
  {
    console.log(a[i]);
  }
//foreach loop
a.forEach((element)=>{
  console.log(element)
});

//Array_from
//this function converts string or any collection into array
let name="kavita";
let newww_arr=Array.from(name);

console.log(newww_arr);

//for of loop
for(let item of newww_arr)
  {
    console.log(item);
  }

//for in loop
for(let item in newww_arr)
  {
    console.log(item);
  }
