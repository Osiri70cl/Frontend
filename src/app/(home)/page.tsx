"use client";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import styles from "./page.module.scss";
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
import Home from "../_components/home/Home";
import { fetchDataFromAPI, fetchMockData } from "@/api/api";
import ErrorComponent from "../_components/error/ErrorComponent";

export default function HomePage() {
  const [mockedData, setMockedData] = useState(
    process.env.NEXT_PUBLIC_MOCKED_DATA
  );
  const [apiError, setApiError] = useState(false);
  const [userID, setUserID] = useState<number | null>(null);
  useState<AverageSessionsData | null>(null);
  const [resData, setResData] = useState<any>(null);

  useEffect(() => {
    if (mockedData === "true") {
      const mockData = fetchMockData();
      setResData(mockData);
    } else {
      if (userID !== null) {
        fetchDataFromAPI(userID)
          .then((data) => {
            setApiError(false);
            setResData(data);
          })
          .catch((error) => {
            setApiError(true);
          });
      } else {
        setApiError(true);
      }
    }
  }, [mockedData, userID]);

  const renderHome = useMemo(() => {
    if (apiError) return <ErrorComponent />;
    if (!resData) return <div>Loading...</div>;
    let score;
    if (resData.userData.todayScore) {
      score = resData.userData.todayScore;
    } else {
      score = resData.userData.score;
    }
    return (
      <Home
        activityData={resData.activityData}
        averageSessionsData={resData.averageSessionsData}
        performanceData={resData.performanceData}
        todayScore={score}
        userData={resData.userData}
      />
    );
  }, [resData, apiError, userID]);

  const renderUserChoice = useMemo(() => {
    if (userID === null) {
      return (
        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.user}>
              <button onClick={() => setUserID(12)}>Karl</button>
            </div>
            <div className={styles.user}>
              <button onClick={() => setUserID(18)}>Celia</button>
            </div>
          </div>
        </div>
      );
    } else {
      return <>{renderHome}</>;
    }
  }, [userID, renderHome]);

  return <>{renderUserChoice}</>;
}
