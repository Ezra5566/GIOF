document.addEventListener("DOMContentLoaded", function() {
    // Function to adjust styles based on screen size
    function adjustStyles() {
        const screenWidth = window.innerWidth;

        // Example: Adjust font size based on screen width
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            if (screenWidth < 900) {
                item.style.fontSize = '20px';
            } else {
                item.style.fontSize = '220px';
            }
        });

        // Example: Show/hide navbar based on screen width
        const navbar = document.querySelector('.navbar');
        if (screenWidth < 900) {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'flex';
        }

        // Example: Adjust container height based on screen width
        const containerItems = document.querySelector('.container-items');
        if (screenWidth < 900) {
            containerItems.style.height = '100px';
        } else {
            containerItems.style.height = '300px';
        }
    }

    // Initial adjustment
    adjustStyles();

    // Adjust styles on window resize
    window.addEventListener('resize', adjustStyles);

    // Function to initialize interactivity
    function initInteractivity() {
        const allcontainer = document.querySelectorAll(".container-item");
        const venueImageWrap = document.querySelector(".container-img-wrap");
        const venueImage = document.querySelector(".container-img");

        allcontainer.forEach((link) => {
            link.addEventListener("mouseenter", venueHover);
            link.addEventListener("mouseleave", venueHover);
            link.addEventListener("mousemove", moveVenueImage);
        });

        function moveVenueImage(e) {
            let xpos = e.clientX;
            let ypos = e.clientY;
            venueImageWrap.style.transform = `translate(${xpos}px, ${ypos}px)`;
        }

        function venueHover(e) {
            if (e.type === "mouseenter") {
                const targetImage = e.target.dataset.img;
                venueImage.style.backgroundImage = `url(${targetImage})`;
                venueImageWrap.style.visibility = 'visible';
                venueImageWrap.style.opacity = '1';
            } else if (e.type === "mouseleave") {
                venueImageWrap.style.visibility = 'hidden';
                venueImageWrap.style.opacity = '0';
            }
        }
    }

    // Initialize interactivity
    initInteractivity();
});
//crazyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
