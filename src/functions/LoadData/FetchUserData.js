// FetchUserData.js
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

const getUserData = (db, userName) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(userDataStore, "readonly");
    const objectStore = transaction.objectStore(userDataStore);
    const request = objectStore.get(userName);

    request.onerror = (event) => {
      reject(`Error fetching user data: ${event.target.error}`);
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };
  });
};

const FetchUserData = (userName) => {
  const [allUserData, setAllUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = await openDB();
        const userData = await getUserData(db, userName);
        setAllUserData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userName]);

  return allUserData;
};

export default FetchUserData;
