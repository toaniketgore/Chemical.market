// document.addEventListener("DOMContentLoaded", () => {
//   const products = document.querySelectorAll(".range-product");
//   products.forEach((product) => {
//     const bgImage = product.getAttribute("data-bg-image");
//     if (bgImage) {
//       // Create a style tag and set the background image for the pseudo-element
//       const style = document.createElement("style");
//       style.textContent = `
//         .range-product[data-bg-image="${bgImage}"]::before {
//             background-image: url(${bgImage});
//         }
//     `;
//       document.head.appendChild(style);
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".range-product");

  products.forEach((product) => {
    const bgImage = product.getAttribute("data-bg-image");
    if (bgImage) {
      // Set the background image using inline style for the .range-product element
      product.style.backgroundImage = `url(${bgImage})`;
    }
  });
});
