import React from "react";
import "./root.css";
import logo from "../img/logo.png";
import navPage from "../img/navPage.png";
import { useHistory } from "react-router-dom";

export default function Layout(props) {
    const history = useHistory();

    const handleClick = () => {
      history.push(`/jobdainfo/`);
    };

  return (
    <div className="root">
      <div className="logo_wrap">
        <img className="logo" src={logo} alt="" onClick={handleClick}></img>
      </div>
      <div className="nav_wrap">
        <img className="nav_page" src={navPage} alt=""></img>
      </div>
      {props.children}
    </div>
  );
}
