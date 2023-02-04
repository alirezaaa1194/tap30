function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle("active");
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
}, 6000);
