let age=prompt("Enter your age");
age=Number.parseInt(age);
try{
   if(age>150)
   {
     throw new ReferenceError("This is probably not true");
   }
  else
   {
     console.log("Your entered age is:"+ age);
   }
}
catch(error){
   console.log("Name of error is : "+ error.name);
   console.log("actual error message is : "+ error.message);
  console.log("printing stack of error: "+ error.stack);
}
finally{
  console.log("I always exexute because i am finally block");
}


-- try block executes when no error is occured into the body of try .
      syntax of throwing error::
            throw new error_type('message');
-- catch block executes when an error is thrown by try .
--finally block is executed no matter whether the error is occurred or not.
   -even if error occured into try block is not handled by catch still finally block will execute.
-- when we write setTimeout() function and error occured inside into the setTimeout function this error cannot handled by catch block which is actually outside settimeout .
    -- To handle the error occured in the setTimeout we have to write try and catch block inside the setTimeout function.
