//カーソル！！！！

//idの付与
var body = document.body;
var cursor = document.createElement("div");
var stalker = document.createElement("div");
cursor.id = "cursor";
stalker.id = "stalker";
body.appendChild(cursor);
body.appendChild(stalker);


//マウスポインターの位置の取得
body.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    stalker.style.left = e.clientX + "px";
    stalker.style.top = e.clientY + "px";
  }, false);


//a要素にhover時、activeのクラスを付与
  $("a").on("mouseenter", function() {
    $('#cursor').addClass("active");
    $('#stalker').addClass("active");
});
 
$("a").on("mouseleave", function() {
    $('#cursor').removeClass("active");
    $('#stalker').removeClass("active");
});