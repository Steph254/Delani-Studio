$(document).ready(function() {
  $(".offer").click(function() {
    $("#des").toggle();
    $("#ign").toggle();
  });
});
$(".prise").click(function() {
  $("#dev").toggle();
  $("#ment").toggle();
});
$(".manage").click(function() {
  $("#uct").toggle();
  $("#prod").toggle();
});

$(document).ready(function() {
  $("#work4").mouseover(function() {
    $(".title1").show();
  }).mouseout(function() {
    $(".title1").hide();
  });
});
$(document).ready(function() {
  $("#work3").mouseover(function() {
    $(".title2").show();
  }).mouseout(function() {
    $(".title2").hide();
  });
});
$(document).ready(function() {
  $("#work2").mouseover(function() {
    $(".title3").show();
  }).mouseout(function() {
    $(".title3").hide();
  });
});
$(document).ready(function() {
  $("#work1").mouseover(function() {
    $(".title4").show();
  }).mouseout(function() {
    $(".title4").hide();
  });
});
$(document).ready(function() {
  $("#work5").mouseover(function() {
    $(".title5").show();
  }).mouseout(function() {
    $(".title5").hide();
  });
});
$(document).ready(function() {
  $("#work6").mouseover(function() {
    $(".title6").show();
  }).mouseout(function() {
    $(".title6").hide();
  });
});
$(document).ready(function() {
  $("#work7").mouseover(function() {
    $(".title7").show();
  }).mouseout(function() {
    $(".title7").hide();
  });
});
$(document).ready(function() {
  $("#work8").mouseover(function() {
    $(".title8").show();
  }).mouseout(function() {
    $(".title8").hide();
  });
});






// user interface
function infoDetails(name, email) {
  var form = document.forms["info"]
  var name = form["fname"].value;
  var email = form["email"].value;
  alert(name + "." + "We have received your message" + " ." + "Thank you for reaching out to us")
}
