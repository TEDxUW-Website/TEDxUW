import React from "react";
import {
  StyledCollageContainer,
  StyledImgDiv,
  StyledStatement,
  FeaturedSpeakersText,
  StyledSpeakerContainer,
} from "./styles";
import { Container, Button, Divider } from "semantic-ui-react";
import collage1 from "../../res/images/collage1.png";
import tedxuw_logo_2022 from "../../res/images/tedxuw_logo_2022.png";

import chris_costa from "../../res/images/speakers/chris_costa.png";
import chris_costa2 from "../../res/images/speakers/ChrisCosta2.png";
import thomas_lenhard from "../../res/images/speakers/thomas_lenhard.png";
import thomas_lenhard2 from "../../res/images/speakers/ThomasLenhard2.png";
import andrew_guy from "../../res/images/speakers/andrew_guy.png";
import andrew_guy2 from "../../res/images/speakers/Andrew_E_Guy2.png";
import anh_le from "../../res/images/speakers/anh_le.png";
import anh_le2 from "../../res/images/speakers/AnhLe2.png";
import karandeep_gill from "../../res/images/speakers/karandeep_gill.png";
import karandeep_gill2 from "../../res/images/speakers/KarandeepHeadshot.png";
import iman_salehi from "../../res/images/speakers/iman_salehi.png";
import iman_salehi2 from "../../res/images/speakers/ImanSalehi2.png";
import tanner_philp from "../../res/images/speakers/tanner_philp.png";
import tanner_philp2 from "../../res/images/speakers/TannerPhilp2.png";
import ExecCard from "../ExecCard/ExecCard";
import "./LandingPageComponent.css";
class LandingPageComponent extends React.Component {
  render() {
    return (
      <div>
        <StyledImgDiv style={{ backgroundImage: `url(${collage1})` }}>
          <StyledCollageContainer>
            <StyledStatement style={{ paddingTop: "29px" }}>
              2020 marked the start of an incredibly difficult time period. It
              is easy to say that hindsight is 2020, but we do not live in the
              past and unfortunately can’t change the present — what we can do
              is learn, grow, and look toward the future with 20/20 vision.
            </StyledStatement>
          </StyledCollageContainer>
        </StyledImgDiv>
        <FeaturedSpeakersText style={{ marginTop: "100px" }}>
          Featured Speakers
        </FeaturedSpeakersText>
        <StyledSpeakerContainer>
          <div
            class="ui grid"
            style={{
              marginTop: "64px",
              columnGap: "65px",
            }}>
            <div class="column" className="col_type1">
              <ExecCard
                img={andrew_guy2}
                name="Andrew Guy"
                position="Find the Good in Humanity"
                description="Andrew is a MACP candidate, he has earned degrees from Southern
                Arkansas University, dual BSc in Medical Biology, Exercise Science, MSc,
                Master of Science in sports medicine (Kinesiology). Andrew is a
                professionally certified educator, Professional Teacher PD facilitator,
                and a former teacher of the year."
              />
            </div>
            <div class="column" className="col_type1">
              <ExecCard
                img={anh_le2}
                name="Anh Le"
                position="How to Optimize Your Odds for the Best Outcome?"
                description="
                I am currently a data scientist with a keen interest in developing insights.  
                With a background in Biotech, Engineering, and Finance from the University of Waterloo (both a Bachelor and a Master), 
                my insatiable curiosity and a strong desire to make an impact beyond myself have allowed me to step outside my comfort zones.
                "
              />
            </div>
            <div class="column" className="col_type1">
              <ExecCard
                img={chris_costa2}
                name="Chris Costa"
                position="Choose Love, Not Fear"
                description="The founder of The Costa Group and Change in Motion. Chris has figured out how to turn the most adversity into an engine for positive change. Both for himself and his community. Throughout his life he’s experienced violence, incarceration, and addiction – and perhaps most difficult for him; he made choices which kept him away from his passion as an athlete. Now 20 years later, he’s not only overcome his past but he’s speaking out against domestic violence. He used sport to reconnect with his past, heal it and use that experience to help his local community. He is a competitive middle-distance runner who’s competed internationally for Canada as a master’s athlete and kickboxer."
              />
            </div>
            <div class="column" className="col_type1">
              <ExecCard
                img={iman_salehi2}
                name="Iman Salehi"
                position="Can We Treat Cancer During a Pregnancy?"
                description="Iman Salehi is a third-year student at the University of Waterloo studying Health Studies with a minor in Medical Physiology. During his co-operative education work terms, Iman’s primary focus has been on breast cancer research, with a deeper focus on the rare occurrence of breast cancer diagnosed during pregnancy. In his most recent co-op at Mount Sinai Hospital, he collaborated with a multidisciplinary care team including physicians and oncology and obstetrical nurses to develop a comprehensive course on the topic of breast cancer diagnosed during pregnancy. In October, Iman and his research team presented their research and course at the Canadian Association of Nurses in Oncology conference and won first place for the Educational category. Today, Iman and his team continue to expand on their breast cancer in pregnancy course, with the objective to add more cancer sites. The application of Iman’s and his team’s research aims to educate oncology and obstetrical health care professionals on the importance of using evidence-based medicine to shape their clinical practice."
              />
            </div>
            <div class="column" className="col_type1">
              <ExecCard
                img={karandeep_gill2}
                name="Karandeep Gill"
                position="How to Achieve Resilience Through Self-Compassion"
                description="Karandeep Gill is a speech communication and business undergrad student at the University of Waterloo. Last year, she was appointed as Canada’s 2020 Face of Mental Illness. She was granted this extraordinary title for her advocacy for adolescent and South Asian mental health, along with sharing her undefeatable recovery and survival journey while living with a mental illness like Schizoaffective Disorder-Bipolar Type. Her research revolves around how one can overpower traumatic experiences like extreme paranoia, vivid hallucinations, and suicidal ideation through the art of self-compassion. She will explain how being resilient doesn’t stem solely from not giving up, but rather taking care of one's mind, body, and soul during the process."
              />
            </div>
            <div class="column" className="col_type1">
              <ExecCard
                img={thomas_lenhard2}
                name="Thomas Lenhard"
                position="Cry Like A Man: Modeling Positive Masculinity"
                description="Lenny Lenhard is the founder of the Modern Manhood project, which works with Montreal high schoolers to positively reimagine what it means to be a man. Rather than tell boys who they should be, the program helps boys build the self-confidence and emotional literacy to express an authentic version of themselves, free from the constraints that patriarchy imposes upon us all. Operating with a core set of lesson plans, the program - run by men, for men - discusses topics ranging from body image to sex and beyond. As a recent McGill graduate, his insights are informed by his own experiences, as well as his background in sociology - a domain which has challenged him to question how people operate in systems we take for granted."
              />
            </div>
            <div class="column" className="col_type1">
              <ExecCard
                img={tanner_philp2}
                name="Tanner Philp"
                position="Enter the Metaverse"
                description="Tanner is the Head of Corporate Development and Operations for Code Inc., a cryptocurrency wallet for mainstream consumers. Tanner helped launch the cryptocurrency Kin on Ethereum, the development of the Kin Blockchain, and the subsequent migration to the Solana blockchain - the largest migration in the history of crypto. Prior to Code Inc. Tanner was the Head of Corp Dev at Kik Messenger, a chat app with over  a half a billion users. While at Kik, Tanner helped execute three strategic financings, four acquisitions, and two divestitures across North America, Asia, and Europe. 
 
                Outside of his professional experience Tanner has been an early contributor to some of the leading cryptocurrency projects, dating back to 2014. He also served as a three time captain for the Laurier Varsity Football Team where he was also an Academic All Canadian. While at Laurier Tanner was the Head of Student Athlete Academic Success, a lab instructor for Business, Calculus, and Economics, and the VP of the Lettermen Association - a group dedicated to community outreach for Laurier Athletics.
                "
              />
            </div>
          </div>
        </StyledSpeakerContainer>
      </div>
    );
  }
}
export default LandingPageComponent;
