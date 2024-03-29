const USER_MAIN_DATA = [
  {
    id: 24,
    userInfos: {
      firstName: "Carl",
      lastName: "PasDovineau",
      age: 13,
    },
    todayScore: 0.4,
    keyData: {
      calorieCount: 2000,
      proteinCount: 189,
      carbohydrateCount: 200,
      lipidCount: 10,
    },
  },
];

const USER_ACTIVITY = [
  {
    userId: 24,
    sessions: [
      {
        day: "2024-03-25",
        kilogram: 79,
        calories: 250,
      },
      {
        day: "2024-03-26",
        kilogram: 79,
        calories: 230,
      },
      {
        day: "2024-03-27",
        kilogram: 78,
        calories: 280,
      },
      {
        day: "2024-03-28",
        kilogram: 78,
        calories: 270,
      },
      {
        day: "2024-03-29",
        kilogram: 77,
        calories: 190,
      },
    ],
  },
];

const USER_AVERAGE_SESSIONS = [
  {
    userId: 24,
    sessions: [
      {
        day: 1,
        sessionLength: 35,
      },
      {
        day: 2,
        sessionLength: 28,
      },
      {
        day: 3,
        sessionLength: 42,
      },
      {
        day: 4,
        sessionLength: 48,
      },
      {
        day: 5,
        sessionLength: 0,
      },
      {
        day: 6,
        sessionLength: 0,
      },
      {
        day: 7,
        sessionLength: 55,
      },
    ],
  },
];

const USER_PERFORMANCE = [
  {
    userId: 24,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 85,
        kind: 1,
      },
      {
        value: 125,
        kind: 2,
      },
      {
        value: 145,
        kind: 3,
      },
      {
        value: 55,
        kind: 4,
      },
      {
        value: 205,
        kind: 5,
      },
      {
        value: 95,
        kind: 6,
      },
    ],
  },
];

export {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
};
