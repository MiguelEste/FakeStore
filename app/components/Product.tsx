import { TProduct } from "../lib/product.interface";
import Image from "next/image";
import { convertPrice, getProduct } from "@/app/lib/functions";
import { notFound } from "next/navigation";

export async function Product({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let product: TProduct | undefined;
  try {
    product = await getProduct(id);
  } catch (e) {
    console.error(e);
    return notFound();
  }

  return (
    <div className="flex flex-col bg-gray-200 dark:bg-gray-900 rounded-md p-5">
      <h2 className="text-3xl text-teal-600 dark:text-teal-400">
        {product.title}
      </h2>
      <p className="text-sm">
        {product.rating.rate}★ ({product.rating.count} Ratings)
      </p>
      <div className="flex flex-col md:flex-row">
        <Image
          src={product.image}
          className="p-5 w-100 aspect-square object-contain"
          width={350}
          height={350}
          preload={true}
          alt={`${product.title}`}
        />

        <div>
          <p className="text-3xl">{convertPrice(product.price)}</p>
          <h2 className="text-xl text-teal-600 dark:text-teal-400">
            Description
          </h2>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
