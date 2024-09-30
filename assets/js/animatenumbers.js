document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');
    const duration = 2000; // Total animation time in milliseconds

    counters.forEach(counter => {
        const animateCount = () => {
            const target = parseFloat(counter.getAttribute('data-target')); // Handle floating-point numbers
            const isFloat = target % 1 !== 0; // Check if it's a floating-point number
            const start = 0;
            const startTime = performance.now(); // Get the start time for smooth animation
            
            const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1

                const currentCount = start + (target - start) * progress;

                // Update counter based on whether it's a float or integer
                counter.innerText = isFloat ? currentCount.toFixed(1) : Math.ceil(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(updateCount); // Continue animation until progress reaches 1
                } else {
                    counter.innerText = target; // Set final value to the target
                }
            };

            requestAnimationFrame(updateCount); // Start the animation
        };

        animateCount(); // Call the animation function for each counter
    });
});
