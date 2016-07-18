//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$(document).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };

    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
    
    // created functions to be able to fadeout with view details and fade in with hide details showing in the button.
    $('.view-details').on('click', function(event){
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
    
    //login click to hide login and show name
    $('#login-form .btn').on('click', function(event){
        var $loginForm = $('#login-form'),
            $userInfoContainer = $('#navbar .user-info'),
            $nameContainer = $userInfoContainer.find('.user-fullname');
        
        //hide login form      
        $loginForm.hide();
        $userInfoContainer.show();
        $nameContainer.text(userInfo.firstName + ' ' + userInfo.lastName);
    });
    
    $('.voting .vote').click(function(event){
        var clickedButton = event.target;
        var voteOption = $(clickedButton).attr('data-vote');
      
        //update great/greatest/total counters
        if (voteOption == 'great'){
            voteCounts.great++;
        }
        if (voteOption == 'greatest'){
            voteCounts.greatest++;
        }
        voteCounts.total = voteCounts.greatest + voteCounts.great;
                
        //calculate percentages
        var percentGreat = (voteCounts.great / voteCounts.total) * 100;
        var percentGreatest = (voteCounts.greatest / voteCounts.total) * 100;
        
        //update progress bars 
        var $greatProgress = $('.progress .great-progress');
        var $greatestProgress = $('.progress .greatest-progress');
    
        $greatProgress.width(percentGreat + '%');
        $greatestProgress.width(percentGreatest + '%');
        
    });
     
          
    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.



    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
    //      2. When a button is clicked, look at the `data-vote` attribute to determine
    //          what the user is voting for ("great" or "greatest").
    //      3. Increment the counter for whichever vote talley is affected.
    //      4. Determine the respective percentages (out of 100) for each progress bar.
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.

});
