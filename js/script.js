$(document).ready(function() {
  $(".offer").click(function() {
    $("#des").toggle();
    $("#ign").toggle();
  });

  $(".prise").click(function() {
    $("#dev").toggle();
    $("#ment").toggle();
  });
  $(".manage").click(function() {
    $("#uct").toggle();
    $("#prod").toggle();
  });
  $(".work").mouseover(function() {
    $(this).find('.title').show();
  }).mouseout(function() {
    $(this).find('.title').hide();
  });
});






// user interface
function infoDetails() {
  var form = document.forms["info"]
  var name = form["fname"].value;
  var email = form["email"].value;
  alert(name + "." + "We have received your message" + " ." + "Thank you for reaching out to us")
}
