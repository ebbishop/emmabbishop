emma.directive('navbar', function() {
  return {
    templateUrl: '/directives/navbar/navbar.template.html',
    restrict: 'E',
    link:   function() {
      $('a').on('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
    }
  };
});