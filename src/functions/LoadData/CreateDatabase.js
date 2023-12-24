// LoadData.js
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "redux/actions/UserActions";
import { saveUserDataToIndexedDB } from "./IndexedDBHelpers.js"; // Import helper functions

export default function CreateDatabase() {
  const [cookies, setCookie] = useCookies(["UserData"]);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAndSaveUserData = async () => {
      const expiryDate = cookies.dataExpiryDate;

      if (expiryDate) {
        if (isExpired(expiryDate)) {
          try {
            const userData = await dispatch(fetchAllUsers());
            saveUserDataToIndexedDB(userData);

            const newExpiryDate = new Date();
            newExpiryDate.setHours(newExpiryDate.getHours() + 2);
            setCookie("dataExpiryDate", newExpiryDate, { path: "/" });

            console.log("Bro, got data and refreshed: ");
          } catch (error) {
            console.error("Error fetching or saving user data:", error);
          }
        } else {
          console.log("User database already exists in IndexedDB");
        }
      } else {
        // If dataExpiryDate does not exist, set a new expiry date cookie of 2 hours
        const newExpiryDate = new Date();
        newExpiryDate.setHours(newExpiryDate.getHours() + 2);
        setCookie("dataExpiryDate", newExpiryDate, { path: "/" });

        try {
          const userData = await dispatch(fetchAllUsers());
          saveUserDataToIndexedDB(userData);

          console.log("Bro, got data and set expiry: ");
        } catch (error) {
          console.error("Error fetching or saving user data:", error);
        }
      }
    };

    checkAndSaveUserData();
  }, [cookies.dataExpiryDate, setCookie, dispatch]);

  return null;
}

function isExpired(data) {
  const timestamp = data; // Assuming you have a timestamp property

  if (timestamp) {
    const expirationTime = new Date(timestamp + 2 * 60 * 60 * 1000);
    return expirationTime < new Date();
  }

  // If there's no timestamp, consider it expired
  return true;
}
