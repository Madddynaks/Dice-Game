let random_num1 = Math.floor(Math.random()*6) + 1;
let random_num2 = Math.floor(Math.random()*6) + 1;
// console.log(random_num)
let source = "images/dice" + random_num1 + ".png";
document.getElementById("dice1").setAttribute("src" , source);
let source2 = "images/dice" + random_num2 + ".png";
document.getElementById("dice2").setAttribute("src",source2);

if(random_num1 > random_num2){
    document.getElementById("Refresh").innerText = "❣️ Player 1 wins"
}
else if(random_num1 < random_num2){
    document.getElementById("Refresh").innerText = "Player 2 wins ❣️"
}
else{
    document.getElementById("Refresh").innerText = "❣️ Draw ❣️"
}
