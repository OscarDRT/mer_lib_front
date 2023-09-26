import { SearchResult } from "@/@types/item";
import { ItemCard } from "@/components/itemCard";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

import dynamic from "next/dynamic";

const DynamicCategories = dynamic(() => import("@/components/categories"), {
  ssr: false,
});

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  return {
    title: `${searchParams?.search} | MerLib 📦`,
    description: `Envíos Gratis en el día ✓ Compre ${searchParams?.search} en cuotas sin interés! Conozca nuestras increíbles ofertas y promociones en millones de productos.`,
  };
}

const getItems = async (search: string) => {
  return await fetch(
    `https://merliback.onrender.com/api/items?q=${search}`
  ).then((res) => res.json() as Promise<SearchResult>);
};

export default async function Items({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { items } = await getItems(searchParams.search);

  if (items.length === 0) {
    return (
      <div
        style={{
          padding: "16px",
          maxWidth: "1250px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2>Parece que esta busqueda no tiene resultados!</h2>
        <Link href={"/"}>Ir a la página principal</Link>
      </div>
    );
  }

  return (
    <section>
      <DynamicCategories />
      <article>
        {items.map((item) => {
          return (
            <Link
              key={item.id}
              href={`items/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <ItemCard item={item} />
            </Link>
          );
        })}
      </article>
    </section>
  );
}
