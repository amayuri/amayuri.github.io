/*ヘッダー*/

$(function(){
    var _window = $(window),
        _header = $('.header-menu'),
        heroBottom;
    
    _window.on('scroll',function(){
        heroBottom = $('.top-page').height();
        if(_window.scrollTop() > heroBottom){
            _header.addClass('transform');   
        }
        else{
            _header.removeClass('transform');   
        }
    });
    
    _window.trigger('scroll');  
});




$(function(){
    var _window = $(window),
        _header = $('.header-menu a'),
        heroBottom;
    
    _window.on('scroll',function(){
        heroBottom = $('.top-page').height();
        if(_window.scrollTop() > heroBottom){
            _header.addClass('transform');   
        }
        else{
            _header.removeClass('transform');   
        }
    });
    
    _window.trigger('scroll');  
});








/*スライドショー　前後ボタン*/

var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});





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


//トップテキストふわっと
$(function(){
    $(window).scroll(function (){
        $('.top-page-text').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 1){
                $(this).addClass('scrollin');
            }
        });
    });
});