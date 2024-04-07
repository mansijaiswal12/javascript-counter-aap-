
let displayelement = document.querySelector(".display")
let display = parseInt(displayelement.innerHTML)
let decreses = document.querySelector(".decreses")
let reset = document.querySelector(".reset")
let increses = document.querySelector(".increses")



let count = 0;
increses.addEventListener("click",() => {
    display++;
    displayelement.innerHTML = display
   
})
 
decreses.addEventListener("click", () => {
    display--;
    displayelement.innerHTML= display
})

reset.addEventListener("click",() => {
  display=0
  displayelement.innerHTML = display

})



