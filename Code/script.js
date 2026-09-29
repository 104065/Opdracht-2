const shell = document.querySelector("#shell");
const sound = new Audio("DogWoof.mp3");

    shell.addEventListener("click", function () {
        sound.currentTime = 0;
        sound.play();
    });
