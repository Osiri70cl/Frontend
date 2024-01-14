"use client";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

import styles from "./page.module.scss";
import Burns from "../_components/burns/Burns";
import BarCharts from "../_components/BarChart/BarCharts";
import RadarCharts from "../_components/RadarCharts/RadarCharts";
import LineCharts from "../_components/LineCharts/LineCharts";
import RadialCharts from "../_components/RadialChart/RadialCharts";
import {
  ActivityData,
  AverageSessionsData,
  PerformanceData,
  UserData,
} from "@/interface/interface";
import { useRouter } from "next/router";

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [activityData, setActivityData] = useState<ActivityData | null>(null);
  const [averageSessionsData, setAverageSessionsData] =
    useState<AverageSessionsData | null>(null);
  const [performanceData, setPerformanceData] =
    useState<PerformanceData | null>(null);

  useEffect(() => {
    const userId = "12";

    const userEndpoint = `http://localhost:3000/user/${userId}`;
    const activityEndpoint = `http://localhost:3000/user/${userId}/activity`;
    const averageSessionsEndpoint = `http://localhost:3000/user/${userId}/average-sessions`;
    const performanceEndpoint = `http://localhost:3000/user/${userId}/performance`;

    const fetchUserData = () => axios.get(userEndpoint);
    const fetchActivityData = () => axios.get(activityEndpoint);
    const fetchAverageSessionsData = () => axios.get(averageSessionsEndpoint);
    const fetchPerformanceData = () => axios.get(performanceEndpoint);
    Promise.all([
      fetchUserData(),
      fetchActivityData(),
      fetchAverageSessionsData(),
      fetchPerformanceData(),
    ])
      .then((results) => {
        const [
          userDataResponse,
          activityDataResponse,
          averageSessionsDataResponse,
          performanceDataResponse,
        ] = results;
        setUserData(userDataResponse.data.data);
        setActivityData(activityDataResponse.data.data);
        setAverageSessionsData(averageSessionsDataResponse.data.data);
        setPerformanceData(performanceDataResponse.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(userData?.todayScore);

  return (
    <section className={styles.home}>
      <div className={styles.title}>
        <h1>
          Bonjour <span>{userData?.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className={styles.content}>
        <div className={styles.graphs}>
          <BarCharts rawData={activityData?.sessions} />
          <div className={styles.bottomCharts}>
            <LineCharts rawData={averageSessionsData?.sessions} />
            <RadarCharts rawData={performanceData} />
            <RadialCharts rawData={userData?.todayScore} />
          </div>
        </div>
        <aside className={styles.aside}>
          <Burns data={userData?.keyData.calorieCount} isCalorie={true} />
          <Burns data={userData?.keyData.proteinCount} isProtein={true} />
          <Burns data={userData?.keyData.carbohydrateCount} isCarbon={true} />
          <Burns data={userData?.keyData.lipidCount} isLipid={true} />
        </aside>
      </div>
    </section>
  );
}
