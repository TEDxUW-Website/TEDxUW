import React, { useEffect, useState, Component } from "react";
import moment from "moment";
import { Container, ImageGroup, Divider, Button } from "semantic-ui-react";
import {
  StyledArticle,
  StyledTimeUnit,
  StyledDigit,
  StyledCaption,
  StyledContainer,
  StyledHeaderDescription,
} from "./styles";

const stringDate = "February 19, 2022 09:00:00";
const endDate = new Date(stringDate).getTime();

function Time() {
  const [days, setDays] = useState(0);
  const [days1, setDays1] = useState(0);
  const [days2, setDays2] = useState(0);

  const [hours, setHours] = useState(0);
  const [hours1, setHours1] = useState(0);
  const [hours2, setHours2] = useState(0);

  const [minutes, setMinutes] = useState(0);
  const [minutes1, setMinutes1] = useState(0);
  const [minutes2, setMinutes2] = useState(0);

  const [seconds, setSeconds] = useState(0);
  const [seconds1, setSeconds1] = useState(0);
  const [seconds2, setSeconds2] = useState(0);

  const [loading, setLoading] = useState(true);

  const countDown = () => {
    // const endDate = new Date("February 15, 2022 00:00:00").getTime();
    const today = new Date().getTime();
    const timeDiff = endDate - today;

    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;

    let timeDays = Math.floor(timeDiff / d);
    let timeHours = Math.floor((timeDiff % d) / h);
    let timeMinutes = Math.floor((timeDiff % h) / m);
    let timeSeconds = Math.floor((timeDiff % m) / s);

    timeDays = timeDays < 10 ? "0" + timeDays : timeDays;
    timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

    setDays(timeDays);
    setHours(timeHours);
    setMinutes(timeMinutes);
    setSeconds(timeSeconds);

    setDays1(timeDays.toString()[0]);
    setHours1(timeHours.toString()[0]);
    setMinutes1(timeMinutes.toString()[0]);
    setSeconds1(timeSeconds.toString()[0]);

    setDays2(timeDays.toString()[1]);
    setHours2(timeHours.toString()[1]);
    setMinutes2(timeMinutes.toString()[1]);
    setSeconds2(timeSeconds.toString()[1]);
  };

  useEffect(() => {
    const id = setInterval(countDown, 1000);
    setLoading(false);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <StyledHeaderDescription style={{ color: "white" }}>
        TedxUW will virtually take place on {stringDate} ET.
      </StyledHeaderDescription>
      <StyledContainer>
        <section style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              textAlign: "center",
            }}>
            <article>
              <StyledDigit style={{ marginRight: "8px" }}>
                <StyledTimeUnit>{days1}</StyledTimeUnit>
              </StyledDigit>
            </article>
            <article>
              <StyledDigit>
                <StyledTimeUnit>{days2}</StyledTimeUnit>
              </StyledDigit>
            </article>
            <StyledArticle />
            <article>
              <StyledDigit style={{ marginRight: "8px" }}>
                <StyledTimeUnit>{hours1}</StyledTimeUnit>
              </StyledDigit>
            </article>
            <article>
              <StyledDigit>
                <StyledTimeUnit>{hours2}</StyledTimeUnit>
              </StyledDigit>
            </article>
            <StyledArticle />
            <article>
              <StyledDigit style={{ marginRight: "8px" }}>
                <StyledTimeUnit>{minutes1}</StyledTimeUnit>
              </StyledDigit>
            </article>
            <article>
              <StyledDigit>
                <StyledTimeUnit>{minutes2}</StyledTimeUnit>
              </StyledDigit>
            </article>
            <StyledArticle />
            <article>
              <StyledDigit style={{ marginRight: "8px" }}>
                <StyledTimeUnit>{seconds1}</StyledTimeUnit>
              </StyledDigit>
            </article>
            <article>
              <StyledDigit>
                <StyledTimeUnit>{seconds2}</StyledTimeUnit>
              </StyledDigit>
            </article>
          </div>
        </section>
        <section>
          <div
            style={{ display: "flex", flexWrap: "wrap", textAlign: "center" }}>
            <article>
              <div style={{ width: "152px" }}>
                <StyledCaption>Days</StyledCaption>
              </div>
            </article>
            <StyledArticle />
            <article>
              <div style={{ width: "152px", alignItems: "center" }}>
                <StyledCaption>Hours </StyledCaption>
              </div>
            </article>
            <StyledArticle />
            <article>
              <div style={{ width: "152px", alignItems: "center" }}>
                <StyledCaption>Minutes </StyledCaption>
              </div>
            </article>
            <StyledArticle />
            <article>
              <div style={{ width: "152px", alignItems: "center" }}></div>
              <StyledCaption>Seconds</StyledCaption>
            </article>
          </div>
        </section>
      </StyledContainer>
    </div>
  );
}

export default Time;
