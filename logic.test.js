const { addToCart } = require("./scripts/logic.js");

const dummyCart = [
    { id: 1, title: "apple", price: 2 },
    { id: 2, title: "orange", price: 3 },
];
const product = { id: 7, title: "gold", price: 9 };

describe("cart crud operation", () => {
    test("should add product to cart", () => {
        addToCart(dummyCart, product);
        expect(dummyCart.at(-1)).toEqual(product);
    });
});
