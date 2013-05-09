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
	var siteWidth = $(document).width();
	var lastSiteWidth = null;
	
	//elements
	var navControl = nav.find(".navControl").first();
	var mainUL = nav.find("ul").first();
	
	//listener for screen width
	$(window).resize(function() {
		siteWidth = $(document).width();
		checkNav();
		lastSiteWidth = siteWidth;
	});
	
	//toggle nav when nav control is clicked
	navControl.on('click', function() {
	    event.preventDefault();
        toggleNav();
    });
	
	//check if to hide or show controls
    checkNav();
	
	//hide or show nav controls depending on size
    function checkNav()
    {
        if(siteWidth != lastSiteWidth)
        {
        	if(siteWidth >= breakPoint)
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
        mainUL.slideToggle();
    }
};