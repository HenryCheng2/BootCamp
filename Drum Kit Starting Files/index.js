var numberofdrums=document.querySelectorAll(".drum").length;
for (var index = 0; index < numberofdrums; index++) {


    document.querySelectorAll(".drum")[index].addEventListener("click", function() {
    // this.style.color=("white")
    var buttonInnerHTML=this.innerHTML;
        makesound(buttonInnerHTML);
        buttonanimation(buttonInnerHTML);
    }); 

}
document.addEventListener("keydown",function(event){
    console.log(event.key);
    makesound(event.key);
    buttonanimation(event.key);
});
function makesound(key){

    switch (key) {
        case "w":
        var crash =new Audio("sounds/crash.mp3");
        crash.play();
            break;
        case "a":
        var kick =new Audio("sounds/kick-bass.mp3");
        kick.play();       
        case "s":
        var snare =new Audio("sounds/snare.mp3");
        snare.play();
            break;
        case "d":
        var tom1 =new Audio("sounds/tom-1.mp3");
        tom1.play();    
        case "j":
        var tom2 =new Audio("sounds/tom-2.mp3");
        tom2.play();
            break;
        case "k":
        var tom3 =new Audio("sounds/tom-3.mp3");
        tom3.play();       
        case "l":
        var tom4 =new Audio("sounds/tom-4.mp3");
        tom4.play();
            break;
        default:
            break;
    }
}

function buttonanimation(currentKey){
var activebutton =document.querySelector("."+currentKey);
activebutton.classList.add("pressed");
setTimeout(function(){
    activebutton.classList.remove("pressed");
},100);
}
// addEventListener check if user has clicked the element in .drum

// do not include () because it will trigger the function on call

// var audio =new Audio("sounds/crash.mp3");
// audio.play();