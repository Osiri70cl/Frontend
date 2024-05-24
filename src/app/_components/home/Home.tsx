"use client";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./Home.module.scss";
import Burns from "../burns/Burns";
import BarCharts from "../BarChart/BarCharts";
import RadarCharts from "../RadarCharts/RadarCharts";
import LineCharts from "../LineCharts/LineCharts";
import RadialCharts from "../RadialChart/RadialCharts";

type Props = {
  averageSessionsData: any;
  performanceData: any;
  todayScore: any;
  userData: any;
  activityData: any;
};

const Home = ({
  averageSessionsData,
  performanceData,
  todayScore,
  userData,
  activityData,
}: Props) => {
  return (
    <section className={styles.home}>
      <h2>
        Bonjour <span>{userData?.userInfos.firstName}</span>
      </h2>
      <p>Félicitation vous avez explosé vos objectifs hier 👏</p>
      <div className={styles.home_card_container}>
        <div className={styles.home_activity_container}>
          <article className={styles.activity_chart}>
            <BarCharts rawData={activityData?.sessions} />
          </article>
          <div className={styles.square_charts}>
            <article className={styles.sessions_chart}>
              <LineCharts rawData={averageSessionsData?.sessions} />
            </article>
            <article className={styles.strength_chart}>
              <RadarCharts rawData={performanceData} />
            </article>
            <article className={styles.goal_chart}>
              <RadialCharts rawData={todayScore} />
            </article>
          </div>
        </div>
        <div className={styles.home_data_container}>
          <Burns data={userData?.keyData.calorieCount} isCalorie={true} />
          <Burns data={userData?.keyData.proteinCount} isProtein={true} />
          <Burns data={userData?.keyData.carbohydrateCount} isCarbon={true} />
          <Burns data={userData?.keyData.lipidCount} isLipid={true} />
        </div>
      </div>
    </section>
  );
};

export default Home;
