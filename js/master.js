$("#menu").click(
  function(){
    $(".menu-items").fadeIn();
    $("body").css("overflow","hidden");
  }
);
$("#x-menu").click(
  function(){
    $(".menu-items").fadeOut();
    $("body").css("overflow","auto");
  }
);

var hair1 = 0;
$("#hair-1-l, #hair-1-r").click(
  function(){
    if (hair1 == 0) {
      $(".hair-1").css("width","15px");
      $(".hair-1").css("height","15px");
      $("#hair-1-v2").css("width","20px");
      $("#hair-1-v2").css("height","20px");
      $("#hair1 img").attr("src", "img/hair/hair-1-2.jpg");
      hair1 = 1;
    }else if (hair1 == 1) {
      $("#hair-1-v2").css("width","15px");
      $("#hair-1-v2").css("height","15px");
      $("#hair-1-v1").css("width","20px");
      $("#hair-1-v1").css("height","20px");
      $("#hair1 img").attr("src", "img/hair/hair-1-1.jpg");
      hair1 = 0;
    }
    else {
      hair1 = 0;
    }
  }
);
var hair2 = 0;
$("#hair-2-l, #hair-2-r").click(
  function(){
    if (hair2 == 0) {
      $("#hair-2-v1").css("width","15px");
      $("#hair-2-v1").css("height","15px");
      $("#hair-2-v2").css("width","20px");
      $("#hair-2-v2").css("height","20px");
      $("#hair2 img").attr("src", "img/hair/hair-2-2.jpg");
      hair2 = 1;
    }else if (hair2 == 1) {
      $("#hair-2-v2").css("width","15px");
      $("#hair-2-v2").css("height","15px");
      $("#hair-2-v1").css("width","20px");
      $("#hair-2-v1").css("height","20px");
      $("#hair2 img").attr("src", "img/hair/hair-2-1.jpg");
      hair2 = 0;
    }
    else {
      hair2 = 0;
    }
  }
);

$(".payment a").click(
  function(){
    $(".payment a").hide();
    $(".enlarge form").slideDown();
  }
);
$(".enlarge .fa-remove").click(
  function(){
    $(".enlarge").hide();
  }
);

$("#hair1 .prod-name").click(
  function(){
    $("#hair1-enlarge").fadeIn();
  }
);
