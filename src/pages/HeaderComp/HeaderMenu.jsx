import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">premium</Link>
          </li>
          <li>
            <Link to="/</li>">support</Link>
          </li>
          <li>
            <Link to="">Download</Link>
          </li>
          <li className="bar">
            <Link to=""></Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default HeaderMenu;
