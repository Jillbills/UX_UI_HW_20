// STICKY HEADER feature - shows hero img first, then scroll to stick header.
window.onscroll = function() {myFunction()};
    
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};






// HERO animation effects. 1 Hero default state > 2 Logo shifts from top left to top center of hero frame
//    > 3  Hero Copy #heroCopy drops down over top left frame as a overlay 
//    > 4  Final hero state is shown


// ANIMATE logo on hero image v1 - Works somewhat
// $(document).ready(function() {
//     $(".heroLogo").addClass("animate"); 
// });


// ANIMATE logo on hero image v2 from W3schools example - Doesn't work at all yet
// $(document).ready(function() {
//     $("#animateLogo").animate({left: '250px'}); 
// });



// ANIMATE hero - drop in copy over hero image v1 - Works somewhat
// $(document).ready(function() {
//     $(".heroCopy").addClass("animate");
// });





// BACK TO TOP BUTTON 

//Get the button:
mybutton = document.getElementById("bttBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





// MODAL when  you click Submit button in the CONNECT section of my homepage 
// Get the modal 
var modal = document.getElementById("modalConnect");

// Get the button that opens the modal
var btn = document.getElementById("connectButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
// This original code works to open the modal but modal also opens everytime page is refreshed ???
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


