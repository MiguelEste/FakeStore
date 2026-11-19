import { ProductFilter } from "./ProductFilter";
import ProductOverview from "./ProductOverview";
import { getProducts } from "../lib/functions";
export default async function ProductList({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  const products = await getProducts();

  // by mapping all products into only an array of the category and putting that array into a Set you make sure every category is unique
  const categories = [...new Set(products.map((p) => p.category))];

  // filter products array if a filter is set in the url
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;
  return (
    <div className="flex flex-col md:flex-row">
      <ProductFilter categories={categories} selected={category ?? ""} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-5 flex-1 my-5 md:mx-5 md:my-0 group-has-data-pending:opacity-50 group-has-data-pending:pointer-events-none">
        {filtered.length > 0 &&
          filtered.map((product) => (
            <ProductOverview key={product.id} product={product} />
          ))}
        {filtered.length === 0 && (
          <div>No Items found for category: {category}</div>
        )}
      </div>
    </div>
  );
}
