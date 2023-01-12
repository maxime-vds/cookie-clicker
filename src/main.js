import "./index.css";
(() => {

    //Declare asset values (ammounts and prices)
    let cookies = 100

    let multiplier = {
        amount: 1,
        price : 110
    }
    let automater = {
        amount: 0,
        price : 100
    }
    let boostPrice = 500
   
    setInterval(()=> {
        cookies = cookies * automater.amount
        cookieDisplay.innerHTML = `${cookies}`
        return cookies
   },1000)

    
    //Declare the DOM elements 
    const cookieImg = document.getElementById('cookie-img')

    const cookieDisplay = document.getElementById('cookieDisplay')
    const multiplierBtn = document.getElementById('multiplier')
    const automaterBtn = document.getElementById('autoclicker')
    const boostBtn = document.getElementById('boost')

    //Push the values in the DOM elements


    cookieDisplay.innerHTML = `${cookies}`
    multiplierBtn.innerHTML = `Multipliers: ${multiplier.amount}X <br> Price: ${multiplier.price}`
    automaterBtn.innerHTML = `Automaters: ${automater.amount}<br> Price: ${automater.price}`
    boostBtn.innerHTML = `100% booster <br> Price: ${boostPrice}`

    //click the cookie to increment. (click event function)
    cookieImg.addEventListener('click', () => {
        cookies = calc()
        cookieDisplay.innerHTML =`${cookies}`
        return cookies
    })

    //click the Multiplier button to increment multiplier.     (click event function)
    multiplierBtn.addEventListener("click", () => {
        if( cookies >= multiplier.price ){
            cookies = cookies - multiplier.price
            multiplier.amount ++
            multiplier.price = Math.floor(multiplier.price) *1.2     
            multiplierBtn.innerHTML = `Multipliers: ${multiplier.amount}X <br> Price: ${multiplier.price}`
            cookieDisplay.innerHTML =`${cookies}`
        }
        else{
            alert("not enough cookies")
        }
        
        return multiplier
    })

    //click the Automaters button to increment automaters.     (click event function)
    automaterBtn.addEventListener('click', () => {
        automater.amount ++
        automater.price = Math.floor(automater.price) *1.2     
        automaterBtn.innerHTML = `automaters: ${automater.amount}X <br> Price: ${automater.price}`
        return automater
    })

    boostBtn.addEventListener('click', () => { 
        console.log("click ")
        boostPrice = Math.floor(boostPrice)*1.2
        boostBtn.innerHTML = `100% booster <br> Price: ${boostPrice}`
        return boostPrice
    })

    const calc = () => {
        cookies = cookies + 1 * multiplier.amount
        console.log("calculation, ",  cookies)
        return cookies
        
    }

 

   

    //click the Booster button to to boost by 200% for 30 sec. (click event function)

    //autoclciker function

    //bonus booster function

}) ()