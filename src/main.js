import "./index.css";
(() => {

    //Declare asset values (ammounts and prices)
    let cookies = 100

    let multiplier = {
        amount: 1,
        price : 100
    }
    let automater = {
        amount: 1,
        price : 100
    }
    let boostPrice = 100
    

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
    boostBtn.innerHTML = `200% booster <br> Price: ${boostPrice}`

    //click the cookie to increment. (click event function)
    cookieImg.addEventListener('click', () => {
        cookies ++
        console.log(cookies)
        cookieDisplay.innerHTML =`${cookies}`
    })

    //click the Multiplier button to increment multiplier.     (click event function)

    //click the Automaters button to increment automaters.     (click event function)

    //click the Booster button to to boost by 200% for 30 sec. (click event function)

    //autoclciker function

    //bonus booster function

}) ()