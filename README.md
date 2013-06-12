#Responsive Navigation

A navigation, with dropdowns, that turns to a collapsible dropdown on a small screen.

The navigation will also move some items to a dropdown when they don't fit onto the nav, and move them back again when they do.

Feel free to use this in any of your own projects (commercial or not), just be kind and link back here, or my site :)

##Usage instructions

1. Add the jQuery Library:
```html
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
```

2. Add the JS and CSS:
```html
    <!-- Put these into the <head> -->
    <script src="js/navigation.js"></script>
    <link rel="stylesheet" href="css/styles.css">
```

3. Add markup:
```html
    <div class="nav">
        <div class="navControl">
            <a href="#">Navigation</a>
        </div>
            
        <ul>
            <li><a href="#">Link</a>
            <li>
                <a href="">Link <span>&#9662;</span></a>
                    <ul class="dropdown">
                        <li><a href="">Sub link</a>
                        <li><a href="">Sub link</a>
                        <li><a href="">Long long sub link</a>
                        <li><a href="">Sub link</a>
                        <li><a href="">Sub link</a>
                    </ul>
            <li><a href="#">Link</a>
            <li><a href="#">Link</a>
        </ul>
    </div>
```

4. Setup the nav:
```html
    <!-- Put this right before the </body> closing tag -->
    <script>
        $(function() 
        {
            //for each .nav create a responsive version
            $(".nav").each(function()
            {
                //pass the nav element and set the break point.
                new ResponsiveNav($(this), 500);
            });
        });
    </script>
```

[View it in action here](http://martinblackburn.github.com/responsive-nav/)
