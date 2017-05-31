$(".button-collapse").sideNav();

$('.parallax').parallax();

 var options = [
    {selector: '#list-program', offset: 400, callback:function(el) {
      Materialize.fadeInImage($(el));
      Materialize.showStaggeredList($(el));;;
    } },
  ];
  Materialize.scrollFire(options);