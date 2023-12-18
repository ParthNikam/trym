// IndexedDBHelpers.js
import { usersdbName, userDataStore } from "../LoadData/constants";

// Function to open IndexedDB
export const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(usersdbName, 1);
    request.onerror = (event) => {
      reject(event.target.error);
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    // If the database needs to be created or updated
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(userDataStore)) {
        db.createObjectStore(userDataStore, { keyPath: "name" }); 
      }
    };
  });
};

// Function to save user data in IndexedDB
export const saveUserDataToIndexedDB = async (allUsers) => {
  const db = await openDB();
  const transaction = db.transaction(userDataStore, "readwrite");
  const objectStore = transaction.objectStore(userDataStore);
  objectStore.clear();
  if (allUsers) {
    allUsers.forEach((user) => {
      objectStore.add(user);
    });
  } else {
    console.log("fuck off!");
  }

  console.log("User data saved to IndexedDB");

  // Close the transaction and database
  transaction.oncomplete = () => {
    db.close();
  };
};
