document.addEventListener("DOMContentLoaded", function () {
  var gridItems = document.querySelectorAll(".grid-item");
  var filterButtons = document.querySelectorAll(".filters button");
  var descriptions = {
    moisturizers:
      "These ingredients are essential for maintaining skin hydration, improving texture, and enhancing the skin's natural barrier. They also lock in moisture and prevent dryness to give a smooth and supple appearance.",
    surfactants:
      "These chemical compounds are essential for their cleansing and emulsifying properties. They help remove dirt, oil, and impurities from the skin and hair by reducing surface tension, enabling effective cleaning and foaming action",
    brighteners:
      "These agents are used to reduce the appearance of hyperpigmentation, even out skin tone, and brighten the complexion. They work by inhibiting melanin production and promoting a more radiant, uniform skin appearance, making them popular in formulations",
    cleansers:
      "These chemical compounds are essential for their cleansing and emulsifying properties. They help remove dirt, oil, and impurities from the skin and hair by reducing surface tension, enabling effective cleaning and foaming action",
    oils: "They provide deep hydration, support skin repair, and deliver essential fatty acids and antioxidants, making them ideal for formulating products that promote healthy, radiant skin and hair while aligning with eco-conscious consumer preferences",
    default: "", // For "All" filter, no description
  };

  // Show all items on page load
  filterItems("*");

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
      var descKey = filterValue.replace(".", ""); // Remove "." from filter class
      var description = descriptions[descKey] || descriptions["default"];
      document.querySelector(".desc-content").textContent = description;
    });
  });

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
});
