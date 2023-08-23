/* 
Реализовать на функциях и прототипах корзину товаров с методами:
  - Добавить товар
  - Увеличить число товаров
  - Уменьшить число товаров
*/

const product = { id: 1, name: 'Bread', count: 1 };

const Cart = function () {
  this.products = [];
};

Cart.prototype.addProduct = function(product) {
	if (this.products.find((product) => product.id === product.id)) {
		return
	}
	this.products.push(product);
};

Cart.prototype.increaseAmout  = function (id) {
  this.products = this.products.map((product) => {
		if (product.id === id) {
			product.count++;
			return product;
		}
		return product; 
	});
}

Cart.prototype.decreaseAmout  = function (id) {
  this.products = this.products
	  .map((product) => {
		  if (product.id === id) {
			  product.count--;
			  return product;
		  }
		  return product; 
	  })
	  .filter((product) => product.count > 0);
}


const cart = new Cart();

cart.addProduct(product);
cart.increaseAmout(1);
cart.decreaseAmout(1);

console.log(cart)