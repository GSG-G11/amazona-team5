let product_name = document.getElementById("product-name");
let product_details = document.getElementById("product-details");
let product_image = document.getElementById("product-image");
let product_price = document.getElementById("product-price");
let product_category = document.getElementById("product-category");
let product_submit = document.getElementById("product-submit");
let temp_all_products = JSON.parse(localStorage.getItem("products")) || [];
let all_products = [...temp_all_products];
let product_table = document.querySelector(".products-table");
let delete_product = document.getElementById("delete-item");
const cardsContainer = document.querySelector("#cards-container");
const searchBarInput = document.querySelector(".search-bar input");

adddeleteEvents();
product_submit?.addEventListener("click", (e) => {
    let temp_all_products = JSON.parse(localStorage.getItem("products")) || [];
    let all_products = [...temp_all_products];
    e.preventDefault;
    let product = {
        name: product_name.value,
        details: product_details.value,
        image: product_image.value,
        price: product_price.value,
        category: product_category.value,
    };
    // AddToProductsArray(product,all_products)
    localStorage.setItem(
        "products",
        JSON.stringify(AddToProductsArray(product, all_products))
    );
    renderProductInTable(product_table, product);
    adddeleteEvents();
});

// ! this function render product in html table after add product submition
function renderProductInTable(tableElement, products) {
    console.log(products);
    products.map((product) => {
        tableElement.innerHTML += `      
        <tr>
            <td>${product.name}</td>
            <td>${product.details}</td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td>
                <button type="button" id="${product.name}" class="delete-item"><i class="far fa-trash-alt"></i></button>
                <form action="../pages/edit-seller.html" methode="get" >
                    <input type="text" style="display: none" name="product-name" value="${product.name}"> 
                    <button type="submit"  id="${product.name}" class="edit-item"><i class="far fa-edit"></i></button>
               </form>
            </td>
        </tr>
        `;
    });
}

// ! this function render  all products in html page after window ready
function renderProductsInTable(tableElement, all_products) {
    tableElement.innerHTML = "";
    tableElement &&
        all_products.forEach((element) => {
            tableElement.innerHTML += `
        <tr>
            <td>${element.name}</td>
            <td>${element.details}</td>
            <td>${element.category}</td>
            <td>${element.price}</td>
            <td>
                <button type="button"  id="${element.name}" class="delete-item"><i class="far fa-trash-alt"></i></button>
               <form action="../pages/edit-seller.html" methode="get" >
                    <input type="text" style="display: none" name="product-name" value="${element.name}">
                    <button type="submit"  id="${element.name}" class="edit-item"><i class="far fa-edit"></i></button>
               </form>
            </td>
        </tr>
        `;
        });
}

function adddeleteEvents() {
    let temp_all_productWillDeleted =
        JSON.parse(localStorage.getItem("products")) || [];
    let all_productWillDeleted = [...temp_all_productWillDeleted];
    let btns = document.querySelectorAll(".delete-item");
    btns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            let id = e.target.getAttribute("id");
            localStorage.setItem(
                "products",
                JSON.stringify(deleteElement(id, all_productWillDeleted))
            );
        });
    });
}

searchBarInput?.addEventListener("change", (e) => {
    const searchBarInputValue = searchBarInput.value;
    const searchedProduct = searchProduct(searchBarInputValue, all_products);
    renderProducsInIndexPage(cardsContainer, searchedProduct);
});

const addBtn = document.querySelectorAll(".buy");

addBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let cart = JSON.parse(localStorage.getItem("cartProducts") || "[]");

        e.preventDefault();
        let id = e.target.getAttribute("id");
        const product = all_products.find((product) => product.name === id);
        cart.push(product);
        localStorage.setItem("cartProducts", JSON.stringify(cart));
    });
});

const renderCartTable = () => {
    const cartProduct = JSON.parse(
        localStorage.getItem("cartProducts") || "[]"
    );

    console.log(cartProduct);
    renderProductsInTable(product_table, cartProduct);
};

window.onload = () => {
    product_table && renderCartTable();
};
