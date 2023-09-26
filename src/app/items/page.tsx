import { SearchResult } from "@/@types/item";
import { ItemCard } from "@/components/itemCard";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  console.log({ params, searchParams });

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
  params,
}: {
  searchParams: { search: string };
  params: { id: string };
}) {
  const { items } = await getItems(searchParams.search);

  return (
    <section>
      <article>
        {items.map((item) => {
          return (
            <Link
              key={item.id}
              href={`items/${item.id}`}
              target="blanck"
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
