let menu = document.querySelector(".menu")
let menuDiv = document.querySelector(".menu-div")
let notification = document.querySelector('.notification')
let pop = document.querySelector(".pop")
let notificationCount = document.querySelector(".notification-count")
let flex = document.querySelectorAll(".flex")
let message = document.querySelector('.message')
let messageBox = document.querySelector(".right-messages")
let menuA = document.querySelectorAll(".menu-a")
let userInput = document.querySelector("#search-input")
let messageContainer = document.querySelectorAll(".message-box")

menu.addEventListener("click",()=>{
    menuDiv.classList.toggle("anim")

    if (menu.classList.contains("fa-bars")) {
        menu.classList.add('fa-xmark')
        menu.classList.remove("fa-bars")
    }else{
        menu.classList.add("fa-bars")
        menu.classList.remove('fa-xmark')
    }
})


let removeActive = ()=>{
    flex.forEach((flexs)=>{
        flexs.classList.remove("active")
    })
}


flex.forEach((flexs)=>{
    flexs.addEventListener("click",()=>{
        removeActive()
        flexs.classList.add("active")
        if(flexs.classList.contains('notification')){
            pop.classList.add("activ")
            notificationCount.style.display = "none"
        }else{
            pop.classList.remove("activ")
            notificationCount.style.display = "flex"
        }

        if (flexs.classList.contains("message")) {
            messageBox.style.boxShadow = ` 3px 2px 10px var(--color-primary)`
            document.querySelector(".message-count").style.display = "none"
        }else{
            messageBox.style.boxShadow = "none"
            document.querySelector(".message-count").style.display = "flex"
        }
    })


})

let removeActi = ()=>{
    menuA.forEach((a)=>{
        a.classList.remove("acti")
        })
}

menuA.forEach((a)=>{
    a.addEventListener("click",()=>{
        removeActi()
        a.classList.add("acti")
    })
})


let search = ()=>{

    messageContainer.forEach((message)=>{
        let messVal = message.querySelector("h3").textContent
        
        let value = userInput.value.toLowerCase()

        console.log('messval value index ',messVal, value ,  messVal.indexOf(value));
        

        if(messVal.indexOf(value) != -1){
            message.style.display = 'flex'
        }else{
            message.style.display = "none"
        }

    })

}



userInput.addEventListener("keyup",search)

