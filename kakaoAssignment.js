var layout = $("#kimLayout")

layout.click(function(ev) {
  $("#kimLogin").toggleClass("widget-move1", 100, "linear");
  $("#kimInstagram").toggleClass("widget-move2", 100, "linear");
  $("#kimFaq").toggleClass("widget-move3", 100, "linear");
  $(".kimLayout .widget a ")
  .toggleClass("widgetLinkOn", 100, "linear")
  .css("display", "");
});

layout.draggable();
