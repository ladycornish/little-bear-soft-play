/* new navbar */

const menu = document.querySelector(".nav-list");
const menuWrapper = document.querySelector(".nav-wrapper");
const hamburger = document.querySelector(".nav-toggle");
const closeBtn = document.querySelector(".close");

const showMenu = () => {
  hamburger.style.display = "none";
  closeBtn.style.transform = "translateY(0)";
  menu.style.transform = "translateX(0)";
  menuWrapper.style.transform = "translateX(0)";
};

const hideMenu = () => {
  closeBtn.style.transform = "translateY(-20rem)";
  hamburger.style.display = "block";
  menu.style.transform = "translateX(200%)";
  menuWrapper.style.transform = "translateX(-200%)";
};

hamburger.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);
menuWrapper.addEventListener("click", hideMenu);

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

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

/* Enquiry Form */

document.getElementById('eventForm').addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form values
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const eventDateInput = document.getElementById('eventDate').value;
      const location = document.getElementById('location').value.trim();
      const message = document.getElementById('message').value.trim();

      // Format date as dd/mm/yyyy
      let formattedDate = "Not provided";
      if (eventDateInput) {
        const date = new Date(eventDateInput);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        formattedDate = `${day}/${month}/${year}`;
      }

      // Email subject and body
      const subject = `New Soft Play Enquiry: ${firstName} ${lastName}`;
      
      const body = `Hello,

Please find below details for our soft play enquiry.

Full Name: ${firstName} ${lastName}
Email Address: ${email}
Date of Event: ${formattedDate}
Location: ${location}

Thank you!

${firstName} ${lastName}`;

      // CHANGE THIS TO YOUR EMAIL ADDRESS
      const recipientEmail = 'thelittlebearsoftplaycompany@gmail.com';

      // Create mailto link
      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;

      alert('These details will open in your email, please press send and we will be in touch.');

      // Reset form
      this.reset();
    });

/* End of form */

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
