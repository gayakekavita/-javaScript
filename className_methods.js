let first=document.getElementById("first");
//above code of line fetch the element
first.className= "text-dark red" ; //here using " .className" atttribute we are setting class name to the particular html element
console.log(first.classList);// here classList gives all the class values 
first.classList.remove("red"); //here we are removing class "red " from that particular html element
first.classList.add("yellow");//here we are addding class "yellow" to  that particular html element
first.classList.toggle("red"); //here toggle attribute will set class as "red" if it is not red 
                              //also it will remove class "red" if it is already defined 
first.classList.contains("yellow");//it checks for particular class for specified html element
