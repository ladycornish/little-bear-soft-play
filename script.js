/* Navbar function */


function navFunction() {
  var x = document.getElementById("myTopnav");
  var icon = document.getElementById("bars");

  if (x.className === "topnav") {
    x.className += " responsive";
    icon.style.display = "none";
  } else {
    x.className = "topnav";
    icon.style.display = "block";
  }

  /* reload page to refresh button */

  setTimeout(() => {
    document.location.reload();
  }, 3000);
}

/* Card Slider - Swiper */
var cardSlider = new Swiper(".card-slider", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Back to top Button */

var myButton = document.getElementById("myBtn");

function scrollFunctionBTT() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
