var i = 0;
var j = 0;
var txt = 'Welcome to the 7ea#r00m';
var txt2 = 'Open the box';

function disappear(elmnt){
  elmnt.classList.add("disappear");
  document.querySelector('.opened-box').classList.toggle("appear");
  document.querySelector('.opened-box').classList.remove("invisible");
  document.querySelector('.link-conteneur').classList.remove("invisible");
  document.querySelector('.typewrite-index').classList.add("invisible");

 
    document.querySelector('.title').classList.remove("invisible");
  
}



function ending(){
  document.querySelector('.ending').classList.add("active");
  setTimeout(redirect, 2000)
}

function redirect(){
  window.location.replace("credits.html");
}


function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName('js-typewrite')[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 65);
  }
}

function typeWriter2() {
    if (j < txt2.length) {
      document.getElementsByClassName('js-typewrite2')[0].innerHTML += txt2.charAt(j);
      j++;
      setTimeout(typeWriter2, 65);
    }
  }


setTimeout(typeWriter, 1000);
setTimeout(typeWriter2, 4000);

