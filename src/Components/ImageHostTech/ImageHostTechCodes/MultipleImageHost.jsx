import { useState } from "react";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_key = "b92f0e043ab0dd42b55a97ed25fdcd19";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const MultipleImageHost = () => {
  const [showImageDetails, setShowImageDetails] = useState([]);
  const [showImagePreview, setShowImagePreview] = useState([]);
  const [showUploadingImage, setShowUploadingImage] = useState([]);
  console.log("showImageDetails", showImageDetails);
  console.log("showImagePreview", showImagePreview);
  //   const [myImages, setMyImages] = useState([]);
  //   const [imageArray, setImageArray] = useState([]);
  const handleHostImage = async (e) => {
    e.preventDefault();
    // Check if images are selected
    if (!showImageDetails || showImageDetails.length === 0) {
      alert("Please select images first.");
      return;
    }
    const uploadPromises = showImageDetails.map((imageFile) => {
      const formData = new FormData();
      formData.append("image", imageFile);
      // Send a POST request using axios
      //   return axios.post(image_hosting_api, formData, {
      //     headers: { "Content-Type": "multipart/form-data" },
      //   });
      //   Send a POST request using fetch
      return fetch(image_hosting_api, {
        method: "POST",
        body: formData,
      }).then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      });
    });
    console.log(uploadPromises);

    const responses = await Promise.all(uploadPromises);
    console.log(responses);
    const imageUrls = responses.map((response) => response.data.display_url);
    console.log(imageUrls);
    setShowUploadingImage(imageUrls);

    // Create an array of objects with image URLs and IDs
    // const myImages = imageUrls.map((imageUrl, index) => ({
    //   id: index + 1, // Generate IDs based on the index
    //   image: imageUrl,
    // }));
    // console.log(myImages);

    // // Create an array to store promises for each image upload
    // const uploadPromises = [];

    // // Create an array to store the image URLs
    // const imageUrls = [];

    // // Iterate over each selected image
    // showImageDetails.forEach((imageFile) => {
    //   const formData = new FormData();
    //   formData.append("image", imageFile);

    //   // Create a promise for each image upload
    //   const uploadPromise = fetch(image_hosting_api, {
    //     method: "POST",
    //     body: formData,
    //   }).then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   });

    //   // Add the promise to the array
    //   uploadPromises.push(uploadPromise);
    // });

    // // Execute all upload promises concurrently
    // Promise.all(uploadPromises)
    //   .then((responses) => {
    //     // Handle successful uploads
    //     responses.forEach((response) => {
    //       // Push the display URL of each image to the imageUrls array
    //       imageUrls.push(response.data.data.display_url);
    //     });

    //     // Create an array of objects with image URLs and IDs
    //     const myImages = imageUrls.map((imageUrl, index) => ({
    //       id: index + 1, // Generate IDs based on the index
    //       image: imageUrl,
    //     }));

    //     // Use or store the 'myImages' array as needed
    //     console.log("Uploaded images:", myImages);
    //   })
    //   .catch((error) => {
    //     // Handle upload errors
    //     console.error("Error uploading images:", error);
    //   });
  };
  // const handleHostImage = async (e) => {
  //     e.preventDefault();
  //     // Check if images are selected
  //     if (!showImageDetails || showImageDetails.length === 0) {
  //       alert("Please select images first.");
  //       return;
  //     }
  //     const uploadPromises = showImageDetails.map((imageFile) => {
  //       const formData = new FormData();
  //       formData.append("image", imageFile);
  //       // Send a POST request using fetch
  //       return fetch(image_hosting_api, {
  //         method: "POST",
  //         body: formData,
  //       }).then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.json(); // Parse JSON response
  //       });
  //     });

  //     try {
  //       const responses = await Promise.all(uploadPromises);
  //       const imageUrls = responses.map(
  //         (response) => response.data.display_url // Access data directly
  //       );
  //       console.log(imageUrls); // Log the image URLs
  //     } catch (error) {
  //       // Handle errors
  //       console.error("Error uploading images:", error);
  //     }
  //   };

  const handleRemoveImage = (index) => {
    // Remove the image at the specified index from the arrays
    const updatedShowName = [...showImageDetails];
    const updatedShowImagePreview = [...showImagePreview];
    updatedShowName.splice(index, 1);
    updatedShowImagePreview.splice(index, 1);
    setShowImageDetails(updatedShowName);
    setShowImagePreview(updatedShowImagePreview);
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-medium">Multiple Image Host</h1>
      <div>
        {/* <form onSubmit={handleImage}> */}
        <div className="">
          <div className="flex gap-5 justify-center my-5">
            {showUploadingImage?.map((image, index) => (
              <div key={index}>
                <img className="size-[120px]" src={image} alt="" />
              </div>
            ))}
          </div>
          <div className="relative border border-green-700 mx-auto">
            {showImageDetails?.length > 0 ? (
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {showImageDetails.map((image, index) => (
                  <div
                    key={index}
                    className="border border-red-600 rounded-xl overflow-hidden relative my-2"
                  >
                    <img
                      className="h-16 w-16 md:h-28 md:w-28 object-cover"
                      src={showImagePreview[index]}
                      alt={image?.name}
                    />
                    {/* <p>{image.name}</p> */}
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-0 bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <img
                className="h-16 w-16 md:h-28 md:w-28 border rounded-full mx-auto"
                src="https://i.ibb.co/DfqYt0s/image.png"
                alt=""
              />
            )}

            {/* <div className="absolute -bottom-2 right-0 border p-[2px] rounded-full back-bg text-xl md:text-3xl">
            <label htmlFor="file" className="cursor-pointer">
              ok
            </label>
          </div> */}
            <div>
              <label
                className="flex btn justify-center items-center gap-2font-bold active:ring-4 upload-image-btn cursor-pointer text-black"
                htmlFor="multipleFiles"
              >
                Upload Product Image
                {/* <MdOutlineFileUpload size={30} /> */}
              </label>
            </div>
            <input
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  const selectedImages = Array.from(e.target.files);
                  console.log(selectedImages);
                  const imagePreviews = selectedImages.map((image) =>
                    URL.createObjectURL(image)
                  );
                  setShowImageDetails(selectedImages);
                  setShowImagePreview(imagePreviews);
                }
              }}
              className="-z-0 absolute -top-[1000px]"
              id="multipleFiles"
              type="file"
              multiple // Add this attribute to allow multiple file selection
            />
          </div>
          <button
            className="btn w-full my-2 bg-gray-500 mx-auto text-center"
            onClick={handleHostImage}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultipleImageHost;
