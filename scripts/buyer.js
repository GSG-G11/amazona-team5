let temp_all_products = JSON.parse(localStorage.getItem("products"))||[];
let all_products =[...temp_all_products];

const renderProducsInIndexPage=(card_container , array_of_product)=>{
    array_of_product.forEach(element => {
    card_container.innerHTML +=
    `
    <div class="card">
        <img src="${element.image}" class="card-image" />
        <div class="card-body">
            <h3 class="card-title">${element.name}</h3>
            <p class="card-description">${element.details}</p>
            <p class="card-price">$${element.price}</p>
            <button class="buy" id="add to chart">Add to Cart</button>
        </div>
    </div>
    `
});
}

const card_container = document.getElementById("cards-container");

renderProducsInIndexPage(card_container ,all_products );