import { Item } from "@/@types/item";
import Image from "next/image";

import styles from "./item.module.scss";
import { Truck } from "../icons/truck";
import { amountFormat } from "@/utils/commons";

interface ItemCardProps {
  item: Item;
}

export const ItemCard = ({ item }: ItemCardProps) => {
  const { picture, price, title, seller, free_shipping } = item ?? {};
  const { amount, currency } = price ?? {};
  const { state } = seller ?? {};

  const amountFor = amountFormat(amount, currency);

  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.image}
          alt={item.title}
          src={picture}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.info}>
        <p className={styles.price}>{amountFor}</p>
        <p className={styles.title}>{title}</p>
      </div>
      <span className={styles.city}>{state}</span>
    </div>
  );
};
