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
      // console.log(expiryDate);
      if (expiryDate) {
        if (isExpired(expiryDate)) {
          const newExpiryDate = new Date();
          newExpiryDate.setDate(newExpiryDate.getDate() + 2);
          setCookie("dataExpiryDate", newExpiryDate, { path: "/" });
          
          const userData = await dispatch(fetchAllUsers());
          console.log("bro got data: ", userData)
          saveUserDataToIndexedDB(userData);
        } else {
          console.log("User database already exists in IndexedDB");
        }
      } else {
        // If dataExpiryDate does not exist, set a new expiry date cookie of 2 days
        const newExpiryDate = new Date();
        newExpiryDate.setDate(newExpiryDate.getDate() + 2);
        setCookie("dataExpiryDate", newExpiryDate, { path: "/" });
        const userData = await dispatch(fetchAllUsers());
        saveUserDataToIndexedDB(userData);
      }
    };

    checkAndSaveUserData();
  }, [cookies.dataExpiryDate, setCookie, dispatch]);

  return null;
}

function isExpired(data) {
  const timestamp = data; // Assuming you have a timestamp property

  if (timestamp) {
    const expirationTime = new Date(timestamp + 60 * 60 * 1000); // Expiry of 2 days
    return expirationTime < new Date();
  }

  // If there's no timestamp, consider it expired
  return true;
}
