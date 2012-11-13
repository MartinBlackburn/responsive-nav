ResponsiveNav = function(nav, breakPoint) 
{   
	//varibles
	var width = $(document).width();

	//add nav controls
	var navControl = $("<li class='navControls'/>").prependTo(nav.find("ul").first());
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
    	if(width > breakPoint)
    	{
    		$("navControls").hide();
    	}
    	else {
    		$("navControls").show();
    	}
    }
	
	//open or close nav
    function toggleNav()
    {
    	alert("nav toggle");
    }
};

$(function() 
{
    $(".nav").each(function()
    {
        new ResponsiveNav($(this), 500);
    });
});