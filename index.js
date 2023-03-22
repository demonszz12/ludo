function roll(){
    document.getElementsByClassName("dice1")[0].style.backgroundColor="white"
    document.getElementsByClassName("dice2")[0].style.backgroundColor="white"
    document.getElementsByClassName("dice3")[0].style.backgroundColor="white"

let x = Math.floor((Math.random() * 6) + 1);
let y = Math.floor((Math.random() * 6) + 1);
let z = Math.floor((Math.random() * 6) + 1);
document.getElementsByClassName("dice1")[0].innerHTML=x;
document.getElementsByClassName("dice2")[0].innerHTML=y;
document.getElementsByClassName("dice3")[0].innerHTML=z;
if(x>y && x>z){
    document.getElementsByClassName("winner")[0].innerHTML="member-1"
    document.getElementsByClassName("dice1")[0].style.backgroundColor="blue"

}
else if(x<y && y>z){
    document.getElementsByClassName("winner")[0].innerHTML="member-2"
    document.getElementsByClassName("dice2")[0].style.backgroundColor="blue"

}
else if(x<z && y<z){
    document.getElementsByClassName("winner")[0].innerHTML="member-3"
    document.getElementsByClassName("dice3")[0].style.backgroundColor="blue"

}
else{
    document.getElementsByClassName("winner")[0].innerHTML="Draw Match"
}
}