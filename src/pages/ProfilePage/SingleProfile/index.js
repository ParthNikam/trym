// SingleUserProfile/index.js
import React from "react";
// import { userPropTypes } from '../UserPropTypes'; 
import SingleProfileRoot from "./SingleProfileRoot";

export default function SingleProfile({user}) {
  return <SingleProfileRoot user={user}/>;
};

// Add prop-types validation
// SingleProfile.propTypes = {
//   user: userPropTypes
// };

