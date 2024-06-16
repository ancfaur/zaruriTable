function getDiceValue(){
    return Math.floor(Math.random() * 6) + 1
}

function changeDice(){
    document.querySelector(".img1").setAttribute("src", "images/dice"+getDiceValue()+".png")
    document.querySelector(".img2").setAttribute("src", "images/dice"+getDiceValue()+".png")
}