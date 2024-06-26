/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import styles from "./layout.module.scss";
import Header from "../_components/header/Header";
import Drawer from "../_components/drawer/Drawer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className={styles.layout_main}>
        <Drawer />
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}
