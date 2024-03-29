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
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "@/utils/mockData";
import {
  ActivityData,
  AverageSessionsData,
  PerformanceData,
  UserData,
} from "@/interface/interface";
import { useRouter } from "next/router";

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [mockedData, setMockedData] = useState(true);
  const [activityData, setActivityData] = useState<ActivityData | null>(null);
  const [averageSessionsData, setAverageSessionsData] =
    useState<AverageSessionsData | null>(null);
  const [performanceData, setPerformanceData] =
    useState<PerformanceData | null>(null);

  useEffect(() => {
    if (mockedData) {
      setUserData({
        id: USER_MAIN_DATA[0].id,
        userInfos: USER_MAIN_DATA[0].userInfos,
        todayScore: USER_MAIN_DATA[0].todayScore,
        keyData: USER_MAIN_DATA[0].keyData,
      });

      setActivityData(USER_ACTIVITY[0]);
      setAverageSessionsData(USER_AVERAGE_SESSIONS[0]);
      setPerformanceData(USER_PERFORMANCE[0]);
    } else {
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
    }
  }, [mockedData]);

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
              <RadialCharts rawData={userData?.todayScore} />
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
}
