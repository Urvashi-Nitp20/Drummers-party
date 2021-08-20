let btn= document.querySelectorAll(".drum");
btn.forEach(element => {
   element.addEventListener("click",handleClick);
});
document.addEventListener("keydown",handlePress)
function handlePress(event){
 let key = event.key;+
  makeSound(key);
  animate(key);
}

function handleClick(){
 var key = this.getAttribute("id")
 makeSound(key);
 animate(key);


}
// let audio= new Audio('sounds/tom-1.mp3');
// audio.play();
function makeSound(key){
   if (key==="w") {
      let audio= new Audio('sounds/tom-1.mp3');
      audio.play();
   }
   else if (key==="a") {
     let audio= new Audio('sounds/tom-2.mp3');
     audio.play();
  }
  else if (key==="s") {
     let audio= new Audio('sounds/tom-3.mp3');
     audio.play();
  }
  else if (key==="d") {
     let audio= new Audio('sounds/tom-4.mp3');
     audio.play();
  }
  else if (key==="j") {
     let audio= new Audio('sounds/snare.mp3');
     audio.play();
  }
  else if (key==="k") {
     let audio= new Audio('sounds/kick-bass.mp3');
     audio.play();
  }
  else if(key==="l"){
     let audio= new Audio('sounds/crash.mp3');
     audio.play();
  }
  else{
    
  }
}
function animate(key){
 document.querySelector("#"+key).classList.add("pressed");
 setTimeout(function(){
   document.querySelector("#"+key).classList.remove("pressed")
 },200);
}
//don't use setAttribute() or removeAttribute to add classes becoz it removes previous classes

