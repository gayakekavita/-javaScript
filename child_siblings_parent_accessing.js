/*
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="first">
    <div class="firstt">
    </div>
  </div>
  Hello world
  <script src="script.js"></script>
</body>

</html>
*/

console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
let arr=Array.from(document.body.children);
let first=document.body.firstChild;
let last=document.body.lastChild;
console.log(first.parentNode);
console.log(last.parentNode);
