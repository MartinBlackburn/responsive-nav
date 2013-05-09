ResponsiveNav = function(nav, breakPoint) 
{   
    //if no nav container, output an error
    if(typeof nav === "undefined")
    {  
        console.log("The nav container needs setting.");
        return false;
    }
    
	//variables
    var breakPoint = (typeof breakPoint != "number") ? 500 : breakPoint;
	var width = $(document).width();
	var lastWidth = null;
	
	//elements
	var navControl = nav.find(".navControl").first();
	var mainUL = nav.find("ul").first();
	
	//listener for screen width
	$(window).resize(function() {
		width = $(document).width();
		checkNav();
		lastWidth = width;
	});
	
	//toggle nav when nav controls are clicked
	navControl.on('click', function() {
	    event.preventDefault();
        toggleNav();
    });
	
	//check if to hide or show controls
    checkNav();
	
	//hide or show nav controls depending on breakpoint
    function checkNav()
    {
        if(width != lastWidth)
        {
        	if(width >= breakPoint)
        	{
        	    navControl.hide();
        	    mainUL.show();
        	}
        	else {
        	    navControl.show();
        	    mainUL.hide();
        	}
        }
    }
	
	//open or close nav
    function toggleNav()
    {        
        //open or close nav
        mainUL.slideToggle();
    }
};