$.fn.tabPlugin = function (options) {
    
    // Vars
    var param = $.extend({
        'speed': 400,
        'transition': 'ease',
        'dataSelector': 'data-tab'
    }, options); 

var $selector = this;

    //Controllers

    function tabController(target) {
        $('.tab-container .tab').removeClass('active');
        $(this).addClass('active');
        $('.tab-container .content').removeClass('active');
        $('.tab-container .content' + target).addClass('active');
    }

    // Init

    $selector.find('.content').css('transition', 'all ' + param.speed + 'ms ' + param.transition); 

    // Actions 

    $selector.find('[' + param.dataSelector + ']').click(function () {
        var target = $(this).attr(param.dataSelector); 
        tabController(target);
    });
}



