import { FallbackPage } from "@/app/components/FallBackPage";
import { Product } from "@/app/components/Product";
import { Suspense } from "react";

export default function Page(props: PageProps<"/products/[id]">) {
  return (
    <Suspense fallback={<FallbackPage title="Loadig Product..." />}>
      <Product params={props.params} />
    </Suspense>
  );
}
