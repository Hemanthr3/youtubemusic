import React from "react";
import SectionHeader from "../sectionheader";
import SectionCard from "../sectionheader/sectioncard";

const Section = ({ name, items }) => {
  console.log(`Album `, items);
  return (
    <div className="my-32">
      <SectionHeader headerText={name} />
      <div className="section-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-3">
        {items
          .filter((item) => item.images.length)
          .map((item, i) => {
            return (
              <SectionCard
                key={i}
                images={item.images}
                name={item.name}
                uri={item.uri}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Section;
