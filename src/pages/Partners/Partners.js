import React from "react";

import "./Partners.css";

import university_of_waterloo from "../../res/images/sponsors/university_of_waterloo.svg";
import basecamp from "../../res/images/sponsors/basecamp.svg";
import mailchimp from "../../res/images/sponsors/mailchimp.svg";
import bell from "../../res/images/bell.svg";
import hp from "../../res/images/hp.svg";
import toastmasters from "../../res/images/toastmasters.svg";

import Header from "../../components/Header/Header";
import SectionMain from "../../components/SectionMain";
import mountainsBackground from "../../res/images/mountainsBackground.svg";

function Partners() {
  return (
    <>
      <Header />
      <SectionMain
        mainTitle="Past Sponsors"
        subTitle="Thank you to our generous sponsors for the support!"
        bgImg={mountainsBackground}
      />
      <div style={{ width: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img src={university_of_waterloo} width="800px" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "100px",
          }}
        >
          <img src={basecamp} width="350px" />
          <img src={mailchimp} width="350px" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "100px",
          }}
        >
          <img src={bell} />
          <img src={hp} />
          <img src={toastmasters} />
        </div>
      </div>
    </>
  );
}

export default Partners;
