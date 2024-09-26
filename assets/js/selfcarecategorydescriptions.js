document.addEventListener("DOMContentLoaded", function () {
  var gridItems = document.querySelectorAll(".grid-item");
  var filterButtons = document.querySelectorAll(".filters button");
  var descriptions = {
    hydrolyzedProteins:
      "These proteins are used to strengthen and repair damaged hair and skin by providing essential amino acids that enhance moisture retention and improve overall texture. Their ability to penetrate and nourish at a cellular level makes them a key ingredient in formulations aimed at restoring vitality and resilience.",

    beautyPeptides:
      "These peptides are used to stimulate collagen production, enhance skin elasticity, and reduce the appearance of fine lines and wrinkles. Their ability to target specific skin concerns at a cellular level makes them essential in formulations designed to promote a youthful, radiant complexion.",

    moisturizers:
      "These ingredients are essential for maintaining skin hydration, improving texture, and enhancing the skin's natural barrier. They also lock in moisture and prevent dryness to give a smooth and supple appearance.",

    surfactants:
      "These chemical compounds are essential for their cleansing and emulsifying properties. They help remove dirt, oil, and impurities from the skin and hair by reducing surface tension, enabling effective cleaning and foaming action.",

    brighteners:
      "These agents are used to reduce the appearance of hyperpigmentation, even out skin tone, and brighten the complexion. They work by inhibiting melanin production and promoting a more radiant, uniform skin appearance, making them popular in formulations.",

    inflammatory:
      "These ingredients are crucial for soothing irritated skin, reducing redness, and calming inflammation.",

    conditioningAgents:
      "These agents are used to improve the texture and manageability of hair and skin. They enhance moisture retention, smoothness, and overall softness, making them essential for formulations aimed at nourishing and revitalizing hair and healthy skin.",

    emollients:
      "These cosmetic preparations soften the skin by providing deep hydration and creating a protective barrier to prevent moisture loss.",

    exoticButters:
      "These butters are valued for their rich, nourishing properties. They provide intense hydration, improve skin elasticity, and offer a luxurious texture, making them ideal for enhancing the sensory appeal of skincare and haircare products.",

    emulsifiers:
      "They ensure consistent texture and performance in products such as creams and lotions, preventing separation and enhancing the overall effectiveness and application of the products.",

    beautyOils:
      "They provide deep hydration, support skin repair, and deliver essential fatty acids and antioxidants, making them ideal for formulating products that promote healthy, radiant skin and hair.",

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
