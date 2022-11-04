let previous = document.querySelector(".previous")
let next = document.querySelector(".next")
let imgDiv = document.querySelector(".image-div")
let imgArray = document.getElementsByClassName("imgs")
console.log(imgArray.length);
console.log(imgDiv);

let clickCounter = 0

previous.addEventListener("click", function(){
    if(clickCounter == 0){
        clickCounter = imgArray.length - 1
        let transitionAmount = clickCounter * -100
        imgDiv.style.transform =`translateX(${transitionAmount}%)`
        imgDiv.style.transitionDuration = "0s"
    }else{
        clickCounter--
        let transitionAmount = clickCounter * -100
        console.log(`translateX(${transitionAmount}%)`)
        imgDiv.style.transform =`translateX(${transitionAmount}%)`
        imgDiv.style.transitionDuration = "2s"
    }
})

next.addEventListener("click", function(){
    if(clickCounter >= imgArray.length - 1){
        clickCounter = 0
        let transitionAmount = 0
        imgDiv.style.transform =`translateX(${transitionAmount}%)`
        imgDiv.style.transitionDuration = "0s"
    }else{
        clickCounter++
        let transitionAmount = clickCounter * -100
        console.log(`translateX(${transitionAmount}%)`)
        imgDiv.style.transform =`translateX(${transitionAmount}%)`
        imgDiv.style.transitionDuration = "2s"
    }
})


console.log(clickCounter);