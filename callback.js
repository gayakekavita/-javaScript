const loadscript=(src)=>{
  let script=document.createElement("script");
  script.src=src;
  script.onload=()=>{
    alert('script loaded');
    
  }
  script.onerror=()=>{
    alert('error ocuured');
  }
  document.body.appendChild(script);
  
  callback(src); //when this function get executed then hello function get executed
};

loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js');
function hello(src){
  console.log(src);
}
