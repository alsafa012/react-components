import React from "react";
import SelectCategoryAndSubcategory01 from "../SelectAndOptionComponents/SelectCategoryAndSubcategory01";
import SelectCategoryAndSubcategory02 from "../SelectAndOptionComponents/SelectCategoryAndSubcategory02";
import SelectCategoryAndSubcategory03 from "../SelectAndOptionComponents/SelectCategoryAndSubcategory03";
import SelectCategoryAndSubcategory04 from "../SelectAndOptionComponents/SelectCategoryAndSubcategory04";

const AllSelectAndOption = () => {
  return (
    <div className="mt-10 container mx-auto space-y-5">
      <SelectCategoryAndSubcategory01 />
      <SelectCategoryAndSubcategory02 />
      <SelectCategoryAndSubcategory03 />
      <SelectCategoryAndSubcategory04 />
    </div>
  );
};

export default AllSelectAndOption;
