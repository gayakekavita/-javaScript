//operators in javascript 
/*
1.arithmetic operators
   1.addition +
   2.subtraction -
   3.multiplication *
   4.dicision /
   5.exponetial **
   6.modulus %
   7.increment ++
   8.decrement --
2.assignment operators
    1.+=
    2.-=
    3.*=
    4./=
    5.**=
    6.%=
    
3.comparision operators
    1.==
    2.!=
    3.=== check for data types returns true when varible is of 
     same type
    4.>
    5.<
    6.>=
    7.<=
    8.? ternary operator
4.logical operators
   1.&&
   2.||
   3.!
   
   */

const { log } = require("console");

let a=20;
let b =10;
//aritmetic operators
console.log("a+b: ", a+b);
console.log("a-b: ", a-b);
console.log("a*b: ",a*b);
console.log("a/b: ",a/b);
console.log("a**b: ", a**b);
console.log("a%b: ", a%b);
console.log("a++: ",a++);
console.log("++a: ",++a);
console.log("a--: ",a--);
console.log("--a: ",--a);

//assignment operators
console.log("a+=b: ", a+=b);
console.log("a-=b: ", a-=b);
console.log("a*=b: ", a*=b);
console.log("a/=b: ", a/=b);
console.log("a**=b: ", a**=b);
console.log("a%=b: ", a%=b);


//comparision operators
console.log("a<b: ", a<b);
console.log("a>b: ", a>b);
console.log("a<=b: ", a<=b);
console.log("a>=b: ", a>=b);
console.log("a==b: ", a==b);
console.log("a===b: ", a===b);
console.log("a!=b: ", a!=b);

//logical operators
console.log("true && true: ", true && true);
console.log("true && false: ", true && false);
console.log("false && true: ", false && true);
console.log("false && false: ", false && false);
console.log("true || true: ", true || true);
console.log("true || false: ", true || false);
console.log("false || true: ", false || true);
console.log("false || false: ", false || false);
console.log("!true: ", !true);
console.log("!false: ", !false);
