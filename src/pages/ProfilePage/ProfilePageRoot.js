import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Profile Components
import MultipleProfile from "./MultipleProfile";
import SingleProfile from "./SingleProfile";
import PrimaryColumn from "components/PrimaryColumn/PrimaryColumn"

const ProfilePageRoot = () => {
  const location = useLocation();
  const [userNames, setuserNames] = useState([]);

  useEffect(() => {
    const setSelectedName = async () => {
      const queryParams = new URLSearchParams(location.search);
      const names = [];

      queryParams.forEach((value, key) => {
        if (key === "q") {
          names.push(value);
        }
      });
      setuserNames(names);
    };
    setSelectedName();
  }, [location.search, setuserNames]);


  return (
    <div>
      <PrimaryColumn>
        {userNames.length > 1 && <MultipleProfile users={userNames} />}
        {userNames.length === 1 && <SingleProfile user={userNames[0]} />}
      </PrimaryColumn>
    </div>
  );
};

export default ProfilePageRoot;
