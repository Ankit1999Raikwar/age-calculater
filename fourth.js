function birthdayindays(){

let birthday=prompt("Enter your birth year???");
let birthdayindays=(2020-birthday)*365;
console.log(birthdayindays);
var h1=document.createElement("h1");
console.log(h1);
let notepad1=document.createTextNode("you are the"+ birthdayindays +"days");
console.log(notepad1);
h1.setAttribute("id", "birthdayhead");
h1.appendChild(notepad1);
console.log(h1)
document.getElementById("result").appendChild(h1);

}
function reset(){
    document.getElementById("birthdayhead").remove();
}