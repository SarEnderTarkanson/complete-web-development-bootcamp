// for (var i = 0; i < 5, i++; ) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// $("button").click(function () {
//   $("h1").css("color", "purple");
// });

// $(document).keydown(function (event) {
//   $("h1").text(event.key);
// });

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "purple")
// })

// $("h1").before("<button>New</button>")

// $("button").remove()

// $("button").click(function () {
//   $("h1").hide();
// });

// $("button").click(function () {
//   $("h1").show();
// });

// $("button").click(function () {
//   $("h1").toggle();
// });

// $("button").on("click",function () {
//   $("h1").fadeToggle();
// });

// $("button").on("click",function () {
//   $("h1").slideToggle();
// });

// $("button").on("click",function () {
//   $("h1").animate({opacity:0.5});
// });

$("button").on("click",function () {
  $("h1").slideUp().slideDown().animate({opacity:0.5});
});