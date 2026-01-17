(function() {
    var targetUrl = "https://example.com";
    var elementId = "fms-copyright";
    
    function checkFooter() {
        var el = document.getElementById(elementId);
        
        // Condition 1: Check if element exists
        if (!el) {
            window.location.href = targetUrl;
            return;
        }
        
        // Condition 2: Check if element is visible
        // We check the computed style to see if it is hidden or invisible
        var style = window.getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden') {
            window.location.href = targetUrl;
            return;
        }
        
        // Optional: Check if the link inside is correct
        // This prevents users from keeping the ID but changing the link URL
        var link = el.querySelector('a');
        if (!link || link.href !== targetUrl) {
            window.location.href = targetUrl;
        }
    }

    // Run the check when the window loads
    window.onload = function() {
        checkFooter();
        
        // Optional: Run the check periodically (e.g., every 2 seconds)
        // This catches changes made via Developer Tools after the page loads
        setInterval(checkFooter, 2000); 
    };
})();
</script><script type="text/javascript">
(function() {
    var targetUrl = "https://fms365.blogspot.com/";
    var elementId = "fms-copyright";
    
    function checkFooter() {
        var el = document.getElementById(elementId);
        
        // Condition 1: Check if element exists
        if (!el) {
            window.location.href = targetUrl;
            return;
        }
        
        // Condition 2: Check if element is visible
        // We check the computed style to see if it is hidden or invisible
        var style = window.getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden') {
            window.location.href = targetUrl;
            return;
        }
        
        // Optional: Check if the link inside is correct
        // This prevents users from keeping the ID but changing the link URL
        var link = el.querySelector('a');
        if (!link || link.href !== targetUrl) {
            window.location.href = targetUrl;
        }
    }

    // Run the check when the window loads
    window.onload = function() {
        checkFooter();
        
        // Optional: Run the check periodically (e.g., every 2 seconds)
        // This catches changes made via Developer Tools after the page loads
        setInterval(checkFooter, 2000); 
    };
})();
