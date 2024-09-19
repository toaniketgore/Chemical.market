document.addEventListener('DOMContentLoaded', function () {
    const dropdownTrigger = document.querySelector('.dropdown'); // Adjust selector as needed
    const dropdownContent = document.querySelector('.dropdown-content'); // Adjust selector as needed

    // Function to show the dropdown
    function showDropdown() {
        dropdownContent.style.display = 'block';
    }

    // Function to hide the dropdown
    function hideDropdown() {
        dropdownContent.style.display = 'none';
    }

    // Show dropdown on hover
    dropdownTrigger.addEventListener('mouseenter', showDropdown);

    // Hide dropdown on mouse leave
    dropdownTrigger.addEventListener('mouseleave', function (event) {
        // Wait for a short time before hiding
        setTimeout(() => {
            if (!dropdownContent.matches(':hover')) {
                hideDropdown();
            }
        }, 300); // Adjust the timeout duration if needed
    });

    // Keep dropdown visible when clicking on the trigger
    dropdownTrigger.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click event from closing the dropdown immediately
        dropdownContent.style.display = 'block';
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!dropdownTrigger.contains(event.target) && !dropdownContent.contains(event.target)) {
            hideDropdown();
        }
    });
});