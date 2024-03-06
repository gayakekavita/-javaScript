/*
Conditional statement:
  1. if statement
  2. if else statement
  3. if else if else statement
*/

let a=prompt("enter your age")
a=Number.parseInt(a);
if(a<0)
{
  console.log("age is invalid");
}
else if(a<9)
{
  console.log("you are a kid");
}
else if(a>9 && a<18)
{
  console.log("you are a teenager");
}
else if(age >=18)
{
  console.log("age is valid");
}
else
{
  console.log("valid");
}
