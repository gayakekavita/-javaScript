// array
let a=[1,2,3,"kavii",'c',true,false, 89.90];
console.log(a);
let b=a.length;
//adding new element in the array
a[b]=87;
a[b+1]="jhf";
console.log(a);

//updating value of array
a[3]="deepti";
console.log(a);
//checking type of array
console.log(typeof a);
//array methods 

//finding the length of array
console.log("length of array is : "+ a.length);
//converting array to string
console.log(a.toString());

//delete element from end
let del=a.pop();
console.log( "deleted element from "+a +"is : "+ del);

//add element from end
a.push(80);
console.log( "added element to"+a );

//deleting an element from start
let del1=a.shift();
console.log("deleted element from array is :"+del1);
//adding an element to a array from start
a.unshift(90);
console.log(a);

console.log(a.join("_ _"));

//delete element from array using index 
// when we use this delete method then it deletes only element from array , but space is still there in array 
//it does not affect the length of array
delete a[3];

console.log(a);

//concatenating two arrays
let a1=[9,7,5,9,0,4];
let new_arr=a.concat(a1);
console.log(new_arr);

//sorting array
console.log(new_arr.sort());

//reverse the array
console.log(new_arr.reverse());

//splice method in an
//syntax:  splice(start,delete,element);
new_arr.splice(2,3,100,200,300);
console.log(new_arr);

//slice method in an array 
console.log(new_arr.slice(3));
