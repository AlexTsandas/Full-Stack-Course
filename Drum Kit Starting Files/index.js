document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animation(event.key);
});

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
    
    var buttonk=this.innerHTML;
    makeSound(buttonk);
    animation(buttonk);
});
}

function makeSound(key){
 switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function animation(key){
    var button=document.querySelector("." + key);

    button.classList.add("pressed");

    setTimeout(function(){
        button.classList.remove("pressed");
    },150);

}
