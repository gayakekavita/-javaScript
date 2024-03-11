let user = prompt("Enter S, W, or G");
let cpuI = Math.floor(Math.random() * 3);
console.log(cpuI);
let cpu = ["S", "W", "G"][cpuI];

const match = (cpu, user) => {
  if (cpu == user) {
    return "Nobody";
  } else if (cpu == "S" && user == "W") {
    return "cpu";
  } else if (cpu == "S" && user == "G") {
    return "You";
  } else if (cpu == "W" && user == "G") {
    return "cpu";
  } else if (cpu == "W" && user == "S") {
    return "You";
  } else if (cpu == "G" && user == "W") {
    return "You";
  } else if (cpu == "G" && user == "S") {
    return "cpu";
  }
};

let result = match(cpu, user);
document.write(result + " won " + result + " got 1 point");
document.write("cpu is: " + cpu + " and user is: " + user);
