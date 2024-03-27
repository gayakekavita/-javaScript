class myClass {
  constructor(name) {
    this._name = name;
    console.log("original name " + this._name); // Changed _name to this._name
  }

  get name() {
    return this._name;
  }
  set name(newname){
    return this._name=newname;
  }
}

let obj = new myClass("kavi");
console.log(obj.name); // call to getter property 
console.log(" after setter property");
console.log(obj.name="kavish");
console.log(obj instanceof myClass);
//instanceof operator is used to check whether an object belongs to a certain class or not 
