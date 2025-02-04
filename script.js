// script.js
function filterItems() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const categories = document.querySelectorAll(".category");

    categories.forEach((category) => {
        const text = category.textContent.toLowerCase();
        if (text.includes(query)) {
            category.style.display = "block";
        } else {
            category.style.display = "none";
        }
    });
}
