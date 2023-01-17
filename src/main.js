import "./index.css";


(() => {

 //Declare assets with default values 
 const defaultValues = () => {
    let totalcookies = 0
    let cookies = 0
    let multiplier = {amount: 1, price: 10}
    let automater  = {amount: 0, price: 10}
    let boosters   = {amount: 0, price: 10, active: false}
    return [cookies, multiplier, automater, boosters, totalcookies]
}
let [cookies, multiplier, automater, boosters, totalcookies] = defaultValues()  //destructuring defaultvalues() in variables


//Declare the DOM elements 
const cookieImg = document.getElementById('cookie-img')
const cookieDisplay = document.getElementById('cookieDisplay')
const multiplierBtn = document.getElementById('multiplier')
const automaterBtn = document.getElementById('autoclicker')
const boostBtn = document.getElementById('boost')
const resetbtn = document.getElementById('resetbtn')
const scoreCookie = document.getElementById('scoreCookie')
const scoreMultiplier = document.getElementById('scoreMultiplier')
const scoreAutomater = document.getElementById('scoreAutomater')
const scoreBooster = document.getElementById('scoreBooster')


//Push the values in the DOM elements. So that the values are being displayed on the webpage
const pushDom = () => {
    cookieDisplay.innerHTML = `${Math.floor(cookies)}`
    multiplierBtn.innerHTML = `<h1 class = "text-base md:text-xl xl:text-4xl">🧺️</h1> +${Math.floor(multiplier.amount)} <br> Price: ${Math.floor(multiplier.price)}`
    automaterBtn.innerHTML = `<h1 class = "text-base md:text-xl xl:text-4xl">🌴</h1>  ${Math.floor(automater.amount)}<br> Price: ${Math.floor(automater.price)}`
    boostBtn.innerHTML = `<h1 class = "text-base md:text-xl xl:text-4xl">🐒</h1> BOOST 3x <br> Price: ${Math.floor(boosters.price)}`
    multiplierBtn.innerHTML = `<h1 class = "text-4xl">🧺️</h1> +${Math.floor(multiplier.amount)} <br> Price: ${Math.floor(multiplier.price)}`
    automaterBtn.innerHTML = `<h1 class = "text-4xl">🌴</h1>  ${Math.floor(automater.amount)}<br> Price: ${Math.floor(automater.price)}`
    boostBtn.innerHTML = `<h1 class = "text-4xl">🐒</h1> BOOST 3x <br> Price: ${Math.floor(boosters.price)}`
    scoreCookie.innerHTML = `🥥: ${totalcookies}`
    scoreMultiplier.innerHTML = `🧺️: ${multiplier.amount - 1}`
    scoreAutomater.innerHTML = `🌴: ${automater.amount}`
    scoreBooster.innerHTML = `🐒: ${boosters.amount}`
} 
pushDom()


// Checks if you have enough cookies to perform a buy operation
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


//calcuclates the increment rate
const incrementer = (assetAmount) => {
    cookies = boosters.active ? cookies + 1 * assetAmount*3 :  cookies + 1 * assetAmount
    totalcookies = boosters.active ? totalcookies + 1 * assetAmount*3 :  totalcookies + 1 * assetAmount
    return cookies
}


//Every second add a cookie times the automaters to the balance
setInterval(()=> {
    incrementer(automater.amount)
    pushDom()
},1000)


//click the cookie to increment. 
cookieImg.addEventListener('click', () => {
   
   incrementer(multiplier.amount)
   
   pushDom()
})


//click the Multiplier button to increment multiplier.     
multiplierBtn.addEventListener("click", () => {
    if(checkPrice(multiplier.price)) {
        multiplier.amount ++
        multiplier.price *= 1.1
    }
    pushDom()
})


//click the Automaters button to increment automaters.     
automaterBtn.addEventListener('click', () => {
    if(checkPrice(automater.price)){
        automater.amount ++
        automater.price *= 1.1
    }  
    pushDom()
})


//Booster function. When clicked, you are boosted for 10 seconds. The boost gives you 2x cookies on the cookieclick and 2x cookies from the automaters. 
//Before activating the booster, the function checks if the booster is already active or not.     
boostBtn.addEventListener('click', () => { 
    if(cookies >= boosters.price && boosters.active  === false){
        cookies =cookies - boosters.price
        boosters.amount++
        boosters.price *= 1.1 
        boosters.active  = true
        let timer = 10
        let boostInterval = setInterval(() => {
            timer--
            console.log(timer, boosters.active )  
            if(timer <= 0) {
                clearInterval(boostInterval)
                boosters.active  = false
            }
        }, 1000)            
    }
    else { console.log("booster is already active or not enough coockies", boosters.active )}
    pushDom()
})

//reset Button, sets all variables to default value
resetbtn.addEventListener('click',() => {
    [cookies, multiplier, automater, boosters, totalcookies] = defaultValues();
    pushDom();
})

 //navbar
 const button = document.querySelector(".fa-trophy");
 const closeButton = document.querySelector(".fa-circle-xmark");
 const sidenav = document.querySelector(".sidenav-content");

 
 button.addEventListener("click", function() {
   sidenav.classList.toggle("active");
   sidenav.classList.remove("hidden");
 });
 
 closeButton.addEventListener("click", function() {
     sidenav.classList.toggle("active");
     sidenav.classList.add("hidden");
     
 });
 


}) ()



