document.addEventListener("DOMContentLoaded", function () {
  var gridItems = document.querySelectorAll(".grid-item");
  var filterButtons = document.querySelectorAll(".filters button");
  var descriptions = {
    binders:
      "These agents are used to ensure the cohesion of tablet formulations, helping them hold the ingredients together and maintaining the structural integrity of the tablets.",

    controlledReleaseAgents:
      "These agents help regulate the release rate of active pharmaceutical ingredients in tablet formulations, ensuring a consistent and prolonged therapeutic effect.",

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

