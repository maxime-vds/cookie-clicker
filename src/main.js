import "./index.css";
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
        document.getElementById("cookieDisplay").innerHTML = multiplicateurCookie; 
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