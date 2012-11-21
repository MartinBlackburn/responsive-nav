ResponsiveNav = function(nav) 
{   
	//varibles
    var breakPoint = 500;
	var width = $(document).width();
	
	//add open class to nav
	nav.addClass("open");
	
	//add nav controls
	var navControl = $("<div class='navControl'/>").prependTo(nav);
    var navControlLink = $('<a/>', {
        "text": "Navigation",
        click: function() {
            toggleNav();
        }
    }).prependTo(navControl);
    
    //check if to hide or show controls
 	checkNav();
	
	//listener for screen width
	$(window).resize(function() {
		width = $(document).width();
		checkNav();
	});
	
	//hide or show nav controls depending on breakpoint
    function checkNav()
    {
    	if(width >= breakPoint)
    	{
    	    navControl.hide();
    	    
    	    //if nav is hidden, open it
    	    if(!nav.hasClass("open"))
    	    {
    	        nav.find("ul").first().css("display", "block");
    	        nav.addClass("open");
    	    }
    	}
    	else {
    	    navControl.show();
    	    
    	    //if nav is show, hide it
            if(nav.hasClass("open"))
            {
                nav.find("ul").first().css("display", "none");
                nav.removeClass("open");
            }
    	}
    }
	
	//open or close nav
    function toggleNav()
    {
        //toggle open class
        nav.toggleClass("open");
        
        //open or close nav
        nav.find("ul").first().slideToggle();
    }
};

$(function() 
{
    $(".nav").each(function()
    {
        new ResponsiveNav($(this));
    });
});