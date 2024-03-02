let btn=document.querySelector('.CM');

function gen_clr() {
    let blue=(Math.floor(Math.random()*255));
    let white=(Math.floor(Math.random()*255));
    let pink=(Math.floor(Math.random()*255));
    let color= `rgb(${blue}, ${white}, ${pink})`
    btn.style.backgroundColor=color;
    
}

btn.onclick=gen_clr;

let myButton = document.querySelector("#myButton");

  // Add a click event listener to the button
  myButton.onclick = function() {
    // Display an alert message
    alert("You have subscribed successfully!");
  };