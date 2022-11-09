let b = 1;
let total = 0;
/// buttons
let btnincrease = document.querySelector(".increase");
let btndeacreas = document.querySelector(".deacreas");
let btnreset = document.querySelector(".reset");

btnincrease.addEventListener("click", () => {
  total += Number(b);
  document.querySelector(".number").textContent = total;
  if (total > 0) {
    document.querySelector(".number").style.color = "green";
  } else if (total == 0) {
    document.querySelector(".number").style.color = "black";
  }
});
btndeacreas.addEventListener("click", () => {
  total -= Number(b);
  document.querySelector(".number").textContent = total;
  if (total < 0) {
    document.querySelector(".number").style.color = "red";
  } else if (total == 0) {
    document.querySelector(".number").style.color = "black";
  }
});
btnreset.addEventListener("click", () => {
  let number = document.querySelector(".number");
  number.style.color = "black";
  total = 0;
  b = 1;
  document.querySelector(".number").textContent = 0;
});

///methode:2
// function increase() {
//   total += Number(b);
//   document.querySelector(".number").textContent = total;
//   if (total > 0) {
//     document.querySelector(".number").style.color = "green";
//   } else if (total == 0) {
//     document.querySelector(".number").style.color = "black";
//   }
// }
// function deacreas() {
//   total -= Number(b);
//   document.querySelector(".number").textContent = total;
//   if (total < 0) {
//     document.querySelector(".number").style.color = "red";
//   } else if (total == 0) {
//     document.querySelector(".number").style.color = "black";
//   }
// }
// function reset() {
//   let number = document.querySelector(".number");
//   number.style.color = "black";
//   total = 0;
//   b = 1;
//   document.querySelector(".number").textContent = 0;
// }
