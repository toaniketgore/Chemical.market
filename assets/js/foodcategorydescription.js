document.addEventListener("DOMContentLoaded", function () {
  var gridItems = document.querySelectorAll(".grid-item");
  var filterButtons = document.querySelectorAll(".filters button");
  var descriptions = {
    preservatives:
      "These agents extend the shelf life of products by preventing the growth of bacteria and mold, making it essential in canned foods, sauces, and beverages.",

    flavorEnhancers:
      "These enhancers amplify the savory foods, making them more flavorful. It is commonly added to processed foods, snacks, soups, and restaurant dishes.",

    stabilizers:
      "These chemical substances are used to maintain the uniformity and consistency of products by preventing the breakdown of ingredients and ensuring that emulsions and suspensions remain stable over time.",

    default: "", // For "All" filter, no description
  };

  // Automatically display the content for the active filter on page load
  var activeButton = document.querySelector(".filters button.filter-active");
  var defaultFilter = activeButton.getAttribute("data-filter");

  // Show the grid items and description for the default active filter
  filterItems(defaultFilter);
  updateDescription(defaultFilter);

  // Add event listener to filter buttons
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filterValue = button.getAttribute("data-filter");

      // Remove and add active class to buttons
      filterButtons.forEach(function (btn) {
        btn.classList.remove("filter-active");
      });
      button.classList.add("filter-active");

      // Filter the items based on the selected filter
      filterItems(filterValue);

      // Update the description
      updateDescription(filterValue);
    });
  });

  // Function to show/hide grid items based on filter
  function filterItems(filterValue) {
    gridItems.forEach(function (item) {
      if (
        filterValue === "*" ||
        item.classList.contains(filterValue.replace(".", ""))
      ) {
        item.classList.add("show");
        item.style.opacity = "1";
      } else {
        item.classList.remove("show");
        item.style.opacity = "0";
      }
    });
  }

  // Function to update the description based on the selected filter
  function updateDescription(filterValue) {
    var descKey = filterValue.replace(".", ""); // Remove "." from filter class
    var description = descriptions[descKey] || descriptions["default"];
    document.querySelector(".desc-content").textContent = description;
  }
});
