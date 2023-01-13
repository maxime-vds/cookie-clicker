import "./index.css";

/*
1)score 00 =>  cookieDisplay = affichage dans l'autre projet 

buttons : 
1) id => multiplier (permet de rajouter un click à celui de base) 

2) id => autoclicker (click tout seul) pas de limite de temps et cumulative 


3)id=> boost (boost de click pdt une periode de 30 sec) 

4) tout les check"Name de la function" = button "Name de la function" => checkMult = buttonMultiplier
                                                                            checkAuto = buttonAutoclick
                                                                            checkBoost= buttonBoost

*/

/* 
                        " Etape du code "

1.let de base 

    let score = 0;
    let multiplicateur = 1;
    let autoClic = 0;
    let prix = 50;
    let timeleft = 30;

2.function pour le cookie 

    A.cookiedisplay fonction (quand on click accumule les points)

    a.function pour multiplier (rajoute +1 au click)

    b.function pour autoclick  (rajoute +1 toute les secondes et tout le temps)

    c.function pour boost      (rajoute 200% toute les seconde de manière automatique pdt 20sec)



3.condition de verification pour activer button (achat ou non)

    a.multiplier

    b.autoclick

    c.boost


4. couleur du boutton vert pour acheter sinon button gris après achat

    a.multiplier


    b.autoclick


    c.boost 
    
*/


(() => {

//1.declaration des variable let ;
let score= 0;
let multiplicateur=1;
let autoclick=0;
let prix=50;
let timeLeft=30;
console.log("test")


//2. function des cookies buttons;



            //A1. function cookie
document.getElementById("cookie-img").addEventListener('click', () => {
    score += multiplicateur;
    console.log(score);
    document.getElementById ("cookieDisplay").innerHTML=parseInt(score);
    
    buttonMultiplier();
    buttonAutoclick();
    buttonBoost();
});

            //a. function multiplier
document.getElementById('multiplier').addEventListener ('click', ()=> {
    document.getElementById('multiplier').disabled= true; 

    score= score-prix;
    document.getElementById("cookieDisplay").innerHTML= parseInt(score);
    multiplicateur++;
    prix= prix*2;
    document.getElementById("multiplier").innerHTML= "multiplier X" + multiplicateur;
    buttonAutoclick();
    buttonBoost();

});

            //b. function autocliker
document.getElementById('autocliker').addEventListener ('click', ()=> {

});

            //c. function boost 
document.getElementById('boost').addEventListener ('click', ()=> {

});

//button delete (work in progress)=> id= remote
document.getElementById('remote').addEventListener ('click', ()=> {

});



//3.condition de verification pour activer button (achat ou non);

            //a.multiplier

function buttonMultiplier () {};

            //b.autoclicker

function buttonAutoclick () {};

            //c.boost
function buttonBoost () {};



//4. couleur si achaté ou non le button  (mouseover et mouseout);

            //a.multiplier
            function mouseOverMultiplier(){};
            function mouseOutMultiplier(){};


            //b.autoclicker
            function mouseOverAutocliker(){};
            function mouseOutAutocliker(){};


            //c.boost
            function mouseOverBoost(){};
            function mouseOutBoost(){};



})()










/*
(() => {

    //Declare asset values (ammounts and prices)
    
    let score= 0;
    let price= 20;
    let multiplicateurCookie= 0;
    let autoclcik= 0;
    let timeleft=30;
    let multi=0;
     
    
    

    //Declare the DOM elements 
    let cookieImgButton= document.getElementById("cookie-img");     //class de l'img 
    let multiplierButton= document.getElementById("multiplier");    // section du button multiplier 
    let autoclickerButton= document.getElementById("autoclicker");
    let boostButton= document.getElementById("boost");
    //cookieDisplay
   

    //Push the values in the DOM elements
    
  



    //click the cookie to increment. (click event function)
   cookieImgButton.addEventListener ("click", ()=> {
    
        multiplicateurCookie++;
        console.log (multiplicateurCookie) ;
        document.getElementById("cookieDisplay").innerHTML = paresint(multiplicateurCookie); 
    });
   

    //click the Multiplier button to increment multiplier.     (click event function)
    multiplierButton.addEventListener ("click", ()=> {
    
        multi+=1;
        console.log (multi*5) ;
        document.getElementById("cookieDisplay").innerHTML = multi*5 ;// pour associer le score mais souci d'affichage ( multi*5 + multiplicateurCookie); 
        
    });


    //click the Automaters button to increment automaters.     (click event function)
   
    autoclickerButton.addEventListener ("click", ()=> {
      
        function incrementScore() {
            score++;
            console.log(score);
          }
          let intervalId = setInterval(incrementScore, 1000);
          setTimeout(function() {
              clearInterval(intervalId);
              console.log("Score final: " + score);
            }, 20000);
      
        document.getElementById("cookieDisplay").innerHTML = score; //// pour associer le score mais souci d'affichage ( score+ multiplicateurCookie);
        
    });
    

    //click the Booster button to to boost by 200% for 30 sec. (click event function)
 
    boostButton.addEventListener ("click", ()=> {
        
    boost = 2;
    intervalId = setInterval(incrementScore, 1000);
    setTimeout(function() {
    clearInterval(intervalId);
    boost = 1;
  }, 30000);
    
       
       document.getElementById("cookieDisplay").innerHTML= boost; // pour associer le score mais souci d'affichage ( boost + multiplicateurCookie);
    });
  
      




    //autoclciker function



    //bonus booster function
    let intervalId;
    let boost= 1;
    function incrementScore() {
        score += boost;
        console.log(score);
      }
            
}) ()

*/