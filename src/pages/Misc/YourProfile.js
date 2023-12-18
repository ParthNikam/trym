import React, { useEffect, useState } from "react";

import SingleUserProfile from "pages/UserProfile/SingleUserProfile";
import { fetchUserById } from "redux/actions/UserActions";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";


const YourProfile = () => {
  const dispatch = useDispatch();
  const [userProfiles, setUserProfiles] = useState();

  const parthProfile = "655bfba3395ffd7dfd27ea2b";
  const uid = Cookies.get("userProfile") ? Cookies.get("userProfile") : parthProfile;
  console.log("uid", uid);

  const fetchUserProfile = async (userId) => {
    try {
      const userById = await dispatch(fetchUserById(userId));
      setUserProfiles(userById);
      console.log("new user", userById);
    } catch (error) {
      console.error("profile thingy fucked up:", error);
    }
  };

  useEffect(() => {
    // Use userProfile as needed
    console.log("User Profile:", uid);
    if (uid) {
      fetchUserProfile(uid);
    } else {
      fetchUserProfile(parthProfile);
    }
  }, [uid]);

  console.log("userProfiles", userProfiles);
  return <SingleUserProfile user={userProfiles}/>;
};

export default YourProfile;
