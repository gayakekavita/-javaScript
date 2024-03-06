/*
 for loop synatx:
  for(initialization;condition;updatation)

   Types of for loop:
    1.simple for loop
    2.for in loop
    3.for of loop
  
*/

//simple for loop
for(let i=0;i<5;i++)
  {
    console.log(i);
  }


const obj={
  'kavi':95,
  'dip':96,
  'deep':97,
  'sona':98
}
//for in loop
for(let a in obj)
  {
    console.log("marks of "+a+" is: "+ obj[a]);
  }

//for of loop
 /*
  we use this loop mostly for string related operations 
 */
for(let b of "kavishree")
  {
    console.log(b);
  }
