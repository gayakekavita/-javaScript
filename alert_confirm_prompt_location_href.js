//Below are the some methods  used to interact with web pages through js
/*
1. prompt
    :: used to take input from user 
     : It always takes input in the format of string
     : for another data type of input we have to convert it into requird data type value using casting method.
2.alert
     :: It is used to give alert while web page is running.
3.confirm
     :: It always return true or false value.
       : when user clicks on ok it returns "true".
       : when user clicks on cancel then it returns "false".
*/

let runage=true;
while(runage)
  {
    let age=prompt("Enter your age")
    age=Number.parseInt(age)
if(age>=18)
{
  alert("You can drive");
}
else
{
  alert("You cannot drive");
}
      runage=confirm("Do you want to play  again");
  }

//we can write prompt, alert and confirm like below

window.alert();
window.prompt();
window.confirm();


//window.location.href
let runage=true;
while(runage)
  {
    let age=window.prompt("Enter your age")
    age=Number.parseInt(age)
if(age>4)
{
  window.location.href="https://www.google.com";
}
else
{
  window.alert("Enter valid age");
}
      runage=window.confirm("Do you want to play  again");
  }
