import React, { useState } from "react";

import "./About.css";
import SectionMain from "../../components/SectionMain";
import mountainsBackground from "../../res/images/mountainsBackground.svg";
import TeamMemberCard from "../../components/TeamMemberCard";

import manavjit_singh_dhindsa from "../../res/images/team/manavjit_singh_dhindsa.svg";

import RowGroup from "./RowGroup";

import Accordion from "../../components/Accordion/Accordion";
import Header from "../../components/Header/Header";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  function setAccordianOpen(open) {
    setIsOpen(open);
  }

  return (
    <>
      <Header />
      <SectionMain
        mainTitle="Meet the Team"
        subTitle="Learn more about our 100% student-led team."
        bgImg={mountainsBackground}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Chairs, Operations & Finance */}
        <div style={{ width: "85%" }}>
          <div className="about-header">Chairs, Operations & Finance</div>
          <div className="team-section">
            <RowGroup
              even={false}
              persons={["Salma Marzouk", "Caitlin Kwan", "Helen Wang"]}
            />
          </div>
          <Accordion isOpen={isOpen}>hello</Accordion>
        </div>
        {/* MARKETING SECTION */}
        <div style={{ width: "85%" }}>
          <div className="about-header">Marketing</div>
          <div className="team-section">
            <RowGroup
              even={false}
              persons={["Helena Lee", "Angel Lin", "Julia Fedorin"]}
            />
            <RowGroup
              even={true}
              persons={["Abby Zinman", "Catherine Hoang"]}
            />
            <RowGroup
              even={false}
              persons={["Jennifer Man", "Sasha Takoo", "Gavneet Bhandal"]}
            />
          </div>
        </div>
        {/* SPONSORSHIPS */}
        <div style={{ width: "85%" }}>
          <div className="about-header">Sponsorships</div>
          <div className="team-section">
            <RowGroup
              even={false}
              persons={["Krysten Tran", "Ellie Xu", "Heidi Zhu"]}
            />
            <RowGroup
              even={true}
              persons={["Franklin Ramirez", "Hoor Ulain Umar"]}
            />
          </div>
        </div>
        {/* SPEAKER RELATIONSHIPS */}
        <div style={{ width: "85%" }}>
          <div className="about-header">Speaker Relations</div>
          <div className="team-section">
            <RowGroup
              even={false}
              persons={["Kate Bendall", "Muktha Kaja", "Sandy Rbahia"]}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TeamMemberCard
                name="Manavjit Singh Dhindsa"
                role="Speaker Relations Manager"
                picture={manavjit_singh_dhindsa}
              />
            </div>
          </div>
        </div>
        {/* LOGISTICS */}
        <div style={{ width: "85%" }}>
          <div className="about-header">Logistics</div>
          <div className="team-section">
            <RowGroup
              even={false}
              persons={["Rawan Miznazi", "Pranav Bedi", "Milind Kumar"]}
            />
            <RowGroup even={true} persons={["Enoch Tin", "Smiksha Sharma"]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
