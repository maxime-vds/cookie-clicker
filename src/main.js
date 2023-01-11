import "./index.css";



(() => {
// les variables
let amountcookie= 0;
let cookie= document.getElementById("imgcookie");
let score= document.getElementById("pointcookie");

// action suite au click
cookie.addEventListener("click",() => {
    amountcookie += 1; 
    console.log (amountcookie);
    score.textContent= ("le nombre de cookie" + amountcookie);
});


const cookieclicker= () => {

    
 
} 


}) ()