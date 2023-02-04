  let radio1=document.querySelector('.radio1');
  let radio2=document.querySelector('.radio2');
  let radio3=document.querySelector('.radio3');
  let radio4=document.querySelector('.radio4');
  let radio5=document.querySelector('.radio5');
  let radio6=document.querySelector('.radio6');
  let radio7=document.querySelector('.radio7');
  let radio8=document.querySelector('.radio8');
  let radio9=document.querySelector('.radio9');
function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle("active");
}
if(radio1.checked==true){
    counter=1;
  }
   if (radio2.checked == true) {
     counter = 2;
   }
    if (radio3.checked == true) {
      counter = 3;
    }
     if (radio4.checked == true) {
       counter = 4;
     }
      if (radio5.checked == true) {
        counter = 5;
      } if (radio6.checked == true) {
         counter = 6;
       } if (radio7.checked == true) {
          counter = 7;
        } if (radio8.checked == true) {
           counter = 8;
         } if (radio9.checked == true) {
            counter = 9;
          }
let counter = 0;
setInterval(function () {
  counter++;
  if (counter == 10) {
    counter = 1;
    document.getElementById("radif").scrollLeft += 640;
  } else {
    document.getElementById("radif").scrollLeft -= 80;
  }
  if (counter == 1) {
    document.getElementById("radif").scrollLeft = 0;
  }
  //   document.getElementById("radif").scrollLeft = counter * 80-80;
  document.querySelector(".radio" + counter).checked = true;
if(radio1.checked==true){
    counter=1;
  }
   if (radio2.checked == true) {
     counter = 2;
   }
    if (radio3.checked == true) {
      counter = 3;
    }
     if (radio4.checked == true) {
       counter = 4;
     }
      if (radio5.checked == true) {
        counter = 5;
      } if (radio6.checked == true) {
         counter = 6;
       } if (radio7.checked == true) {
          counter = 7;
        } if (radio8.checked == true) {
           counter = 8;
         } if (radio9.checked == true) {
            counter = 9;
          }
}, 6000);
