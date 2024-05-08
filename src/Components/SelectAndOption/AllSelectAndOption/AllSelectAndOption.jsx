import React from "react";
import SelectCategoryAndSubcategory01 from "../SelectAndOptionComponents/SelectCategoryAndSubcategory01";
import SelectCategoryAndSubcategory02 from "../SelectAndOptionComponents/SelectCategoryAndSubcategory02";

const AllSelectAndOption = () => {
  return (
    <div className="mt-10 container mx-auto space-y-5">
      <SelectCategoryAndSubcategory01 />
      <SelectCategoryAndSubcategory02 />
    </div>
  );
};

export default AllSelectAndOption;
