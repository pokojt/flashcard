$(function() {
  $("h3").click(function() {
    $(this).next().toggle();
    $(this).toggle(".definition");
  });
});


$(function() {
  $(".definition").click(function() {
    $(this).hide();
    $("h3").show();
  });
});






/*
$(function() {
  $("#flash").mouseenter(function() {
    $(".definiton").toggle();
    $("h3").toggle();
  });
});

term
this.next.slidetoggle


$(function() {
  $(".change").mouseEnter(function() {
  $(this).next().slideToggle;
  });
}); */
