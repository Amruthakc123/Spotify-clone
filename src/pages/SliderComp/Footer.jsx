import React from "react";
import "./SliderComp.css";
import Logo from "../HeaderComp/Logo";

const Footer = () => {
  return (
    <section id="footer">
      <article>
        <ul>
          <div className="left">
            <li>
              <a href="" id="logo">
                <Logo />
              </a>
            </li>
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">home</a>
            </li>
          </div>
          <div className="right">
            <li>
              <a href="">home</a>
            </li>
          </div>
        </ul>
      </article>
    </section>
  );
};

export default Footer;
