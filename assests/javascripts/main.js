$(document).ready(function(){
  $("#main-nav a").click(function(){
    $("section").removeClass("show");
    var target = $(this).attr("href");
    $(target).addClass("show");
  })

  $(".type-effect").typed({
    strings :["Software Developer", "Web Developer", "Student"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  })
});
