//string iterating
let str="you are really smart";
let i=0;
while(i<str.length)
  {
    console.log(str[i]);
    i++;
  }
//fetching  charactr from a string
console.log(str[0]);

console.log("string in lowercase:"+ str.toLocaleLowerCase());

console.log("string in uppercase:"+ str.toLocaleUpperCase());

console.log("str includes are:"+ str.includes("are"));

console.log(str.charAt(5));

console.log(str.indexOf("smart"));

console.log(str.replace("are", "are not"));

console.log(str.slice(0,6));
console.log(str.charCodeAt(0));
console.log(str.split(" "));
console.log(str.length);

console.log(str.concat(" deep"));

console.log(str.trim());

console.log(str.substring(0,4));

console.log(str.endsWith("a"));
console.log(str.startsWith("you"));

console.log(str.repeat(3));

console.log(str.match("are"));
