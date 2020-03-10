$(document).ready(function(){
    
    $('.js--wp-1').waypoint(function(direction){
            $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }