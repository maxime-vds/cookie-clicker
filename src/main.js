import "./index.css";
/* 
To do:
- eslint and prettier
- typescript
- localstorage or mongo db
- reset button
- notification when you buy stuff
- div with the following:
 - your assets bought
 - total cookies spend
*/
(() => {

    //Declare asset values (ammounts and prices)
    let cookies = 0
    let multiplier = {amount: 1, price: 10}
    let automater =  {amount: 0, price: 10}
    let boostPrice = 10
   
    let booster = false
    
    //Declare the DOM elements 
    const cookieImg = document.getElementById('cookie-img')
    const cookieDisplay = document.getElementById('cookieDisplay')
    const multiplierBtn = document.getElementById('multiplier')
    const automaterBtn = document.getElementById('autoclicker')
    const boostBtn = document.getElementById('boost')
    const resetbtn = document.getElementById('resetbtn')
    
    //Push the values in the DOM elements
    const pushDom = () => {
        cookieDisplay.innerHTML = `${Math.floor(cookies)}`
        multiplierBtn.innerHTML = `Multipliers: ${Math.floor(multiplier.amount)}X <br> Price: ${Math.floor(multiplier.price)}`
        automaterBtn.innerHTML = `Automaters: ${Math.floor(automater.amount)}<br> Price: ${Math.floor(automater.price)}`
        boostBtn.innerHTML = `200% booster <br> Price: ${Math.floor(boostPrice)}`
    } 
    pushDom()


    // checks if you have enough cookies to perform the buy
    const checkPrice = (price) => {
        if( cookies >= price ){
            cookies = cookies - price
            return true
        }
        else{
            alert("not enough cookies")
            return false
        } 
    }
    
    //every second add a cookie times the automaters to the balance
    setInterval(()=> {
        cookies = booster ? cookies + 1 * automater.amount*2 :  cookies + 1 * automater.amount
        pushDom()
    },1000)

    //click the cookie to increment. (click event function)
    cookieImg.addEventListener('click', () => {
        cookies = booster ? cookies + 1 * multiplier.amount*2 :  cookies + 1 * multiplier.amount
        cookieDisplay.innerHTML =`${Math.floor(cookies)}`
    })

    //click the Multiplier button to increment multiplier.     (click event function)
    multiplierBtn.addEventListener("click", () => {
        if(checkPrice(multiplier.price)) {
            multiplier.amount ++
            multiplier.price *= 1.2
        }
        pushDom()
    })

    //click the Automaters button to increment automaters.     (click event function)
    automaterBtn.addEventListener('click', () => {
        if(checkPrice(automater.price)){
            automater.amount++
            automater.price *= 1.2
        }  
        pushDom()
    })

    //booster function      (click event function)
    boostBtn.addEventListener('click', () => { 
        if(cookies >= boostPrice && booster === false){
            cookies =cookies - boostPrice
            boostPrice *= 1.2 
            let timer = 5
            let boostInterval = setInterval(() => {
                booster = true
                timer--
                console.log(timer, booster)  
                if(timer <= 0) {
                    clearInterval(boostInterval)
                    booster = false
                }
            }, 1000)
            
            
        }
        else { console.log("booster is true", booster)}
        pushDom()
    })

    // resetbtn.addEventListener('click',() => {

    // })

}) ()