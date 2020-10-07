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

    const tallestMountain = findNameOfTallestMountain(mountains); // A const that is equal to the findNameOfTallestMountain function and it takes in mountains from above
    console.log(tallestMountain);
}

function findNameOfTallestMountain(mountains: Mountain[]) { // A function that requires an array of mountains to pass through.
    let tallestMountain: Mountain = { // Creates an instance of Mountain called tallest Mountain
        name: '', // Name is empty
        height: 0 // Height is set to 0
    };

    for (let mountain of mountains) { // For each mountain of mountains run the IF statement
        if (mountain.height > tallestMountain.height) { // If mountain height is greater than tallestMountain height (above)
            tallestMountain = mountain; 
        }
    };

    return tallestMountain;
}


interface Product { // Interface called Product
    name: String,
    price: number
}

function Products() {
    let products: Product[] = [
        { name: 'Apple', price: 0.99 },
        { name: 'Banana', price: 1.99 },
        { name: 'Watermelon', price: 2.99 }
    ];

    const productAverage = calAverageProductPrice(products) // A const that is equal to the calAverageProductPrice function and it takes in products from above
    console.log(productAverage);
};

function calAverageProductPrice(products: Product[]) {
    var sum = 0;

    for (let prod of products) {
        sum += prod.price; // Adds sum + price = sum
    }

    const productAverage = sum / products.length; // Sum divided by the amount of products in products
    return productAverage
}



interface InventoryItem { // Interface called InventoryItem
    product: Product, // Calles Product from interface above
    quantity: number
}

function Inventory() {
    let motor: Product = { // Motor is a Product (from Product interface)
        name: 'motor',
        price: 10.00
    };

    let item1: InventoryItem = { // Item1 is an instance from Inventory
        product: motor, // The product is motor from above
        quantity: 10
    }

    let sensor: Product = { // Sensor is a Product (from Product interface)
        name: 'sensor', 
        price: 12.50
    };

    let item2: InventoryItem = { // Item2 is an instance from Inventory
        product: sensor,  // Sensor is a Product (from Product interface)
        quantity: 4
    }


    let LED: Product = { // LED is a Product (from Product interface)
        name: 'LED',
        price: 1.00
    };

    let item3: InventoryItem = { // Item3 is an instance from Inventory
        product: LED, // LED is a Product (from Product interface)
        quantity: 20
    }


    const inventory: InventoryItem[] = [item1, item2, item3]; //  Const inventory is an array of InventoryItems of item1, item2, and item3
    const total = calcInventoryValue(inventory); // A const that is equal to the calcInventoryValue function and it takes in inventory (const) from above

    console.log(total);
}

function calcInventoryValue(inventory: InventoryItem[]) {
    let total = 0;

    for (let prod of inventory) {
        total = total + prod.product.price * prod.quantity;
    }
    return total;
}

