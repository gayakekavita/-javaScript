const loadscript=(src)=>{
  let p1=new Promise((resolve,reject)=>{
  let script=document.createElement('script');
  script.src=src;
  document.appendChild(script);
  script.onload=()=>{
    resolve("script is loaded");
  }
  script.onerror=()=>{
    reject("error ocuured");
  }
  })
}

loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');

p1.then((value)=>
  {
    console.log(value);
  })
p1.catch((error)=>{
  console.log(error)
})
