document.addEventListener("DOMContentLoaded", function () {
  var gridItems = document.querySelectorAll(".grid-item");
  var filterButtons = document.querySelectorAll(".filters button");
  var descriptions = {
    hydrolyzedProteins:
      "These proteins strengthen and repair hair and skin by delivering essential amino acids,enhancing moisture retention, and improving texture. Their deep nourishment restores vitality and resilience.",

    beautyPeptides:
      "These peptides boost collagen, improve skin elasticity, and reduce fine lines, making them essential for promoting a youthful, radiant complexion.",

    moisturizers:
      "These ingredients are essential for maintaining skin hydration, improving texture, and enhancing the skin's natural barrier. They also lock in moisture and prevent dryness to give a smooth and supple appearance.",

    surfactants:
      "These compounds are essential for their cleansing and emulsifying properties, helping to remove dirt, oil, and impurities from skin and hair by reducing surface tension for effective cleaning and foaming action.",

    brighteners:
      "These agents reduce hyperpigmentation, even skin tone, and brighten the complexion by inhibiting melanin production, making them key in formulations for a radiant, uniform look.",

    inflammatory:
      "These ingredients are crucial for soothing irritated skin, reducing redness, and calming inflammation..",

    conditioningAgents:
      "These agents enhance the texture and manageability of hair and skin by improving moisture retention, smoothness, and softness, making them essential for nourishing and revitalizing formulations.",

    emollients:
      "These cosmetic preparations soften the skin by providing deep hydration and creating a protective barrier to prevent moisture loss.",

    exoticButters:
      "These butters are valued for their rich, nourishing properties. They provide intense hydration, improve skin elasticity, and offer a luxurious texture, making them ideal for enhancing the sensory appeal of skincare and haircare products.",

    emulsifiers:
      "They ensure consistent texture and performance in products such as creams and lotions, preventing separation and enhancing the overall effectiveness and application of the products.",

    beautyOils:
      "They provide hydration, skin repair, and essential nutrients, ideal for products that promote radiant skin and hair while appealing to eco-conscious consumers.",
    polymers:
      "These substances enhance texture, stability, and performance by improving viscosity, creating film-forming properties, and enabling controlled release of active ingredients for better application and effectiveness.",

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
