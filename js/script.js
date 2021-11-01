//Implementation of Google map
// Initialize and add the map
function initMap() {
    // The location of Cairo
    var kenitra = {lat: 34.267471, lng: -6.562630};
    // The map, centered at Cairo
    var map = new google.maps.Map(
        document.querySelector("#map"), {zoom: 4, center: kenitra});
    // The marker, positioned at Cairo
    var marker = new google.maps.Marker({position: kenitra, map: map});
  }
  
  
  // Smooth scrolling
  $("#navbar a, .btn").on("click", function(event) {
  
    if(this.hash !== "") {
      event.preventDefault();
  
      const hash = this.hash;
  
      $("html, body").animate({scrollTop: $(hash).offset().top - 100}, 800);
    }
  });
  
  
  // navbar Opacity
  
  window.addEventListener("scroll", function() {
    if(window.scrollY > 150) {
      document.querySelector("#navbar").style.opacity = 0.9;
    } else {
      document.querySelector("#navbar").style.opacity = 1;
    }
  });