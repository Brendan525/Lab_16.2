function mountains() {
    var mountains = [
        { name: 'Kilimanjaro', height: 19341 },
        { name: 'Everest', height: 29029 },
        { name: 'Denali', height: 20310 }
    ];
    var tallestMountain = findNameOfTallestMountain(mountains);
    console.log(tallestMountain);
}
function findNameOfTallestMountain(mountains) {
    var tallestMountain = {
        name: '',
        height: 0
    };
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    }
    ;
    return tallestMountain;
}
function Products() {
    var products = [
        { name: 'Apple', price: 0.99 },
        { name: 'Banana', price: 1.99 },
        { name: 'Watermelon', price: 2.99 }
    ];
    var productAverage = calAverageProductPrice(products);
    console.log(productAverage);
}
;
function calAverageProductPrice(products) {
    var sum = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var prod = products_1[_i];
        sum += prod.price;
    }
    var productAverage = sum / products.length;
    return productAverage;
}
function Inventory() {
    var motor = {
        name: 'motor',
        price: 10.00
    };
    var item1 = {
        product: motor,
        quantity: 10
    };
    var sensor = {
        name: 'sensor',
        price: 12.50
    };
    var item2 = {
        product: sensor,
        quantity: 4
    };
    var LED = {
        name: 'LED',
        price: 1.00
    };
    var item3 = {
        product: LED,
        quantity: 20
    };
    var inventory = [item1, item2, item3];
    var total = calcInventoryValue(inventory);
    console.log(total);
}
function calcInventoryValue(inventory) {
    var total = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var prod = inventory_1[_i];
        total = total + prod.product.price * prod.quantity;
    }
    return total;
}
//# sourceMappingURL=app.js.map