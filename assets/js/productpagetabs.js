document.addEventListener("DOMContentLoaded", function () {
  // Select all filter buttons
  const filterButtons = document.querySelectorAll(".filters button");

  // Select all grid items
  const gridItems = document.querySelectorAll(".grid-item");

  // Add 'show' class to all grid items to make them visible initially
  gridItems.forEach((item) => {
    item.classList.add("show");
    item.style.display = "block"; // Ensures all items are displayed initially
  });

  // Function to handle filtering logic
  const filterGridItems = (filterValue) => {
    gridItems.forEach((item) => {
      if (filterValue === "*") {
        // Show all items
        item.classList.add("show");
        setTimeout(() => {
          item.style.display = "block";
        }, 300);
      } else {
        // Show items matching the filter and hide others
        if (item.classList.contains(filterValue.substring(1))) {
          item.classList.add("show");
          setTimeout(() => {
            item.style.display = "block";
          }, 300);
        } else {
          item.classList.remove("show");
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      }
    });
  };

  // Add click event listener to each filter button
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove 'filter-active' class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("filter-active"));

      // Add 'filter-active' class to the clicked button
      this.classList.add("filter-active");

      // Get the filter category from the button's data-filter attribute
      const filterValue = this.getAttribute("data-filter");

      // Call the filter function
      filterGridItems(filterValue);
    });
  });

  // Initially trigger the 'All' filter (first button active)
  filterGridItems("*"); // Show all items by default
});
