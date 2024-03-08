//map function
let a=[1,2,3,4,5,6,7,8,9,10];
let new_a=a.map((element)=>{
  return element;
});
console.log(new_a);

//filter function
let new_arr=a.filter((i)=>{
  return i<5;
}
);
console.log(new_arr);

let x=a.filter((y)=>{
  return y%2==0;
});
console.log(x);


//reduce function
let arr=a.reduce((x1,x2)=>
  {
    return x1+x2;
  });
console.log(arr);

let arrr=a.reduce((x1)=>{
  return x1;
});
console.log(arrr);
//output of above line is : 1
