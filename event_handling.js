//in html document event handling
<button onclick="alert('hello')">Click me</button>


//js
let first=document.getElementById("first");
first.addEventListener('click', alert('hello'));

first.removeEventListener('click',alert('removed event'));
