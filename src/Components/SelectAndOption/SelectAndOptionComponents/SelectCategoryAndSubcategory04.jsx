import { useCallback, useState } from "react";
import axios from "axios";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${"Your_image_hosting_key without invitedcoma"}`;
const ManageProductCategory = () => {
  const [showNames, setShowNames] = useState([]);
  console.log(showNames);
  const [categoryName, setCategoryName] = useState("");
  const [subCategories, setSubCategories] = useState([
    { name: "", image: null },
  ]);
  console.log("subCategories", subCategories);
  const [openModal, setOpenModal] = useState(false);
  // Modify the function to handle changing image state for a specific index
  const handleImageChange = useCallback((index, imageFile) => {
    setShowNames((prevShowNames) => {
      const updatedShowNames = [...prevShowNames];
      updatedShowNames[index] = imageFile;
      return updatedShowNames;
    });
  }, []);
  const handleCategoryNameChange = useCallback((e) => {
    setCategoryName(e.target.value);
  }, []);
  // jokhon suncategory input field a kisu likha hoy tokhon sei text ta ekta new array te set kore.
  const handleSubCategoryNameChange = useCallback(
    (index, field, value) => {
      const updatedSubCategories = [...subCategories];
      updatedSubCategories[index][field] = value;
      console.log("updatedSubCategories", updatedSubCategories);
      setSubCategories(updatedSubCategories);
    },
    [subCategories]
  );
  const handleAddSubCategory = useCallback(() => {
    setSubCategories((prevSubCategories) => [
      ...prevSubCategories,
      { name: "", image: null },
    ]);
    setShowNames((prevShowNames) => [
      ...prevShowNames,
      {}, // Add a new object for the new subcategory
    ]);
  }, []);
  const handleSubmitInfo = useCallback(
    async (e) => {
      e.preventDefault();
      // const imageFile = { image: showName };
      // const response = await axios.post(image_hosting_api, imageFile, {
      //   headers: { "Content-Type": "multipart/form-data" },
      // });
      // if (response.data.success) {
      //   console.log(response.data);
      //   const subCategoryImage = response.data.data.display_url;
      //   console.log(subCategoryImage);
      // }
      // Upload images to imgbb hosting site
      const uploadPromises = showNames.map((imageFile) => {
        const formData = new FormData();
        formData.append("image", imageFile);
        console.log("formData", formData);
        return axios.post(image_hosting_api, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      });
      const responses = await Promise.all(uploadPromises);
      const imageUrls = responses.map((response) => {
        return response.data.data.display_url;
      });
      const categoryInfo = {
        category: categoryName,
        subCategories: subCategories
          .filter((subCategory) => subCategory.name.trim() !== "")
          .map((subCategory, index) => ({
            name: subCategory.name,
            image: imageUrls[index],
          })),
      };

      console.log(imageUrls);
      console.log(categoryInfo);
      console.log(responses.data);
    },
    [categoryName, subCategories, showNames]
  );
  return (
    <div>
      {/* Add category div */}
      <div className="text-center">
        <h1 className="my-3 text-2xl font-bold">
          Select With Image (using onchange handler)
        </h1>
        <button
          onClick={() => setOpenModal(true)}
          className="rounded-md bg-sky-500 px-5 py-[6px] text-white mx-auto"
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
            className={`absolute w-[90%] md:w-[60%] lg:w-[40%] rounded-lg bg-white p-3 pb-5 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
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
                  <div className="flex flex-col gap-3">
                    {/* subcategory name */}
                    <input
                      name={`subCategoryName_${index}`}
                      type="text"
                      placeholder="Subcategory Name"
                      className="input input-bordered w-full text-black"
                      value={subCategory.name}
                      onChange={(e) =>
                        handleSubCategoryNameChange(
                          index,
                          "name",
                          e.target.value
                        )
                      }
                    />
                    <div className="flex justify-center">
                      <label
                        className="flex h-full w-max items-end gap-4 rounded-md bg-cyan-500 px-6 py-4 text-white active:ring-4 active:ring-cyan-200"
                        htmlFor={`file_${index}`}
                      >
                        <p className="text-lg font-medium">
                          {showNames[index]?.name
                            ? showNames[index].name
                            : "Upload"}
                        </p>
                      </label>
                      <input
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            const imageFile = e.target.files[0];
                            handleImageChange(index, imageFile);
                          }
                        }}
                        className="hidden"
                        id={`file_${index}`}
                        type="file"
                      />
                    </div>
                    {/* Add more btn */}
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

export default ManageProductCategory;
