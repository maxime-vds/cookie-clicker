import "./index.css";



(() => {

/* style souris 
function setCursorByID(mm,cursorStyle) {
    var elem;
    if (document.getElementById &&
       (elem=document.getElementById(mm)) ) {
     if (elem.style) elem.style.cursor= pointer;
    }
   }*/
   
// les variables
let amountcookie= 0;
let cookie= document.getElementById("imgcookie");
let score= document.getElementById("pointcookie");

// action suite au click
cookie.addEventListener("click",() => {
    amountcookie += 1; 
    console.log (amountcookie);
    score.textContent= ("le nombre de cookie : " + amountcookie);
});


const cookieclicker= (amontcookie) => {
    //button multiplicateur
    /*   
    let multibutton = document.getElementById ("multybutton");
    
    multibutton.addEventListener ("click", ()=> {
    let multyamontcookie= amontcookie * 2;
    console.log (multyamontcookie);
    
    });
    
    
    */ 

    //button autoclick


    //button (bonus) boost

    
 
} 


}) ()