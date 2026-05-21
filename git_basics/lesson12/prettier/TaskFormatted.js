// ✅ AFTER: файл після форматування Prettier
// Саме так виглядає код після: npm run format

const products = [
  { id: 1, name: 'Laptop', price: 999.99, inStock: true },
  { id: 2, name: 'Phone', price: 499.99, inStock: false },
  { id: 3, name: 'Tablet', price: 299.99, inStock: true },
];

function calculateTotal(items) {
  const available = items.filter((item) => item.inStock === true);
  const total = available.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  return total;
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }
  addItem(product) {
    this.items.push(product);
    console.log(`Added: ${product.name}`);
  }
  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }
  getTotal() {
    return calculateTotal(this.items);
  }
}

const cart = new ShoppingCart();
cart.addItem(products[0]);
cart.addItem(products[2]);
console.log('Total:', cart.getTotal());
