// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop + 200;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
 


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top 
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
           $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }; 
        });
      }
    }
  });

$(document).ready(function(){
    $('.testimonial-slider').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $(".projects-slider").slick({
        slidesToShow:4,
        slidesToScroll: 4,
        autoplay: false,
        prevArrow: ` <button id="left-arrow">
        <img src="images/next.png">
    </button>`,
        nextArrow: `<button id="right-arrow">
        <img src="images/next.png">
    </button>`,
        dots: true,

    })

    $('.skills-slider').slick({
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        centerPadding: ($('.skills-slider').find('>div').outerWidth() / 2) + 'px',
        slidesToShow: 1,
        loop:true,
        variableWidth: true,
        dots:true
    });


    
});

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }




function contactFormSubmit(){

    toastr.remove();

    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("message").value;
    var error = false;
  
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (name == "" || subject == "" || email == "" || msg == "") {
      toastr["error"]("Please fill all fields!");
      error = true;
  
    }
    if (name.length < 3) {
      toastr["error"]("Name length should be greater or equal to 3!");
      error = true;
  
    }
  
    if (!regex.test(email)) {
      error = true;
      toastr["error"]("Enter a valid email!");
    }
   
}