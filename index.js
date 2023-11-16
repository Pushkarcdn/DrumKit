// Function tomake sound:

function makeSound(key) {

    switch (key) {

        case 'w':
            var audio = new Audio("/sounds/tom-1.mp3");
            audio.play();
            break;

        case 'a':
            var audio = new Audio("/sounds/tom-2.mp3");
            audio.play();
            break;

        case 's':
            var audio = new Audio("/sounds/tom-3.mp3");
            audio.play();
            break;

        case 'd':
            var audio = new Audio("/sounds/tom-4.mp3");
            audio.play();
            break;

        case 'j':
            var audio = new Audio("/sounds/crash.mp3");
            audio.play();
            break;

        case 'k':
            var audio = new Audio("/sounds/kick-bass.mp3");
            audio.play();
            break;

        case 'l':
            var audio = new Audio("/sounds/snare.mp3");
            audio.play();
            break;

    }


}

function buttonAnimation(button) {
    document.querySelector("." + button).classList.add("pressed")

    setTimeout(function () {
        document.querySelector("." + button).classList.remove("pressed");
    }, 100);

}


// Listener for click:

numberOfButtons = document.querySelectorAll("button.drum").length;

for (var i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll("button.drum")[i].addEventListener("click", function () {

        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);


    });
}


// Linstener for keypress:

document.addEventListener("keypress", function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
});