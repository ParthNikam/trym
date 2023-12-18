// LoadData.js
import FetchAllData from "functions/LoadData/FetchAllData";
import { topperdbName,  topperDataStore} from "../LoadData/constants";




// Function to open IndexedDB
export const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(topperdbName, 1);

    request.onerror = (event) => {
      reject(event.target.error);
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      resolve(db);
    };

    // If the database needs to be created or updated
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(topperDataStore)) {
        db.createObjectStore(topperDataStore, { keyPath: "name" });
      }
    };
  });
};


// Function to save toppers data in IndexedDB
export const saveToppersToIndexedDB = async (toppers) => {
  try {
    const db = await openDB();
    const transaction = db.transaction(topperDataStore, "readwrite");
    const objectStore = transaction.objectStore(topperDataStore);
    objectStore.clear();

    toppers.forEach((topper) => {
      objectStore.add(topper);
    });

    // Close the transaction and database
    transaction.oncomplete = () => {
      db.close();
    };
  } catch (error) {
    console.error("Error saving toppers data to IndexedDB:", error);
  }
};


export default async function CreateLeaderBoard() {
  try {
    const allUsers = FetchAllData();
    const toppers = [];

    allUsers.forEach((user) => {
      const lastIndex = user.marks.length - 1;

      // Check if the user has a rank and it is less than or equal to 50
      if (user.marks[lastIndex].rank && user.marks[lastIndex].rank <= 50) {
        toppers.push(user);
      }
    });

    // Save the toppers to IndexedDB
    await saveToppersToIndexedDB(toppers);

    console.log("Topper data saved to IndexedDB");
  } catch (error) {
    console.error("Error creating leaderboard:", error);
  }
}

