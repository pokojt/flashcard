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

$(function() {
  $(".list-group-item").flip();
});
