import { useState } from "react";

const SelectCategoryAndSubcategory01 = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  console.log("", selectedCategory);
  console.log("selectedSubcategory", selectedSubcategory);

  // Define your data structure
  const data = [
    { category: "car", subcategories: ["tesla", "bmw", "toyota"] },
    { category: "mobile", subcategories: ["samsung", "iphone", "other"] },
    { category: "Cloth", subcategories: ["men", "women"] },
    {
      category: "wardrobe",
      subcategories: ["clothes", "shoes", "accessories"],
    },
  ];

  // Extract categories from data
  const categories = data?.map((item) => item.category);

  // Extract subcategories for the selected category
  const subcategories = selectedCategory
    ? data.find((item) => item?.category === selectedCategory).subcategories
    : [];
  // const find = data.find(
  //   (item) => (item.category === selectedCategory).subcategories
  // );
  console.log(subcategories);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory(""); // Reset subcategory when category changes
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedCategory);
    console.log(selectedSubcategory);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="text-center border w-[50%] mx-auto bg-white rounded-xl"
      >
        <div className="flex gap-5 justify-center">
          {/* category div */}
          <div className="">
            <label className="label">
              <span className="">Product Category</span>
            </label>
            <select
              defaultValue="default"
              // value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option disabled value="default">
                Select Category
              </option>
              {categories?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          {/* sub-category div */}
          <div className="">
            <label className="label">
              <span className="">Product Subcategory</span>
            </label>
            <div>
              <select
                defaultValue="default"
                // value={selectedSubcategory}
                onChange={handleSubcategoryChange}
              >
                <option disabled value="default">
                  Select Category
                </option>
                {subcategories?.map((subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* submit btn */}
        <button type="submit" className="btn my-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SelectCategoryAndSubcategory01;
