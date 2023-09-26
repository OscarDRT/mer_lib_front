import { ItemResult } from "@/@types/item";
import { amountFormat } from "@/utils/commons";
import Image from "next/image";
import React from "react";
import styles from "./id.module.scss";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
};

const getItem = async (id: string): Promise<ItemResult | null> => {
  try {
    const res = await fetch(`https://merliback.onrender.com/api/items/${id}`);

    if (!res.ok) {
      console.error(`Error fetching item ${id}: ${res.statusText}`);
      return null;
    }

    const contentType = res.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
      console.error(`Expected JSON but received ${contentType}`);
      return null;
    }

    return res.json() as Promise<ItemResult>;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getItem(params.id);

  if (!data) {
    return {
      title: "Producto no encontrado",
      description: "El producto que buscas no está disponible.",
    };
  }

  const { item } = data;

  return {
    title: item.title,
    description: `Envíos Gratis en el día ✓ Compre ${item.title} en cuotas sin interés! Conozca nuestras increíbles ofertas y promociones en millones de productos.`,
  };
}

export default async function ItemId({ params }: { params: { id: string } }) {
  const data = await getItem(params.id);

  if (!data) {
    return (
      <section
        style={{
          padding: "16px",
          maxWidth: "1250px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2>Parece que esta producto no existe</h2>
        <Link href={"/"}>Ir a la página principal</Link>
      </section>
    );
  }

  const { item } = data;
  const { picture, title, condition, price, description } = item ?? {};
  const { amount, currency } = price ?? {};

  const amountFor = amountFormat(amount, currency);

  const descriptionHtml = description?.split("\n").map((line, index, array) => (
    <>
      {line}
      {index === array.length - 1 ? null : <br />}
    </>
  ));

  return (
    <section className={styles.section}>
      <div className={styles.flexContainer}>
        <div className={styles.imageContainer}>
          <Image
            alt={title}
            src={picture}
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.infoContent}>
            <p className={styles.condition}>
              {condition.charAt(0).toUpperCase() +
                condition.slice(1).toLowerCase()}
            </p>
            <h1>{title}</h1>
            <p className={styles.price}>{amountFor}</p>
            <button>Comprar</button>
          </div>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        {description && (
          <React.Fragment>
            <p className={styles.title}>Descripción del producto</p>
            <p className={styles.text}>{descriptionHtml}</p>
          </React.Fragment>
        )}
      </div>
    </section>
  );
}
