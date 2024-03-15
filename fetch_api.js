//here we are creating a promise with the name of 'a'
let a=fetch('https://official-joke-api.appspot.com/random_joke');
a.then((value)=>{
  console.log(value.status);
  console.log(value.ok);
  return value.json();
}).then((value1)=>{
  console.log(value1);
})
/*
//syntax for fetching api are:
 let variable_name=fetch(URL,Option);
  In the above syntax URL is the api key and Option is the object which contains the headers ,method etc.

output of above program is:
200
true
{type: 'general', setup: 'What has ears but cannot hear?', punchline: 'A field of corn.', id: 243}

1---
above 200 is the status code used to display the status of a task 
for https:
 if the task is completed successfully then the status code is in between 200 to 299.
 if the task is not completed successfully then the status code is in between 300 to 399.

 2---
   true is returned by the .status method of a promise 
    it is returned as true because task is completed of api is fetched.
  */
