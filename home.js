
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