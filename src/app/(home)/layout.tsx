/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import SideBar from "../_components/sidebar/SideBar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="m-header">
        <nav>
          <ul>
            <li className="m-header__logo">
              <img src="/img/logo.png" alt="SportSee logo" />
            </li>
            <li>
              <Link href="">Accueil</Link>
            </li>
            <li>
              <Link href="">Profil</Link>
            </li>
            <li>
              <Link href="">Réglages</Link>
            </li>
            <li>
              <Link href="">Communauté</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <SideBar />
        {children}
      </main>
    </>
  );
}
