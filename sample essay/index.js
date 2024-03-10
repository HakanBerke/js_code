// function handleClick() {
//     alert("Clicklendim")
// }

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

document.querySelectorAll("button")[i].addEventListener("click",function(){
    for (let i = 0; i < numberOfDrumButtons; i++) {
        let buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                let tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play()
                break;

                case "a":
                let tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play()
                break;

                case "a":
                let tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play()
                break;

                case "a":
                let tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play()
                break;

                case "a":
                let tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play()
                break;
        
            default: 
        }
    }
})
