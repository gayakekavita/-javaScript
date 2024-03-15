sessionStorage.clear();
console.log("Initial length of localstorage or items present in the local storage: " +sessionStorage.length );
sessionStorage.setItem("name1","kavi");
console.log(sessionStorage.getItem('name1'));
let n=prompt("How much keys and values do you want to set in session  storage:");
n=Number.parseInt(n);

for(let i=0;i<n;i++){
  let key=prompt("Enter your key");
  let value=prompt("Enter your value");
  sessionStorage.setItem(key,value);
}
console.log("after adding : "+ sessionStorage.length);

//localStorage.removeitem('key')
sessionStorage.removeItem('name1');

//getting the keys by index values 

console.log("Value at index 0: " + sessionStorage.getItem(sessionStorage.key(0)));
