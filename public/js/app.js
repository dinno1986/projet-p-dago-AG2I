$(".button-collapse").sideNav();

$('.parallax').parallax();

 var options = [
    {selector: '#list-program', offset: 400, callback:function(el) {
      Materialize.fadeInImage($(el));
      Materialize.showStaggeredList($(el));;;
    } },
  ];
  Materialize.scrollFire(options);

$('#fullpage').fullpage({
	menu:"#menu",

	anchors:['AG2I', 'ORDI3', 'ECOTEMPO', 'LOGO'],
	

	fixedElements: '.page-footer',
	paddingTop: '3em',
	paddingBottom: '10px',

});
