import React from "react";

export default function SectionMain({ mainTitle, subTitle, bgImg }) {
  const divStyle = {
    backgroundColor: "white",
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "70vh",
  };

  return (
    <div style={divStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginRight: 50,
        }}
      >
        <h1
          style={{
            textTransform: "uppercase",
            paddingBottom: "1rem",
            paddingLeft: "100px",
            borderBottom: "15px solid #D43F2E",
            fontSize: "5rem",
          }}
        >
          {mainTitle}
        </h1>
        <h3
          style={{
            marginTop: 25,
            fontFamily: "Inter",
            fontSize: "24px",
            fontWeight: "300",
            maxWidth: "550px",
            textAlign: "right",
          }}
        >
          {subTitle}
        </h3>
      </div>
    </div>
  );
}
