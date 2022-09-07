$(function () {
  let headers = $(".tab-menu .tab-header div");
  let contents = $(".tab-menu .tab-body div");
  for (const header of headers) {
    $(header).click (function () {
        let activeElem = $(".active")
        console.log(activeElem);
        activeElem.removeClass("active");
        $(this).addClass("active");
      for (const content of contents) {
        if ($(this).attr("data-id") == $(content).attr("data-id")) {
          $(content).removeClass("d-none");
        } else {
          $(content).addClass("d-none");
        }
      }
    });
  }
});

let rightIcon = document.querySelector("#slider-area .slider .icons .right i");
let leftIcon = document.querySelector("#slider-area .slider .icons .left i");

setInterval(function () {
    sliderRight();

}, 3000);


rightIcon.addEventListener("click", function () {
    sliderRight();
})


function sliderRight(){
    let activeImg = document.querySelector("#slider-area .slider .img .active");

    if (activeImg.nextElementSibling != null) {
        activeImg.classList.remove("active");
        activeImg.nextElementSibling.classList.add("active");
    } else {
        activeImg.classList.remove("active");
        activeImg.parentNode.firstElementChild.classList.add("active")
    }
}

leftIcon.addEventListener("click", function () {
    let activeImg = document.querySelector("#slider-area .slider .img .active");

    if (activeImg.previousElementSibling != null) {
        activeImg.classList.remove("active");
        activeImg.previousElementSibling.classList.add("active");
    } else {
        activeImg.classList.remove("active");
        activeImg.parentNode.lastElementChild.classList.add("active")
    }


})
