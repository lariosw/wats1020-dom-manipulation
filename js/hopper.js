/*$('.view-details').on('click', function(event){
    console.log(event);
    var targetElement = event.target;
    var container = targetElement.parentElement.parentElement;
    $(container).find('.details').each(function(index,el){
        if ($(el).is(':visible')){
            $(el).fadeOut();
            targetElement.innerText = "View Details"    
        } 
        else {
            $(el).fadeIn();
            targetElement.innerText = "Hide Details"
        }
    });
});
*/