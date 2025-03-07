const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// [
//     {
//       "soilType": "Clay Soil",
//       "characteristics": "Holds moisture well, rich in nutrients, but poor drainage.",
//       "bestCrops": ["Rice", "Lettuce", "Broccoli"]
//     },
//     {
//       "soilType": "Sandy Soil",
//       "characteristics": "Drains quickly, low in nutrients, warms up fast.",
//       "bestCrops": ["Carrots", "Potatoes", "Peanuts"]
//     },
//     {
//       "soilType": "Loamy Soil ",
//       "characteristics": "Best soil for farming, retains moisture but drains well.",
//       "bestCrops": ["Wheat", "Sugarcane", "Maize"]
//     },
//     {
//       "soilType": "Silty Soil",
//       "characteristics": "Holds nutrients well, retains moisture, soft texture.",
//       "bestCrops": ["Beans", " Tomatoes", "Peppers"]
//     },
//     {
//       "soilType": "Peaty Soil",
//       "characteristics": "High organic matter, acidic, retains a lot of moisture.",
//       "bestCrops": ["Carrots", "Turnips"]
//     },
//     {
//       "soilType": "Chalky Soil",
//       "characteristics": "Alkaline, drains well but lacks nutrients.",
//       "bestCrops": ["Spinach", "Cabbage", "Beets"]
//     },
//     {
//       "soilType": "Saline Soil",
//       "characteristics": "High salt content, poor for most crops.",
//       "bestCrops": ["Barley", "Date Palm", "Sugar Beets"]
//     }
//   ]
  