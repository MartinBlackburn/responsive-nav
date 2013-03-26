#Responsive Navigation

A navigation, with dropdowns, that turns to a collapsible dropdown on a small screen.

##Usage instructions

1. Add the jQuery Library:
```html
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
```

2. Add the JS and CSS, EG:
```html
    <!-- Put these into the <head> -->
    <script src="js/navigation.js"></script>
    <link rel="stylesheet" href="css/styles.css">
```

3. Add markup:
```html
    <div class="nav">
        <ul>
            <li class="active"><a href="#">Link</a>
            <li>
                <a href="">Link <span>&#9662;</span></a>
                    <ul class="dropDown">
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
            $(".nav").each(function()
            {
                new ResponsiveNav($(this), 500);
            });
        });
    </script>
```

[View it in action here](http://martinblackburn.github.com/responsive-nav/)