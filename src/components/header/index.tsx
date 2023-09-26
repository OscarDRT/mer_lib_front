"use client";

import { useRouter } from "next/navigation";
import { Linkedin } from "../icons/logo";
import { SearchIcon } from "../icons/search";
import styles from "./header.module.scss";
import { setCookie } from "cookies-next";

export const Header = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputValue = event.currentTarget.search.value.trim();

    if (inputValue) {
      setCookie("search", `${inputValue}`);
      router.push(`/items?search=${inputValue}`);
    }
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit} className={styles.navSearch}>
        <a
          href="https://www.linkedin.com/in/oscardrt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className={styles.navLogo}>
            <Linkedin />
          </button>
        </a>
        <input
          placeholder="Nunca dejes de buscar"
          className={styles.navSearchInput}
          name="search"
          type="text"
        />
        <button type="submit" className={styles.navSearchBtn}>
          <SearchIcon />
        </button>
      </form>
    </header>
  );
};
