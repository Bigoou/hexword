var i = 0;
var txt = 'Credits';

function ending(){
    document.querySelector('.ending').classList.add("active");
    setTimeout(redirect, 2000)
  }
  
  function redirect(){
    window.location.replace("index.html");
  }
  
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementsByClassName('js-typewrite')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 65);
    }
  }

  setTimeout(typeWriter, 1000);
