---nowdays we mostly use 'let' keyword for declaring the variables.
--following are the keywords used to declare the variables:
  1.const
  2.let
  3.var

1.const
  -is used to declare the constant variables in the javascript .
  -when we do not want to change value of any variable throughout the program then we use 'const' keyword while declaring the variables.

   Ex:
    const a=10;
    console.log("variables in javascript");
    console.log(a);
    a="kavya";
    console.log(a);

  above code will through error because we are tyring to reassign the constant variable 'a'.
    --Error:
     Typeerror:
       Assignment to constant variable.


    2.var
    -used to declare the variables in the javascript.
    -we can redeclare the variables which are declared using 'var' keyword.
    -bacause of redeclaring does not gives any error it will create ambiguity.
    -so it is better to not use 'var' keyword while declaring the variables.

    var a=10;
    console.log("variables in javascript");
    console.log(a);
    var a="kavya";
    console.log(a);


  3.let 
  -used to declare the variables in the javascript.
  -when we declare variables using 'let' keyword then it cannot be redeclared.
  -Because of this feature of javascript it will avoid ambiguity  in the code.
  --so it is better to use 'let' keyword while declaring the variables.

    let a=10;
    console.log("variables in javascript");
    console.log(a);
    let a="kavya";
    console.log(a);

 --above block of code will through error
    Error:
      Syntax Error:
       Identifier 'a' has already been declared.
    


       




  
