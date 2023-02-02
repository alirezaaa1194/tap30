function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
}
let counter=0;
setInterval(function(){
    counter++
if(counter==10){
    counter=1;
}
document.querySelector('.radio'+counter).checked=true;
},6000)