document.addEventListener("DOMContentLoaded", function() {
    // Define the URL mappings
    var urlMappings = {
        "https://www.canada.ca/en/services/taxes.html": "https://test.canada.ca/gc-top-tasks/direct-deposit/taxes.html",
        "https://www.canada.ca/en/services/benefits.html": "https://test.canada.ca/gc-top-tasks/direct-deposit/benefits.html",
        "https://www.canada.ca/en/services/finance.html": "https://test.canada.ca/gc-top-tasks/direct-deposit/finance.html",
        "https://www.canada.ca/en/public-services-procurement/services/payments-to-from-government/direct-deposit.html": "https://test.canada.ca/gc-top-tasks/direct-deposit/direct-deposit.html",
        "https://www.canada.ca/en.html": "https://test.canada.ca/gc-top-tasks/direct-deposit/home.html",
        "https://www.canada.ca/en/sr/srb.html": "#",
        "https://www.canada.ca/en/sr/srb.html?q=&wb-srch-sub=": "#",

    };

    // Function to update URLs
    function updateURLs() {
        var links = document.querySelectorAll("a");
        links.forEach(function(link) {
            var currentHref = link.href;
            if (urlMappings[currentHref]) {
                link.href = urlMappings[currentHref];
                console.log(`Replaced ${currentHref} with ${urlMappings[currentHref]}`);
            }
        });
    }

    // Initially update any URLs present at load
    updateURLs();

    // Observer to monitor changes in the document
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        if (node.matches("a") || node.querySelector("a")) {
                            updateURLs(); // Call updateURLs function if a new <a> tag is added
                        }
                    }
                });
            }
        });
    });

    // Observer options - observe changes in child elements
    var config = { childList: true, subtree: true };
    observer.observe(document.body, config);
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to modify form action and prevent submission
    function modifyFormAction(formSelector) {
        var form = document.querySelector(formSelector);
        if (form) {
            form.action = "";  // Set action to empty string
            form.onsubmit = function() { return false; };  // Prevent submission
        }
    }

    // Modify the first form
    modifyFormAction('form[action="https://www.canada.ca/en/sr/srb.html"]');
    
    // Modify the second form - with URL escaping
    modifyFormAction('form[action="https://www.canada.ca/en/revenue-agency/search.html"]');
});