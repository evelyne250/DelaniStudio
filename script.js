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
  $("#work1").hover(function(){
    $(this).stop().css({opacity:.3});
    $(this).fadein();
    }, function(){
      $(this).stop().css({opacity:1})
    $(this).fadeout();
  });
});
$(document).ready(function(){
  $("#work2").hover(function(){
    $(this).stop().css({opacity:.3});
    $(this).fadein();
    }, function(){
      $(this).stop().css({opacity:1})
    $(this).fadeout();
  });
});
$(document).ready(function(){
  $("#work3").hover(function(){
    $(this).stop().css({opacity:.3});
    $(this).fadein();
    }, function(){
      $(this).stop().css({opacity:1})
    $(this).fadeout();
  });
});
$(document).ready(function(){
  $("#work4").hover(function(){
    $(this).stop().css({opacity:.3});
    $(this).fadein();
    }, function(){
      $(this).stop().css({opacity:1})
    $(this).fadeout();
  });
});
$(document).ready(function(){
  $("#work5").hover(function(){
    $(this).stop().css({opacity:.3});
    $(this).fadein();
    }, function(){
      $(this).stop().css({opacity:1})
    $(this).fadeout();
  });
});
$(document).ready(function(){
  $("#work6").hover(function(){
    $(this).stop().css({opacity:.3});
    $(this).fadein();
    }, function(){
      $(this).stop().css({opacity:1})
    $(this).fadeout();
  });
});
$(document).ready(function(){
  $("#work7").hover(function(){
    $(this).stop().css({opacity:.3});
    $(this).fadein();
    }, function(){
      $(this).stop().css({opacity:1})
    $(this).fadeout();
  });
});
// 
//     alert("we have received your response,  Thank you for reaching out to us.");
//   
// });
$(document).ready(function(){
$("form").submit(function(){
var nameIs= document.getElementById("user");
var email= document.getElementById("user1");
var comment= document.getElementById("user2");
alert('Hi  ' +  nameIs.value + ' Thank you for reaching out to us.');
});
});