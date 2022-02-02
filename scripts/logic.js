const addToCart = (cart, product) => cart.push(product);

const deleteFromCart = (cart, id) => cart.filter((p) => p.id !== id);

const getTotalPrice = (cart) =>
    cart.map((p) => p.price).reduce((acc, cu) => acc + cu, 0);
module.exports = { addToCart, deleteFromCart, getTotalPrice };
