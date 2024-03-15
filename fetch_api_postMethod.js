const createTodo=async()=>{
  let options={
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({
      title:'hello',
      body:'world',
      userId:1,
    }),
    
  }
  let p=await fetch('https://jsonplaceholder.typicode.com/posts', options);
  let response=await p.json();
  return response;
}
const getTodo=async(id)=>{
  let response=await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
  let r= await response.json();
  return r;
}
const mainFunc=async()=>{
  let todo=await createTodo();
  console.log(todo);
  let gettodo=await getTodo(5);
  console.log(gettodo);
}
mainFunc()



//in the above code we have used async and await for to do wait for time to the promises 
  here in the createTodo function we have used options keyword in which we are defining three sections :
     1. body
        --in the body part we actual write the parameters and its value in the form of key:value pair .
          --here we use stringify function to convert this body into array form.
     2.header
       --in the header we are specifyning type of content.
     3.method:
       here we are giving value as 'POST' and 'GET'.


    --here we have used async because we want to return a promise and we want make to do wait for promises. 
