$(document).ready(function() {
    $(".design, .call").click(function() {
      $("#design").toggle();
      $(".call").toggle();
    });
  });
  $(document).ready(function() {
    $(".develop, .call1").click(function() {
        $("#develop").toggle();
      $(".call1").toggle();
    });
  });
  $(document).ready(function() {
    $(".product, .call2").click(function() {
        $("#product").toggle();
      $(".call2").toggle();
    });
  });
// $(.work).hide();
// $(#work).animate({
//   opacity:1
// })
//   $(document).hover(function() {
//     $(this).stop().animate({opacity:.4},200);
//     $('.work').fadein();
//   }, function(){
//     $(this).stop().animate({opacity:1},500)
//     $('.work').fadeout();
//   });

// $(document).ready(function() {
// $("#work").hover(function()
// // css("background-color", "grey", "background-size", "cover");
// //   }, function(){
//   $(this).css("background-color", "pink");
// }, function(){
//   $(this).css("background-color", "pink");
// });
// });

$(document).ready(function(){
  $(".wor").hide();
  $("#work").css({
   opacity:1
 });
  $("#wo").hover(function(){
    $(this).stop().css({opacity:.4});
    $(".wor").fadeIn();
    }, function(){
      $(this).stop().css({opacity:1})
    $(".wor").fadeOut();
  });
});
$(document).ready(function(){
  $(".wor1").hide();
  $("#work1").css({
   opacity:1
 });
  $("#wo1").hover(function(){
    $(this).stop().css({opacity:.4});
    $(".wor1").fadeIn();
    }, function(){
      $(this).stop().css({opacity:1})
    $(".wor1").fadeOut();
  });
});

$(document).ready(function(){
  $(".wor2").hide();
  $("#work2").css({
   opacity:1
 });
  $("#wo2").hover(function(){
    $(this).stop().css({opacity:.4});
    $(".wor2").fadeIn();
    }, function(){
      $(this).stop().css({opacity:1})
    $(".wor2").fadeOut();
  });
});
$(document).ready(function(){
  $(".wor3").hide();
  $("#work3").css({
   opacity:1
 });
  $("#wo3").hover(function(){
    $(this).stop().css({opacity:.4});
    $(".wor3").fadeIn();
    }, function(){
      $(this).stop().css({opacity:1})
    $(".wor3").fadeOut();
  });
});
$(document).ready(function(){
  $(".wor4").hide();
  $("#work4").css({
   opacity:1
 });
  $("#wo4").hover(function(){
    $(this).stop().css({opacity:.4});
    $(".wor4").fadeIn();
    }, function(){
      $(this).stop().css({opacity:1})
    $(".wor4").fadeOut();
  });
});
$(document).ready(function(){
  $(".wor5").hide();
  $("#work5").css({
   opacity:1
 });
  $("#wo5").hover(function(){
    $(this).stop().css({opacity:.4});
    $(".wor5").fadeIn();
    }, function(){
      $(this).stop().css({opacity:1})
    $(".wor5").fadeOut();
  });
});
$(document).ready(function(){
  $(".wor6").hide();
  $("#work6").css({
   opacity:1
 });
  $("#wo6").hover(function(){
    $(this).stop().css({opacity:.4});
    $(".wor6").fadeIn();
    }, function(){
      $(this).stop().css({opacity:1})
    $(".wor6").fadeOut();
  });
});
$(document).ready(function(){
  $(".wor7").hide();
  $("#work7").css({
   opacity:1
 });
  $("#wo7").hover(function(){
    $(this).stop().css({opacity:.4});
    $(".wor7").fadeIn();
    }, function(){
      $(this).stop().css({opacity:1})
    $(".wor7").fadeOut();
  });
});


//     alert("we have received your response,  Thank you for reaching out to us.");
  
// });
// $(document).ready(function(){
// $("form").submit(function(){
// var nameIs= document.getElementById("user");
// var email= document.getElementById("user1");
// var comment= document.getElementById("user2");
// alert('Hi  ' +  nameIs.value + ' Thank you for reaching out to us.');
// });
// });
$(document).ready(function(){
  $("form").submit(function (event) {
var inputName = $("#user").val();
var inputEmail = $("#user1").val();
var x = $("#user2").val();
if (inputName == "" || inputEmail == "" || x == "") {
  alert("invalid input");
}
else {
  alert('Hi  ' +  inputName + ' Thank you for reaching out to us.');
}
event.preventDefault();
});
});
