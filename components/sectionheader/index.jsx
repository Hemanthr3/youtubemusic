import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";


const SectionHeader = ({ headerText }) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-white text-3xl  font-bold">{headerText}</h1>
      <div className="section-nav-controls flex items-center gap-4">
        <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
          <FiChevronLeft className="text-white" />
        </button>
        <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
          <FiChevronRight className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default SectionHeader;
