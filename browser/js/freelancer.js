/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        // $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        // $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function(){
    $('.experience-title').on('click', function(ev){
        var $icon = $(this).find('i');
        if($icon.hasClass('fa-chevron-down')){
            $icon.addClass('fa-chevron-up').removeClass('fa-chevron-down');
            $(this).next().addClass('show success');
        } else {
            $icon.addClass('fa-chevron-down').removeClass('fa-chevron-up');
            $(this).next().removeClass('show success');
        }
    })
})

$(function(){
    $('.portfolio-main').on('click', function(ev){
        var isExpanded = $(this).hasClass('more');
        var $icon = $(this).find('i');
        var $info = $(this).next();
        console.log('clicked!', isExpanded, 'this', $(this), 'ev', ev);
        console.log('icon', $icon, 'info', $info);
        if(ev.toElement)
        if(isExpanded){
            $(this).removeClass('more');
            $icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
            $info.removeClass('show');
        } else {
            $(this).addClass('more');
            $icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
            $info.addClass('show');
        }
    })
})