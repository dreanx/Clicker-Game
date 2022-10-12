let idle = 0;
let sum = 0;
let cost1 = 1;
let cost5 = 5;
let cost10 = 10;

//CLICK
document.getElementById("click1").onclick = function one() {
  console.log("clicked 1");
  sum = sum + 1;
  document.getElementById("number").innerHTML = sum;
};

document.getElementById("click5").onclick = function five() {
  console.log("clicked 5");
  sum = sum + 5;
  document.getElementById("number").innerHTML = sum;
};

document.getElementById("click10").onclick = function ten() {
  console.log("clicked 10");
  sum = sum + 10;
  document.getElementById("number").innerHTML = sum;
};

//IDLE
document.getElementById("i1").onclick = function idle1() {
  console.log("idle1");
  if (cost1 <= sum) {
    idle = idle + 1;
    sum = sum - cost1;
    cost1 = Math.ceil(1.5 * cost1);
    document.getElementById("c1").innerHTML = "Cost:" + cost1;
  } else {
    window.alert("You're Broke");
  }

  document.getElementById("number").innerHTML = sum;
  document.getElementById("idlenum").innerHTML = "Idle: " + idle;
};

document.getElementById("i5").onclick = function idle5() {
  console.log("idle5");
  if (cost5 <= sum) {
    idle = idle + 5;
    sum = sum - cost5;
    cost5 = 2 * cost5;
    document.getElementById("c5").innerHTML = "Cost:" + cost5;
  } else {
    window.alert("You're Broke");
  }

  document.getElementById("number").innerHTML = sum;
  document.getElementById("idlenum").innerHTML = "Idle: " + idle;
};

document.getElementById("i10").onclick = function idle10() {
  console.log("idle10");
  if (cost10 <= sum) {
    idle = idle + 10;
    sum = sum - cost10;
    cost10 = 3 * cost10;
    document.getElementById("c10").innerHTML = "Cost:" + cost10;
  } else {
    window.alert("You're Broke");
  }

  document.getElementById("number").innerHTML = sum;
  document.getElementById("idlenum").innerHTML = "Idle: " + idle;
};

//RESET
document.getElementById("reset").onclick = function reset() {
  console.log("reset");
  document.getElementById("number").innerHTML = 0;
  document.getElementById("c1").innerHTML = "Cost:" + 1;
  document.getElementById("c5").innerHTML = "Cost:" + 5;
  document.getElementById("c10").innerHTML = "Cost:" + 10;
  document.getElementById("idlenum").innerHTML = "Idle: " + 0;
  idle = 0;
  sum = 0;
  cost1 = 1;
  cost5 = 5;
  cost10 = 10;
};

//Increment Function
setInterval(function increment() {
  sum = sum + idle;
  document.getElementById("number").innerHTML = sum;
  console.log(idle);
  console.log(sum);
  console.log(cost1);
  console.log(cost5);
  console.log(cost10);
}, 1000);
