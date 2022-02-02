// add product to array and push to local stora
var AddToProductsArray = (element, array) => {
    let products = [...array];
        products.push(element);
        // localStorage.setItem("products", JSON.stringify(products));
        return products;
}

var deleteElement = (elementName , arrayOfPrOducts) => {
    let temp_array = []
    for (var i = 0; i < arrayOfPrOducts.length; i++) {
        if (arrayOfPrOducts[i].name !== elementName) {
            temp_array.push(arrayOfPrOducts[i])
        }
    }
    return temp_array;
}



module.exports ={AddToProductsArray , deleteElement};