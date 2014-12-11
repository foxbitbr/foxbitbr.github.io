function estatisticas(){
		var statisticas ='';
		$.ajax({
			url: 'https://api.testnet.blinktrade.com/api/v1/BRL/ticker',
			dataType: 'jsonp',
			data: {crypto_currency: 'BTC'},
			async: false
		})
		.done(function(statisticas) {
			$('.last').html(statisticas['last']);
			$('.high').html(statisticas['high']);
			$('.low').html(statisticas['low']);
			$('.vol').html(statisticas['vol']);
			$('.preco-btc b').html(statisticas['buy'])
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		

	}

$(function(){
	// carrega e atualiza estatisticas
	estatisticas();
	setInterval( function(){ estatisticas() }, 4000);	

	// modal do login
	$('.login-btn').click(function() {
		$('.login-form').css('display','table').addClass('animated fadeInUp').removeClass('fadeOutDown');
	});

	$('.login-form .back').click(function(event) {
		$('.login-form').removeClass('fadeInUp').addClass('fadeOutDown');
	});


	//popover
	$('[data-toggle="popover"]').popover();

	//tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// remove video
	if ( $(window).width() < 780){
		$('video').remove();
		$('section').css({
			background: 'url(img/bg1.jpg) no-repeat center',
			'background-size': 'cover'
		});;
	}

})

//menu
function showMenu(){
	$('nav.menu a[hide]').show().addClass('animated fadeInDown');
	$(this).addClass('ativo')
}