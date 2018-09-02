// 아파치 얼굴 취득
var layout = $("#kimLayout")

// 아파치 얼굴을 클릭
layout.click(function(ev) {
  //로그인, 인스타그램, FAQ에 직접 갈수 있는 위젯 생성
  $("#kimLogin").toggleClass("widget-move1", 100, "linear");
  $("#kimInstagram").toggleClass("widget-move2", 100, "linear");
  $("#kimFaq").toggleClass("widget-move3", 100, "linear");
  $(".kimLayout .widget a ")
  .toggleClass("widgetLinkOn", 100, "linear")
  .css("display", "");
});

//아파치는 언제든지 드래그가 가능함.
layout.draggable();
