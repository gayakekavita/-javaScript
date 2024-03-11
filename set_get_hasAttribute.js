let first1=document.getElementById("first");
console.log("has attribute of style or not: "+ first1.hasAttribute("style"));
console.log("Setting attribute of style: "+ first1.setAttribute("style","color:red"));
console.log("attributes of first1 id: "+ first1.attributes);
console.log("tag name: "+ first1.nodeName);
console.log(""+ first1.nodeValue);
console.log("getting dataset"+ first1.dataset);
console.log("Game is: "+ first1.dataset.game);
console.log("Player is:" + first1.dataset.player);
