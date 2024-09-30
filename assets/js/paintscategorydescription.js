document.addEventListener("DOMContentLoaded", function () {
  var gridItems = document.querySelectorAll(".grid-item");
  var filterButtons = document.querySelectorAll(".filters button");
  var descriptions = {
    thickeners:
      "Thickeners help control the viscosity and flow properties of paints and coatings, ensuring easy application and a smooth finish. Examples include HASE Thickener and Cellulosic Methyl Hydroxyethyl Cellulose (MHEC).",

    pigments:
      "Pigments provide color to paints and coatings, allowing for a wide range of hues and shades. They are essential for achieving the desired appearance in coatings. Examples include Rutile Titanium Dioxide and Pigment Paste (Yellow, Black).",

    dispersants:
      "Dispersants ensure that pigments and fillers in coatings are evenly distributed, preventing agglomeration and improving color consistency and stability. Examples include Dispersing Agent (Ammonium Salt) and Dispersing + Wetting Agent (Sodium Salt).",

    coalescingAgents:
      "Coalescing agents improve film formation and the overall performance of coatings by ensuring that the paint dries evenly and adheres well to surfaces. An example is RTC-12.",

    binders:
      "Binders hold the ingredients together in both coatings and construction materials, providing structural integrity. Examples include Styrene Acrylic Emulsion and Hydrocarbon Resin.",

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
