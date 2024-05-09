import { useCallback, useState } from "react";

const SelectCategoryAndSubcategory02 = () => {
  const [categoryName, setCategoryName] = useState("");
  const [subCategories, setSubCategories] = useState([""]);
  const [openModal, setOpenModal] = useState(false);
  const handleCategoryNameChange = useCallback((e) => {
    setCategoryName(e.target.value);
  }, []);

  const handleSubCategoryNameChange = useCallback(
    (index, e) => {
      const updatedSubCategories = [...subCategories];
      updatedSubCategories[index] = e.target.value;
      setSubCategories(updatedSubCategories);
    },
    [subCategories]
  );

  const handleAddSubCategory = useCallback(() => {
    setSubCategories((prevSubCategories) => [...prevSubCategories, ""]);
  }, []);
  const handleSubmitInfo = useCallback(
    (e) => {
      e.preventDefault();
      const categoryInfo = {
        category: categoryName,
        subCategories: subCategories.filter(
          (subCategory) => subCategory.trim() !== ""
        ),
      };
      console.log(categoryInfo);
    },
    [categoryName, subCategories]
  );
  return (
    <div>
      <div className="text-center">
        <button
          onClick={() => setOpenModal(true)}
          className="rounded-md bg-sky-500 px-5 py-[6px] text-white"
        >
          Add Categories
        </button>
        <div
          className={`fixed z-[100] flex items-center justify-center ${
            openModal
              ? "opacity-1 visible overflow-y-aut"
              : "invisible opacity-0"
          } inset-0 bg-black/20 backdrop-blur-sm duration-100 borer border-red-700`}
        >
          <div
            className={`absolute max-w-md rounded-lg bg-white p-3 pb-5 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
              openModal
                ? "scale-1 opacity-1 duration-300 my-10"
                : "scale-0 opacity-0 duration-150"
            } `}
          >
            <svg
              onClick={() => setOpenModal(false)}
              className="mx-auto mr-0 w-8 cursor-pointer fill-black dark:fill-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
              </g>
            </svg>
            <h1 className="mb-2 text-2xl font-semibold">Add Category Info</h1>
            <form
              onSubmit={handleSubmitInfo}
              className="text-center max-h-[80vh] overflow-auto"
            >
              <div className="w-full">
                <label className="label">
                  <span className="text-black font-medium">Category Name</span>
                </label>
                <input
                  name="CategoryName"
                  type="text"
                  placeholder="Category Name"
                  className="input input-bordered w-full text-black"
                  value={categoryName}
                  onChange={handleCategoryNameChange}
                  required
                />
              </div>

              {subCategories.map((subCategory, index) => (
                <div key={index} className="w-full mt-3">
                  <label className="label">
                    <span className="text-black font-medium">
                      Subcategory {index + 1}
                    </span>
                  </label>
                  <div className="flex gap-3">
                    <input
                      name={`subCategoryName_${index}`}
                      type="text"
                      placeholder="Subcategory Name"
                      className="input input-bordered w-full text-black"
                      value={subCategory}
                      onChange={(e) => handleSubCategoryNameChange(index, e)}
                    />
                    {index === subCategories.length - 1 && (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleAddSubCategory}
                      >
                        Add More
                      </button>
                    )}
                  </div>
                </div>
              ))}

              <button className="btn my-5">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCategoryAndSubcategory02;
