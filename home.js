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
		_header = $('.header-text1, .header-text2'),
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
