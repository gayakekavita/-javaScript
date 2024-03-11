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
  
    
        
  
  <script src="script.js"></script>
</body>

</html>
*/
let div= document.createElement('div');
div.innerHTML='<h1>Hi</h1>';
div.style.color="red";
document.body.appendChild(div);
let  div2=document.createElement('div');
div2.innerHTML='<h2> second div </h2>';
div.prepend(div2);
div.before(div2);
div.after(div2);
div.replaceWith(div2);
