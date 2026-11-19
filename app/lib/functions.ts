import { cacheLife } from "next/cache";
import { TProduct } from "./product.interface";

const productsURL = "https://fakestoreapi.com/products"

/**
 * convert product price into standardized dutch euro currency format
 * @param price price of the product
 * @returns price converted into dutch currency format
 */
export function convertPrice(price: number) {
    return new Intl.NumberFormat("nl-NL", {
            style: "currency",
            currency: "EUR",
          }).format(price)
}

/**
 * fetch list of producs from fakestoreapi
 * @returns Promise of a TProduct array
 */
export async function getProducts(): Promise<TProduct[]> {
  "use cache";
  // cache result for hours, products do not update that frequently
  cacheLife("hours");
  const res = await fetch(productsURL);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

/**
 * fetch single product from fakestoreai
 * @param id id of the product to fetch
 * @returns Promise of a TProduct
 */
export async function getProduct(id: string): Promise<TProduct> {
  "use cache";
  // cache result for hours, products do not update that frequently
  cacheLife("hours");
  const res = await fetch(`${productsURL}/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product with id " + id);

  }
  return res.json();
}