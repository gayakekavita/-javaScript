//following are the methods related localStrorage :
   /*
         1.localStorage.setItem('key','value')
         2.localStorage.getItem('key')
         3.localStorage.clear
         4.localStorage.removeItem('key')
         5.localStorage.getItem(localStorage.key(index))
  */
localStorage.clear();
console.log("Initial length of localstorage or items present in the local storage: " +localStorage.length );
localStorage.setItem("name1","kavi");
console.log(localStorage.getItem('name1'));
let n=prompt("How much keys and values do you want to set in local storage:");
n=Number.parseInt(n);

for(let i=0;i<n;i++){
  let key=prompt("Enter your key");
  let value=prompt("Enter your value");
  localStorage.setItem(key,value);
}
console.log("after adding cookies: "+ localStorage.length);

//localStorage.removeitem('key')
localStorage.removeItem('name1');

//getting the keys by index values 

console.log("Value at index 0: " + localStorage.getItem(localStorage.key(0)));
