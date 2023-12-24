// FetchRandomUserData.js
import { useEffect, useState } from "react";
import { usersdbName, userDataStore } from "./constants";

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(usersdbName, 1);
    request.onerror = (event) => {
      reject(`Error opening IndexedDB: ${event.target.error}`);
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(userDataStore)) {
        db.createObjectStore(userDataStore, { keyPath: "name" });
      }
    };
  });
};

const getRandomIndex = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomUserData = (db) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(userDataStore, "readonly");
    const objectStore = transaction.objectStore(userDataStore);

    const countRequest = objectStore.count();

    countRequest.onsuccess = (event) => {
      const totalCount = event.target.result;
      var randomIndex = getRandomIndex(totalCount);

      const cursorRequest = objectStore.openCursor();

      cursorRequest.onsuccess = (event) => {
        const cursor = event.target.result;

        if (cursor) {
          if (randomIndex === 0) {
            resolve(cursor.value);
          } else {
            cursor.continue();
            randomIndex--;
          }
        }
      };

      cursorRequest.onerror = (event) => {
        reject(`Error fetching random user data: ${event.target.error}`);
      };
    };

    countRequest.onerror = (event) => {
      reject(`Error counting users: ${event.target.error}`);
    };
  });
};

const FetchRandomUser = () => {
  const [randomUserData, setRandomUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = await openDB();
        const userData = await getRandomUserData(db);
        setRandomUserData(userData);
      } catch (error) {
        console.error("Error fetching random user data:", error);
      }
    };

    fetchData();
  }, []);

  return randomUserData;
};

export default FetchRandomUser;
