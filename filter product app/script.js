// const productList = document.getElementById("product-list");
// const searchInput = document.getElementById("search-input");
// const searchBtn = document.getElementById("search-btn");
// const categoryBtns = document.querySelectorAll(".category-btn");

// function filterProduct() {
//     const searchValue = searchInput.value.toLowerCase(); // Fixing typo
//     const productItems = document.querySelectorAll(".product-item");

//     productItems.forEach(item => {
//         const title = item.querySelector("h3").innerText.toLowerCase();
//         const category = item.dataset.category;

//         // Check if search matches the title or category
//         if (title.includes(searchValue) || searchValue === "") {
//             item.style.display = "block"; // Fixing display property
//         } else {
//             item.style.display = "none";
//         }
//     });
// }

// function setCategory(e) {
//     // Remove "active" class from all buttons
//     categoryBtns.forEach(btn => btn.classList.remove("active"));

//     // Add "active" class to the clicked button
//     e.target.classList.add("active");

//     const selectedCategory = e.target.dataset.category;
//     const productItems = document.querySelectorAll(".product-item");

//     productItems.forEach(item => {
//         const category = item.dataset.category;

//         // Show or hide items based on the selected category
//         if (selectedCategory === "all" || category === selectedCategory) {
//             item.style.display = "block";
//         } else {
//             item.style.display = "none";
//         }
//     });
// }

// // Attach event listeners
// searchBtn.addEventListener("click", filterProduct);
// searchInput.addEventListener("keyup", filterProduct);

// categoryBtns.forEach(btn => {
//     btn.addEventListener("click", setCategory);
// });

// // Initial filter to show all products
// filterProduct();

