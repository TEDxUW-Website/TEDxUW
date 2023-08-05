import React from "react";

import SectionMain from "../../components/SectionMain";
import mountainsBackground from "../../res/images/mountainsBackground.svg";

export default function Blog() {
  return (
    <>
      <Header />
      <SectionMain
        mainTitle="Blog"
        subTitle="Check out our articles here."
        bgImg={mountainsBackground}
      />
    </>
  );
}
