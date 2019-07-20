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
