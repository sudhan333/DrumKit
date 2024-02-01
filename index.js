var selectedClass = document.querySelectorAll(".drum");
for(var i = 0;i<selectedClass.length;i++){
    selectedClass[i].addEventListener("click",function() {
       
       var buttonInnerHtml = this.innerHTML;
       makeSound(buttonInnerHtml);
       buttonAnimation(buttonInnerHtml);

});
}

document.addEventListener("keydown",function(events){
    var keyValue = events.key;
    makeSound(keyValue);
    buttonAnimation(keyValue);


})

function makeSound(key){
    switch (key) {
        case "w":
            var audio0 = new Audio("./sounds/tom-1.mp3");
            audio0.play();
            break;
        case "a":
            var audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play();
            break;
        case "s":
            var audio2 = new Audio("./sounds/tom-3.mp3");
            audio2.play(); 
            break; 
        case "d":
            var audio3 = new Audio("./sounds/tom-4.mp3");
            audio3.play();
            break;
        case "j":
            var audio4 = new Audio("./sounds/crash.mp3");
            audio4.play();
            break;
        case "k":
            var audio5 = new Audio("./sounds/kick-bass.mp3");
            audio5.play();
            break;
        case "l":
            var audio6 = new Audio("./sounds/snare.mp3");
            audio6.play();
            break;
        default:console(buttonInnerHtml);
            break;
       }
}

function buttonAnimation(currentKey) {
    
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}
