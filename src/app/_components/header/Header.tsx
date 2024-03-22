"use client";
import { Divide } from "@phosphor-icons/react";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header_container}>
      <img src="/img/logo.png" />
      <nav className={styles.header_menu}>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
