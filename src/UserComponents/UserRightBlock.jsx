import React from "react";
import { useParams } from "react-router-dom";
import Profile from "./profilecomponents/Profile";
import ProfileUpload from "./profilecomponents/ProfileUpload";

// to import url parameters useparam
const UserRightBlock = () => {
  let { id } = useParams();
  return (
    <div className="userRightBlock">
      {id === "profile" && <Profile />}
      {id === "uploadphoto" && <ProfileUpload />}
    </div>
  );
};

export default UserRightBlock;
