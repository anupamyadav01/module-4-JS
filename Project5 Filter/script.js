const categoryFilter = document.getElementById("category-filter");

const productList = document.getElementById("product-list");


categoryFilter.addEventListener("change", () => {
    let valueSelectedByUser = categoryFilter.value;
    let products = productList.querySelectorAll(".product");
    products.forEach((ele) => {
        let productDataCatogery = ele.getAttribute("data-category");

        if (valueSelectedByUser == productDataCatogery || valueSelectedByUser == "All") {
            ele.style.display = "block";
        } else {
            ele.style.display = "none";
        }
    })

})