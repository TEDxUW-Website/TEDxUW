import React from "react";
import "./LandingMain.css"; // Assuming you put the CSS into LandingMain.css file
import BlackLogo from "../res/images/logos/BlackLogo.svg";

export default function LandingMain({ Image }) {
  const divStyle = {
    backgroundColor: "#D43F2E",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "110vh",
    width: "210vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // changed from "center" to "flex-start"
    alignItems: "center",
    paddingTop: "150px", // Added top padding as per requirement
  };

  return (
    <div style={divStyle}>
      <div className="logo-text-container">
        <img className="logo" src={BlackLogo} alt="Logo Left" />
        <h1 className="main-text">FROM THE GROUND UP</h1>
        <img className="logo" src={BlackLogo} alt="Logo Right" />
      </div>
      <div className="sub-text">
        <p>🗓️ OCT 1ST 2023</p>
        <p>🧭 Theatre of the Arts, University of Waterloo</p>
      </div>
    </div>
  );
}
