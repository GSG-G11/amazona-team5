const {
    addToCart,
    deleteFromCart,
    getTotalPrice,
} = require("./scripts/logic.js");

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

    test("should delete product from cart", () => {
        deleteFromCart(dummyCart, 1);
        expect(!dummyCart.includes(product)).toBeFalsy();
    });

    test("should sum the total price", () => {
        const sum = getTotalPrice(dummyCart);

        expect(sum).toEqual(14);
    });
});
