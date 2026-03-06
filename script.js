const text = [
"Web Developer",
"Tech Student",
"Robotics Enthusiast",
"AI Explorer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
setTimeout(type,1000);
}else{
setTimeout(type,100);
}

})();

document.getElementById("modeToggle").onclick = function(){
document.body.classList.toggle("light");
};

particlesJS("particles-js",{

particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}

});