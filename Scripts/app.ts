interface Mountain { // Interface called Mountain
    name: String,
    height: number
}

function mountains() { // Function called mountains
    let mountains: Mountain[] = [ // Creates an array of Mountains from the interfaces
        { name: 'Kilimanjaro', height: 19341 }, // Name and height of mountain
        { name: 'Everest', height: 29029 }, // Name and height of mountain
        { name: 'Denali', height: 20310 } // Name and height of mountain
    ];

    const tallestMountain = findNameOfTallestMountain(mountains); // A const that is equal to the findNameOfTallestMountain function
    console.log(tallestMountain);
}

function findNameOfTallestMountain(mountains: Mountain[]) { // A function that requires an array of mountains to pass through.
    let tallestMountain: Mountain = { // Creates an instance of Mountain called tallest Mountain
        name: '',
        height: 0
    };

    for (let mountain of mountains) {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    };

    return tallestMountain;
}


interface Product {
    name: String,
    price: number
}

function Products() {
    let products: Product[] = [
        { name: 'Apple', price: 0.99 },
        { name: 'Banana', price: 1.99 },
        { name: 'Watermelon', price: 2.99 }
    ];

    const productAverage = calAverageProductPrice(products)
    console.log(productAverage);
};

function calAverageProductPrice(products: Product[]) {
    var sum = 0;

    for (let prod of products) {
        sum += prod.price;
    }

    const productAverage = sum / products.length;
    return productAverage
}



interface InventoryItem {
    product: Product,
    quantity: number
}

function Inventory() {
    let motor: Product = {
        name: 'motor',
        price: 10.00
    };

    let item1: InventoryItem = {
        product: motor,
        quantity: 10
    }

    let sensor: Product = {
        name: 'sensor',
        price: 12.50
    };

    let item2: InventoryItem = {
        product: sensor,
        quantity: 4
    }


    let LED: Product = {
        name: 'LED',
        price: 1.00
    };

    let item3: InventoryItem = {
        product: LED,
        quantity: 20
    }


    const inventory: InventoryItem[] = [item1, item2, item3];
    const total = calcInventoryValue(inventory);

    console.log(total);
}

function calcInventoryValue(inventory: InventoryItem[]) {
    let total = 0;

    for (let prod of inventory) {
        total = total + prod.product.price * prod.quantity;
    }
    return total;
}

