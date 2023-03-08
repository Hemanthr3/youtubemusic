import React from "react";
import SectionHeader from "../sectionheader";
import SectionCard from "../sectionheader/sectioncard";

const Section = () => {
  return (
    <div className="my-32">
      <SectionHeader headerText="From the community" />
      <div className="section-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-3">
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </div>
    </div>
  );
};

export default Section;
