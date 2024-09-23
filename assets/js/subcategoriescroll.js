document.addEventListener('DOMContentLoaded', function () {
    const filters = document.querySelector('.filters');

    // Scroll settings
    let scrollSpeed = 1; // Adjust speed for faster/slower scroll
    let isScrolling = true; // To control if it should scroll
    let direction = 1; // 1 for right, -1 for left

    // Function to handle automatic scrolling
    function autoScroll() {
        if (isScrolling) {
            filters.scrollLeft += scrollSpeed * direction;

            // Check if scrollbar reaches the right end
            if (filters.scrollLeft + filters.clientWidth >= filters.scrollWidth - 1) {
                direction = -1; // Start scrolling left
            }

            // Check if scrollbar reaches the left end
            if (filters.scrollLeft <= 0) {
                direction = 1; // Start scrolling right
            }
        }
        requestAnimationFrame(autoScroll); // Keep scrolling
    }

    // Start the scrolling
    autoScroll();

    // Stop scrolling on hover
    filters.addEventListener('mouseover', function () {
        isScrolling = false;
    });

    // Resume scrolling when mouse leaves
    filters.addEventListener('mouseout', function () {
        isScrolling = true;
    });
});