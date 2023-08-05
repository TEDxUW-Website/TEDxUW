import React from "react";
import Header from "../../components/Header/Header";
import SectionMain from "../../components/SectionMain";
import mountainsBackground from "../../res/images/mountainsBackground.svg";

import ourstory1 from "../../res/images/ourstory1.svg";
import ourstory2 from "../../res/images/ourstory2.svg";
import ourstory3 from "../../res/images/ourstory3.svg";
import ourstory4 from "../../res/images/ourstory4.svg";
import ourstory5 from "../../res/images/ourstory5.svg";

import topImage from "../../res/images/topImage.svg";
import bottomImage from "../../res/images/bottomImage.svg";

export default function Story() {
  return (
    <div>
      <Header />
      <SectionMain
        mainTitle="Our Story"
        subTitle="Read below to learn about our event’s history."
        bgImg={mountainsBackground} // Make sure you have the correct image variable
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "85%" }}>
          <div className="about-header">What is TedxUW?</div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          marginTop: "40px",
          color: "white",
          fontFamily: "inter, sans-serif",
          fontSize: "16px",
          textAlign: "left",
          lineHeight: "30px",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          Founded in 2011, TEDxUW is the University of Waterloo's official TEDx
          experience. It is one in a series of 3,000+ events being held
          worldwide as part of the international TED movement to create open
          platforms for riveting ideas to be shared with the world. The diverse
          group of students, faculty, and alumni learn from one another, both as
          speakers and as attendees, and leave the conference driven to
          creatively and collectively improve our future.
        </div>
      </div>
      <div
        style={{
          background: "#323232",
          width: "1070px",
          height: "195px",
          borderRadius: "15px",
          margin: "0 auto",
          marginTop: "60px",
          color: "#FFF",
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            fontSize: "25px",
            fontWeight: "700",
            lineHeight: "138.023%",
            marginBottom: "10px",
            marginTop: "15px",
          }}
        >
          OUR MISSION:
        </div>
        <div
          style={{
            lineHeight: "25px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          To bring together intelligent, talented and energetic members within
          the University of Waterloo community to foster an environment in which
          change-makers are able to showcase their ideas and achievements to a
          global audience.
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          marginTop: "40px",
          color: "#D43F2E",
          fontFamily: "inter, sans-serif",
          fontSize: "20px",
          textAlign: "left",
          lineHeight: "32px",
          fontWeight: "700",
          letterSpacing: "0.6px",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          With TEDxUW talks published on TED.com and amassing over 5 million
          views on YouTube, TEDxUW sparks innovation across the globe starting
          at the University of Waterloo.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          maxWidth: "800px",
          margin: "0 auto",
          marginTop: "20px", // Add some space between the previous div and this one
        }}
      >
        <div style={{ flex: "1" }}>
          <img
            src={bottomImage}
            alt="Image 1"
            style={{
              width: "100%",
              height: "40%",
              objectFit: "cover",
              borderRadius: "20px",
              border: "1px solid #FFF",
            }}
          />
          <img
            src={topImage}
            alt="Image 2"
            style={{
              width: "100%",
              height: "50%",
              objectFit: "cover",
              marginTop: "10px",
              borderRadius: "20px",
              border: "1px solid #FFF",
            }}
          />
        </div>
        <div style={{ flex: "2", marginLeft: "20px" }}>
          <div
            style={{
              lineHeight: "30px",
              color: "white",
              textAlign: "left",
              fontFamily: "inter",
              fontSize: "15px",
              letterSpacing: "0.48px",
            }}
          >
            At the University of Waterloo, ideas are a part of who we are. Both
            on and off campus, we cultivate and apply diverse, multidisciplinary
            ideas in a variety of fields. Hosting a TEDx conference each year is
            our distinct way of supporting and encouraging the “ideas worth
            spreading” philosophy.
          </div>
          <div
            style={{
              marginTop: "35px",
              marginBottom: "15px",
              fontSize: "20px",
              fontWeight: "700",
              lineHeight: "138.023%",
            }}
          ></div>
          <div
            style={{
              lineHeight: "30px",
              color: "white",
              textAlign: "left",
              fontFamily: "inter",
              fontSize: "14px",
              letterSpacing: "0.48px",
            }}
          >
            Our goal is to highlight the collective contributions of our
            university to a global society, simultaneously championing the
            University of Waterloo as a community where great minds and big
            ideas always meet. TEDxUW strives to position the University and its
            extended community on an international activity platform that is
            being watched, shared and talked about by the world’s top thinkers,
            thought leaders, businessmen, problem-solvers, entrepreneurs,
            writers, activists, and change-makers.
          </div>
        </div>
      </div>
      <div
        style={{
          height: "800px",
          width: "1100px",
          margin: "0 auto",
          marginTop: "50px",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={ourstory5}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
          <img
            src={ourstory1}
            style={{
              position: "absolute",
              top: 220,
              left: 0,
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 60,
              left: 207,
              zIndex: 3,
            }}
          >
            <img src={ourstory4} />
            <p
              style={{
                fontFamily: "Helvetica",
                textAlign: "left",
                width: 250,
                color: "white",
              }}
            >
              Our last in-person conference was in 2018. The theme was “Making
              Waves,” showcasing brilliant solutions that put ideas into action.
              Above: TEDxUW 2018 Co-Chairs, Anh Le and Daniel Kwon.
            </p>
          </div>
          <img
            src={ourstory2}
            style={{
              position: "absolute",
              top: 120,
              left: 495,
              zIndex: 4,
            }}
          />
          <div>
            <img
              src={ourstory3}
              style={{
                position: "absolute",
                top: 0,
                left: 755,
                zIndex: 5,
              }}
            />
            {/* <p style={{ color: "white" }}>
              Above: Tina Chan presenting her talk, “Band-Aids for Mental
              Health.”
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
