function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var menuIcon = document.getElementById("menu-icon");
  var closeIcon = document.getElementById("close-icon");

  if (sidebar.style.left === "0%") {
    sidebar.style.left = "-70%"; // Hide the sidebar
    menuIcon.style.display = "block"; // Show the menu icon
    closeIcon.style.display = "none"; // Hide the close icon
  } else {
    sidebar.style.left = "0%"; // Show the sidebar
    menuIcon.style.display = "none"; // Hide the menu icon
    closeIcon.style.display = "block"; // Show the close icon
  }
}
