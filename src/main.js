import "./index.css";
import Notify from 'simple-notify'
import axios from 'axios';

(async () => {

let dataMango
await axios.get('http://localhost:3001/api/getAll')
    .then(response => {
        dataMango = response.data
    })   
    .catch(error =>{
        console.log(error.message)
    })


 //Declare assets with default values 
 const defaultValues = () => {
    let totalcookies = dataMango[0].totalcookies
    let cookies = dataMango[0].cookies
    let multiplier = dataMango[0].multiplier
    let automater  = dataMango[0].automater
    let boosters   = dataMango[0].boosters
    return [cookies, multiplier, automater, boosters, totalcookies]
}
let [cookies, multiplier, automater, boosters, totalcookies] = defaultValues()  //destructuring defaultvalues() in variables
console.log("the values at start are: ", defaultValues())

// update the mongo DB
const updateDB = async () => {
    const id = "63cd533572e83c152b9d78d7"
    const update = {
        totalcookies: totalcookies,
        cookies: cookies,
        multiplier: multiplier,
        automater: automater,
        boosters: boosters
    }
   return axios.patch(`http://localhost:3001/api/update/${id}`, update)
   .then(response => {
        return response.data
   })
   .catch(error =>{
    console.log(error.message)
   })
}
const result = await updateDB()
 console.log("show me the result of the update: " , await updateDB())

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

    multiplierBtn.innerHTML = `<h1 class = "text-xs md:text-xl xl:text-4xl">🧺️</h1> +${Math.floor(multiplier.amount)} Price: ${Math.floor(multiplier.price)}`
    automaterBtn.innerHTML = `<h1 class = "text-xs md:text-xl xl:text-4xl">🌴</h1>  ${Math.floor(automater.amount)}/sec Price: ${Math.floor(automater.price)}`
    boostBtn.innerHTML = `<h1 class = "text-xs md:text-xl xl:text-4xl">🐒</h1> Boost 3x Price: ${Math.floor(boosters.price)}`
    
    scoreCookie.innerHTML = `🥥: ${totalcookies}`
    scoreMultiplier.innerHTML = `🧺️: ${multiplier.amount - 1}`
    scoreAutomater.innerHTML = `🌴: ${automater.amount}`
    scoreBooster.innerHTML = `🐒: ${boosters.amount}`
} 
pushDom()

function pushNotify(asset) {
    new Notify({
      status: 'success',
      title: `${asset}`,
      text: `You just bought a ${asset}`,
      effect: 'fade',
      speed: 500,
      customClass: null,
      customIcon: null,
      showIcon: true,
      showCloseButton: false,
      autoclose: true,
      autotimeout: 500,
      gap: 0,
      distance: 0,
      type: 1,
      position: 'right top'
    })
  }
function fundsError() {
    new Notify({
      status: 'warning',
      title: `NOT ENOUGH COCO`,
      text: `You dont have enough coco to buy this`,
      effect: 'fade',
      speed: 500,
      customClass: null,
      customIcon: null,
      showIcon: true,
      showCloseButton: true,
      autoclose: true,
      autotimeout: 2000,
      gap: 20,
      distance: 20,
      type: 1,
      position: 'left bottom'
    })
  }


// Checks if you have enough cookies to perform a buy operation
const checkPrice = (price) => {
    if( cookies >= price ){
        cookies = cookies - price
        updateDB()
        return true
    }
    else{
        fundsError()
        return false
    } 
}


//calcuclates the increment rate
const incrementer = (assetAmount) => {
    cookies = boosters.active ? cookies + 1 * assetAmount*3 :  cookies + 1 * assetAmount
    totalcookies = boosters.active ? totalcookies + 1 * assetAmount*3 :  totalcookies + 1 * assetAmount
   
}


//Every second add a cookie times the automaters to the balance
setInterval(()=> {
    incrementer(automater.amount)
    pushDom()
},1000)


//click the cookie to increment. 
cookieImg.addEventListener('click', () => {
    incrementer(multiplier.amount)
    updateDB()   
    pushDom()
 
})


//click the Multiplier button to increment multiplier.     
multiplierBtn.addEventListener("click", () => {
    if(checkPrice(multiplier.price)) {
        multiplier.amount ++
        multiplier.price *= 1.1
        pushNotify('Basket')
        updateDB()
    }
    pushDom()
})


//click the Automaters button to increment automaters.     
automaterBtn.addEventListener('click', () => {
    if(checkPrice(automater.price)){
        automater.amount ++
        automater.price *= 1.1
        pushNotify('Palm Tree')
        updateDB()
    }  
    pushDom()
})


//Booster function. When clicked, you are boosted for 10 seconds. The boost gives you 2x cookies on the cookieclick and 2x cookies from the automaters. 
//Before activating the booster, the function checks if the booster is already active or not.     
boostBtn.addEventListener('click', () => { 
    if(cookies >= boosters.price && boosters.active  === false){
        pushNotify('Monkey')
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
    updateDB()
})

//reset Button, sets all variables to default value
resetbtn.addEventListener('click',() => {
    console.log([cookies, multiplier, automater, boosters, totalcookies])
    pushDom();
})

 //navbar
 const button = document.querySelector(".fa-trophy");
 const closeButton = document.querySelector(".fa-circle-xmark");
 const sidenav = document.querySelector(".sidenav-content");

 
 button.addEventListener("click", function() {
    sidenav.classList.toggle("active");
    sidenav.classList.toggle("hidden");
 });
 

}) ()



