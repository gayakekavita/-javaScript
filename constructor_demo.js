class child{
  constructor(){
    console.log("child class constructor called ");
  }
}
class Parent extends child{
  constructor(){
    super(); //calling parent class constructor
    console.log("parent class constructor is called");
  }
}
let p=new Parent();
//when object of a class is created its constructor gets called automatically
// firstly constructor of parent class is called 
//inside it then super() method called which give call to chile class constructor 
//after execution of  child class constructor parent class constructor is called .
