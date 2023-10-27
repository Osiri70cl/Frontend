"use client";
import React from "react";

import styles from "./page.module.scss";
import Burns from "../_components/burns/Burns";
import BarCharts from "../_components/BarChart/BarCharts";
import RadarCharts from "../_components/RadarCharts/RadarCharts";
import LineCharts from "../_components/LineCharts/LineCharts";
import RadialCharts from "../_components/RadialChart/RadialCharts";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.title}>
        <h1>
          Bonjour <span>Thomas</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className={styles.content}>
        <div className={styles.graphs}>
          <BarCharts />
          <div className={styles.bottomCharts}>
            <RadarCharts />
            <LineCharts />
            <RadialCharts />
          </div>
        </div>
        <aside className={styles.aside}>
          {/* //map to do */}
          <Burns />
          <Burns />
          <Burns />
          <Burns />
        </aside>
      </div>
    </section>
  );
}
