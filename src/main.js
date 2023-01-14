import "./index.css";
/* 
To do:
1. eslint and prettier: Jo  
2. typescript: Jo             
3. localstorage or mongo db. (backend): Jo
4. reset button: Max
5. responsiveness and  design: Carolina
6. notification when you buy stuff. (bonus: if we could add +x next to the mouse cursor each time cookie is clicked would be cool) : (Max + Carolina )
7. DIV or Section with the following:  Max + Carolina
  your assets bought (multipliers, automaters, boosters), 
  Total cookies spend,
  we could insert this in a navbar/sidebar that retracts on Mobile 
8. in the navbar/sidebar add a link to a page with the game rules.Carolina
9. Readme that contains a link to the project website, a picture of the project and the project description: Max
10. Add and assign the above 9 tasks to Github board projects: Max
*/

(() => {

    //Declare assets with default values 
    const defaultValues = () => {
        let cookies = 0
        let multiplier = {amount: 1, price: 10}
        let automater  = {amount: 0, price: 10}
        let boosters   = {amount: 0, price: 10, active: false}
        return [cookies, multiplier, automater, boosters]
    }
    let [cookies, multiplier, automater, boosters] = defaultValues()  //destructuring defaultvalues() in variables

    
    //Declare the DOM elements 
    const cookieImg = document.getElementById('cookie-img')
    const cookieDisplay = document.getElementById('cookieDisplay')
    const multiplierBtn = document.getElementById('multiplier')
    const automaterBtn = document.getElementById('autoclicker')
    const boostBtn = document.getElementById('boost')
    const resetbtn = document.getElementById('resetbtn')
    
    
    //Push the values in the DOM elements. So that the values are being displayed on the webpage
    const pushDom = () => {
        cookieDisplay.innerHTML = `${Math.floor(cookies)}`
        multiplierBtn.innerHTML = `Multipliers: ${Math.floor(multiplier.amount)}X <br> Price: ${Math.floor(multiplier.price)}`
        automaterBtn.innerHTML = `Automaters: ${Math.floor(automater.amount)}<br> Price: ${Math.floor(automater.price)}`
        boostBtn.innerHTML = `200% booster <br> Price: ${Math.floor(boosters.price)}`
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
    // resetbtn.addEventListener('click',() => {

    // })

}) ()