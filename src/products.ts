import { calcInventoryValue } from "./inventory";

export interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  {
    name: "milk",
    price: 2.99,
  },
  {
    name: "eggs",
    price: 1.89,
  },
  {
    name: "pasta",
    price: 1.09,
  },
];

export function calcAverageProductPrice(products: Product[]): number {
  let total: number = 0;
  for (let i = 0; i < products.length; i++) {
    if (products.length === 0) {
      return total;
    } else {
      total += products[i].price;
    }
  }
  return total === 0 ? total : total / products.length;
}

let averagePrice: number = calcAverageProductPrice(products);
console.log(averagePrice);
