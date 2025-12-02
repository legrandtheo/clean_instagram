// ==UserScript==
// @name         Clean Instagram
// @match        https://www.instagram.com/*
// @run-at       document-start
// ==/UserScript==

var style = document.createElement('style');
style.innerHTML = `
  /* Hides the Reels Tab at bottom */
  a[href*="/reels/"] { display: none !important; }

  /* Hides the Explore Tab at bottom */
  /* Hides the Reels Icon generally */
  svg[aria-label="Reels"] { display: none !important; }
`;
document.head.appendChild(style);
(function() {
    'use strict';

    var style = document.createElement('style');
    style.innerHTML = `
      /* 1. GLOBAL BLOCKS (Always active) */
      
      /* Hide Reels Tab at bottom */
      a[href*="/reels/"] { display: none !important; }
      
      /* Hide Stories Tray */
      div[role="presentation"] ul li { display: none !important; }
      
      /* 2. EXPLORE PAGE SPECIFIC BLOCKS (Only active when class is added) */
      
      /* When we are on Explore, hide all Post links (the grid images) */
      html.on-explore-page main a[href^="/p/"], 
      html.on-explore-page main a[href^="/reel/"] { 
          display: none !important; 
          opacity: 0 !important;
          visibility: hidden !important;
      }
      
      /* Hide the loading spinner on Explore so it looks clean */
      html.on-explore-page svg[aria-label="Loading..."] {
          display: none !important;
      }
    `;
    document.head.appendChild(style);


    // This runs extremely fast to tag the page before content renders
    
    function checkUrl() {
        // If the URL is EXACTLY /explore/ (and not a search result like /explore/tags/...)
        if (window.location.pathname === '/explore/') {
            document.documentElement.classList.add('on-explore-page');
        } else {
            // If we move to a search result or profile, remove the blindfold immediately
            document.documentElement.classList.remove('on-explore-page');
        }
    }

    // Run this check constantly
    // Using simple Interval is more robust than History API for Instagram's React app
    setInterval(checkUrl, 100); 
    
    // Run once on load just in case
    checkUrl();

})();
(function() {
    'use strict';

    // CONFIGURATION:
    // How many "screens" worth of scrolling do you want?
    // 5000 pixels is roughly 5-8 posts depending on size.
    const MAX_SCROLL_HEIGHT = 5000; 

    // Create the "Stop" banner
    const stopBanner = document.createElement('div');
    stopBanner.innerHTML = `
        <div style="
            position: fixed; 
            bottom: 0; 
            left: 0; 
            width: 100%; 
            height: 100px; 
            background: #ff3b30; 
            color: white; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-weight: bold; 
            font-size: 20px; 
            z-index: 9999;
            text-align: center;
        ">
            🛑 ENOUGH FOR TODAY <br> GO DO SOMETHING ELSE
        </div>
    `;
    stopBanner.style.display = 'none'; // Hidden by default
    document.body.appendChild(stopBanner);

    let hasStopped = false;

    window.addEventListener('scroll', function() {
        if (!hasStopped && window.scrollY > MAX_SCROLL_HEIGHT) {
            
            // 1. Show the red banner
            stopBanner.style.display = 'flex';
            
            // 2. Nuke the feed container so no more posts can load
            // This finds the main feed wrapper and hides the bottom of it
            let main = document.querySelector('main');
            if(main) {
                // We restrict the height so you literally can't scroll further
                main.style.maxHeight = (MAX_SCROLL_HEIGHT + 100) + "px";
                main.style.overflow = "hidden";
            }

            hasStopped = true;
        }
    });
})();