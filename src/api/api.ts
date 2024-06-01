import axios from "axios";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "@/utils/mockData";
import { formatData } from "./utils/formatData";

export const fetchMockData = () => {
  const mockData = {
    userData: {
      id: USER_MAIN_DATA[0].id,
      userInfos: USER_MAIN_DATA[0].userInfos,
      todayScore: USER_MAIN_DATA[0].todayScore,
      keyData: USER_MAIN_DATA[0].keyData,
    },
    activityData: USER_ACTIVITY[0],
    averageSessionsData: USER_AVERAGE_SESSIONS[0],
    performanceData: USER_PERFORMANCE[0],
  };

  return formatData(mockData);
};

export const fetchDataFromAPI = async (userID: number) => {
  const userEndpoint = `${process.env.NEXT_PUBLIC_URL}/user/${userID}`;
  const activityEndpoint = `${process.env.NEXT_PUBLIC_URL}/user/${userID}/activity`;
  const averageSessionsEndpoint = `${process.env.NEXT_PUBLIC_URL}/user/${userID}/average-sessions`;
  const performanceEndpoint = `${process.env.NEXT_PUBLIC_URL}/user/${userID}/performance`;

  const fetchUserData = () => axios.get(userEndpoint);
  const fetchActivityData = () => axios.get(activityEndpoint);
  const fetchAverageSessionsData = () => axios.get(averageSessionsEndpoint);
  const fetchPerformanceData = () => axios.get(performanceEndpoint);

  try {
    const results = await Promise.all([
      fetchUserData(),
      fetchActivityData(),
      fetchAverageSessionsData(),
      fetchPerformanceData(),
    ]);

    const [
      userDataResponse,
      activityDataResponse,
      averageSessionsDataResponse,
      performanceDataResponse,
    ] = results;

    const formattedResult = formatData({
      userData: userDataResponse.data.data,
      activityData: activityDataResponse.data.data,
      averageSessionsData: averageSessionsDataResponse.data.data,
      performanceData: performanceDataResponse.data.data,
    });

    return formattedResult;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
