$(document).ready(function (e) {
	$('.mob_main_menu').hide();
	$('.mob_sub_menu').hide();
	$('.menu_icon').click(function () {

		$('.mob_main_menu').slideToggle(500);
		$('.open_icon').toggleClass('fa-times');
		$('.open_icon').toggleClass('fa-bars');

	});
	$('.mob_main_menu>li').click(function () {

		$('.mob_sub_menu').slideToggle(500);
	});

});