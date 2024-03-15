/**
 * follwing are the cookie related methods::
 *   1.document.write(document.cookie= 'key=value')
 *   2.document.cookie='key=value';
 *   3.encodeURIComponent('key=value')
 *      Used to encode the special characters
 *   4.decodeURIComponent('key=value')
 *      Used to decode the special characters
 *   5.document.cookie='key:value;path=/a;expires=Tue,29 March 2024'
 */


console.log("checking for already existing cookies"+ document.cookie);
let key=prompt("Enter the key")
let value=prompt("Enter value of a key")
document.cookie= `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log("after adding cookies"+ document.cookie);
//to decode the special characters
console.log(decodeURIComponent(document.cookie));

//to set path and expiration date 
document.cookie='name=kavi;path=/a;expries=Tue 29 March 2024';
console.log(document.cookie);

//adding more cookies

document.cookie='roll=79';
document.cookie='marks=9.6';
console.log(document.cookie);
