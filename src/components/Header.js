import React from "react";
import troll_face from "../assets/troll_face.png";

const Header = () => {
  return (
    <header>
      <img className="header--logo" src={troll_face} alt="troll face" />
      <h1 className="header--title">Meme Generator</h1>
    </header>
  );
};

export default Header;
