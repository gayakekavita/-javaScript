 class Myclass{
   leaves(leave)
   {
     console.log(`Requested leaves ${leave}`);
   }
   login (){

     console.log("login sucessfully");
   }
   logout()
   {
     console.log("logged out");
   }
 }
class Programmer extends Myclass{

    //method overriding is done at below method .
  //we called child class method using super keyword.
  
    leaves(leave)
  {
    super.leaves(4); //child class method is called in parent class using super keyword 
    console.log("extra leaves are:"+ leave);
  }
}
let p=new Programmer();
p.login();
p.logout();
p.leaves(3);
