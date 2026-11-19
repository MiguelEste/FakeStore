import Link from "next/link";
import { TProduct } from "../lib/product.interface";
import Image from "next/image";
import { convertPrice } from "../lib/functions";

export default function ProductOverview({ product }: { product: TProduct }) {
  return (
    <div className="p-5 bg-gray-200 dark:bg-gray-900 rounded-md flex flex-col">
      <div className="w-full text-white flex justify-center relative p-2">
        <p className="absolute left-0 top-0 bg-teal-600 text-sm rounded-md p-1 m-2">
          {product.rating.rate}★
        </p>
        <Link href={"/products/" + product.id}>
          <Image
            src={product.image}
            className="w-50 aspect-square object-contain"
            width={200}
            height={200}
            alt={`Image of ${product.title}`}
          />
        </Link>
        <p className="absolute bottom-0 right-0 bg-teal-600 text-xl rounded-md p-2 m-2">
          {convertPrice(product.price)}
        </p>
      </div>
      <Link
        href={"/products/" + product.id}
        className="text-xl text-teal-600 dark:text-teal-400 hover:underline"
      >
        {product.title}
      </Link>
      <p>Category: {product.category}</p>
    </div>
  );
}
