const sidebarProductsToggle = document.getElementById(
  "sidebar-products-toggle"
);
const sidebarDropdown = document.getElementById("sidebar-dropdown");
const sidebarBtn = document.querySelector(".sidebar-btn");
sidebarProductsToggle.addEventListener("click", function () {
  if (sidebarDropdown.style.display === "flex") {
    sidebarDropdown.style.display = "none";
    sidebarBtn.style.ZIndex = "0";
  } else {
    sidebarDropdown.style.display = "flex";
  }
});
