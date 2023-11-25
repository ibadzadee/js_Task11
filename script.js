let div = document.querySelector(".container");
let eye = document.querySelector("#eye");
let emojis = document.querySelectorAll('.emoji-box h1');
let feedbackDivs = document.querySelectorAll('.emoji-box div');
let btn = document.querySelector("button");

emojis.forEach((emoji, index) => {
    emoji.addEventListener("click", () => {
        emojis.forEach((otherEmoji) => {
            otherEmoji.style.scale = "0.90";
        });
        
        emoji.style.scale = "1";

        feedbackDivs.forEach((div, divIndex) => {
            div.style.display = index === divIndex ? "flex" : "none";
        });

        btn.innerText = emoji.nextElementSibling.innerText;
        eye.innerText = emoji.innerText;
        div.style.background = getBackgroundColor(index);
    });
});

function getBackgroundColor(index) {
    const colors = ["red", "blue", "darkslategray"];
    return colors[index];
}

// <-----------------------------------------------> //

// let div = document.querySelector(".container")
        // let eye = document.querySelector("#eye")
        // let unhappyDiv = document.querySelector(".unhappy-div")
        // let neutralDiv = document.querySelector(".neutral-div")
        // let satisfiedDiv = document.querySelector(".satisfied-div")
        // let btn = document.querySelector("button")
        
        // unhappyDiv.firstElementChild.addEventListener("click", () => {
        //     unhappyDiv.firstElementChild.style.scale = "1"
        //     neutralDiv.style.display = "none"
        //     satisfiedDiv.style.display = "none"
        //     btn.innerText = unhappy.nextElementSibling.innerText;
        //     eye.innerText = unhappy.innerText
        //     div.style.background = "red"
        // })
        
        // neutralDiv.firstElementChild.addEventListener("click", () => {
        //     neutralDiv.firstElementChild.style.scale = "1"
        //     unhappyDiv.style.display = "none"
        //     satisfiedDiv.style.display = "none"
        //     btn.innerText = neutral.nextElementSibling.innerText;
        //     eye.innerText = neutral.innerText
        //     div.style.background = "blue"
        // })
        
        // satisfiedDiv.firstElementChild.addEventListener("click", () => {
        //     satisfiedDiv.firstElementChild.style.scale = "1"
        //     unhappyDiv.style.display = "none"
        //     neutralDiv.style.display = "none"
        //     btn.innerText = satisfied.nextElementSibling.innerText;
        //     eye.innerText = satisfied.innerText
        //     div.style.background = "darkslategray"
        // })