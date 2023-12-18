// FetchAllData.js
import { useEffect, useState } from "react";
import { topperdbName, topperDataStore } from "../LoadData/constants";



const FetchLeaderBoard = () => {
  const [allUserData, setAllUserData] = useState([]);


  const openDB = () => {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(topperdbName, 1);
      request.onerror = (event) => {
        reject(`Error opening IndexedDB: ${event.target.error}`);
      };

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(topperDataStore)) {
          db.createObjectStore(topperDataStore, { keyPath: "name" }); 
        }
      };
    });
  };

  const getUserData = (db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(topperDataStore, "readonly");
      const objectStore = transaction.objectStore(topperDataStore);
      const request = objectStore.getAll();

      request.onerror = (event) => {
        reject(`Error fetching user data: ${event.target.error}`);
      };

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = await openDB();
        const userData = await getUserData(db);
        setAllUserData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [setAllUserData]);
  return allUserData;
};

export default FetchLeaderBoard;
