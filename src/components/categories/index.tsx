"use client";

import React, { useEffect, useState } from "react";
import { SearchResult } from "@/@types/item";
import { getCookie } from "cookies-next";
import styles from "./categories.module.scss";

const getItems = async (search: string) => {
  return await fetch(
    `https://merliback.onrender.com/api/items?q=${search}`
  ).then((res) => res.json() as Promise<SearchResult>);
};

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const search = getCookie("search");

  useEffect(() => {
    const fetchCategories = async () => {
      if (!search) {
        setCategories([]);
        return;
      }

      const { categories } = await getItems(search);
      setCategories(categories);
    };

    fetchCategories();
  }, [search]);

  if (!categories.length) return null;

  return <div className={styles.categories}>{categories.join(" > ")}</div>;
};

export default Categories;
