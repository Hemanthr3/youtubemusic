import React from "react";
import SectionHeader from "../sectionheader";
import SectionCard from "../sectionheader/sectioncard";

const Section = () => {
  return (
    <div className="my-32">
      <SectionHeader headerText="From the community" />
      <div className="section-items grid grid-cols-6 gap-3 mt-3">
       <SectionCard/>
       <SectionCard/>
       <SectionCard/>
       <SectionCard/>
       <SectionCard/>
       <SectionCard/>

      </div>
    </div>
  );
};

export default Section;
