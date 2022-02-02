const { AddToProductsArray, deleteElement } = require("./scripts/logic.js");
test("check if element add to arr", () => {
  let exp = ["sfsfdz"];
  let act = AddToProductsArray("sfsfdz", []);
  expect(exp).toEqual(act);
});
test("check if element deleted from array", () => {
  let exp = [{ name: "item1" }];
  let act = deleteElement("item2", [{ name: "item1" }, { name: "item2" }]);
  expect(exp).toEqual(act);
});
