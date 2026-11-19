import { Suspense } from "react";
import ProductList from "./components/ProductList";
import { FallbackPage } from "./components/FallBackPage";

export default function ProductsPage(props: PageProps<"/">) {
  return (
    <Suspense fallback={<FallbackPage title="Loading Products..." />}>
      <ProductList searchParams={props.searchParams} />
    </Suspense>
  );
}
