emma.directive('navbar', function() {
  return {
    templateUrl: '/directives/navbar/navbar.template.html',
    restrict: 'E',
    controller: 'NavCtrl',
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

// emma.directive('clickScroll', function(){
//   return {
//     restrict: 'A',
//     link: function(scope, el, attrs){
//       var scrollTo = attrs.href;
//       el.on('click', function(ev){
//         var $target;
//         if (scrollTo) {
//           $target = $(scrollTo);
//         } else {
//           $target = el;
//         }
//         console.log('clicked!', $target)
//         $('html', 'body').animate({
//           scrollTop: $target.offset().top
//         });
//         ev.preventDefault();
//         console.log('prevented default');
//       });
//     }
//   }
// });