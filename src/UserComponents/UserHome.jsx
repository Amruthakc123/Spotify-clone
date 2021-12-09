import React from "react";
import UserLeftBlock from "./UserLeftBlock";
import UserRightBlock from "./UserRightBlock";
import "./UserBlock.css";
const UserHome = () => {
  return (
    <div>
      <section id="userBlock">
        <article>
          <UserLeftBlock />
          <UserRightBlock />
        </article>
      </section>
    </div>
  );
};

export default UserHome;
