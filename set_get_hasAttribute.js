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
  
    <div class="firstclass" id="first" data-game="mario" data-player="kauu">
      Hello Everyone
    </div>
        
  
  <script src="script.js"></script>
</body>

</html>
*/
let first1=document.getElementById("first");
console.log("has attribute of style or not: "+ first1.hasAttribute("style"));
console.log("Setting attribute of style: "+ first1.setAttribute("style","color:red"));
console.log("attributes of first1 id: "+ first1.attributes);
console.log("tag name: "+ first1.nodeName);
console.log(""+ first1.nodeValue);
console.log("getting dataset"+ first1.dataset);
console.log("Game is: "+ first1.dataset.game);
console.log("Player is:" + first1.dataset.player);
console.log(first1.getAttribute("data-game"));
/*
output:::
has attribute of style or not: false
devtools.js:109 Setting attribute of style: undefined
devtools.js:109 attributes of first1 id: [object NamedNodeMap]
devtools.js:109 tag name: DIV
devtools.js:109 null
devtools.js:109 getting dataset[object DOMStringMap]
devtools.js:109 Game is: mario
devtools.js:109 Player is:kauu
devtools.js:109 mario

*/
