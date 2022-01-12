import { Product } from "./products";

export interface InventoryItem {
  product: Product;
  quantity: number;
}

const inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10.0 },
    quantity: 10,
  },
  {
    product: { name: "sensor", price: 12.5 },
    quantity: 4,
  },
  {
    product: { name: "LED", price: 1.0 },
    quantity: 20,
  },
];

export function calcInventoryValue(inventory: InventoryItem[]): number {
  let totalPrice = 0;
  for (let i = 0; i < inventory.length; i++) {
    totalPrice += inventory[i].product.price * inventory[i].quantity;
  }
  return totalPrice;
}

let inventoryValue: number = calcInventoryValue(inventory);
console.log(inventoryValue);
