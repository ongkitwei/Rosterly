import React from "react";

function Filter({ handleBedokFilter, handleDieppeFilter, handleAllData }) {
  return (
    <div className="filter pb-8">
      <input
        className="btn filter-reset"
        type="radio"
        name="metaframeworks"
        aria-label="All"
      />
      <input
        className="btn bg-slate-100"
        type="radio"
        name="metaframeworks"
        aria-label="Bedok"
        onChange={handleBedokFilter}
      />
      <input
        className="btn bg-slate-100"
        type="radio"
        name="metaframeworks"
        aria-label="Dieppe"
        onChange={handleDieppeFilter}
      />
      <input
        className="btn bg-slate-100"
        type="radio"
        name="metaframeworks"
        aria-label="All"
        onChange={handleAllData}
      />
    </div>
  );
}

export default Filter;
