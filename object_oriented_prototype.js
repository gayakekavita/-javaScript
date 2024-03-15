/*
In the javascript object have a special value then it is called as prototype.
-we can change prototype
- also we can set prototype values.
*/



let a = {
  'name': 'kavi',
  'roll': 20
};

console.log(a)
// Getting the prototype of object 'a'
let p = Object.getPrototypeOf(a);
console.log(p);


// Setting the prototype of object 'a' to a new object 'b'
let b = {
  'id': 123
};
Object.setPrototypeOf(a, b);
console.log(b);
