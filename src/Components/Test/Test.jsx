// import { useState } from "react";

// const Test = () => {
//   const [data, setData] = useState("");
//   console.log(data);
//   return (
//     <div>
//       <div>
//         <label htmlFor="">Text </label>
//         <input onChange={(e) => setData(e.target.value)} type="text" />
//       </div>
//       <div>
//         <label htmlFor="">color </label>
//         <input onChange={(e) => setData(e.target.value)} type="color" />
//       </div>
//       <div>
//         <label htmlFor="">time </label>
//         <input onChange={(e) => setData(e.target.value)} type="time" />
//         <p>{data}</p>
//       </div>
//       <div>
//         <label htmlFor="">range </label>
//         <input onChange={(e) => setData(e.target.value)} type="range" />
//       </div>
//       <div>
//         <label htmlFor="">week </label>
//         <input onChange={(e) => setData(e.target.value)} type="week" />
//       </div>
//     </div>
//   );
// };

// export default Test;
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
// import ReactLottie from "../React-lottie/ReactLottie";
// import "./ProductList.css";

// const productData = [
//   {
//     _id: "661408ffb6952535a7466c59",
//     email: "alsafa024@gmail.com",
//     product_name: "Phone0200",
//     product_Category: "Phone",
//     product_price: 4545,
//     product_discount: "0",
//     product_discountedPrice: "4545.00",
//     product_quantity: null,
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptates, velit error accusamus placeat nam deserunt culpa perspiciatis. Dicta explicabo animi libero in voluptatem dolore enim neque nihil culpa et!",
//     image:
//       "https://i.ibb.co/rQj32wZ/desktop-wallpaper-nancy-momoland-korean-singer.jpg",
//     product_rating: 5,
//     product_totalSell: null,
//   },
//   {
//     _id: "66140910b6952535a7466c5a",
//     email: "alsafa024@gmail.com",
//     product_name: "office10",
//     product_Category: "Office Equipment",
//     product_price: 4242,
//     product_discount: "42",
//     product_discountedPrice: "2460.36",
//     product_quantity: null,
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptates, velit error accusamus placeat nam deserunt culpa perspiciatis. Dicta explicabo animi libero in voluptatem dolore enim neque nihil culpa et!",
//     image: "https://i.ibb.co/k17y5Nq/sukuna-4k.jpg",
//     product_rating: 4,
//     product_totalSell: null,
//   },
//   {
//     _id: "661e9154dcb4daf06ed3baad",
//     email: "mongo@db.com20",
//     product_name: "Doi Yogurt Maker",
//     product_Category: "Home Appliance",
//     product_price: 1500,
//     product_discount: 5,
//     product_discountedPrice: "1425.00",
//     product_quantity: null,
//     description:
//       "Automatic Stainless Steel - ABS + PP - 220-240V - 15W - 1L Capacity - On/Off Switch - Light Indicator - 7-9 Hours Preparation Time - Doi Yogurt Maker\n",
//     image: "https://i.ibb.co/Fm9qwBg/home-appliance-4.jpg",
//     product_rating: 4.5,
//     product_totalSell: null,
//   },
//   {
//     _id: "661e922ddcb4daf06ed3baae",
//     email: "mongo@db.com20",
//     product_name: "VISION Blender",
//     product_Category: "Wardrobe",
//     product_price: 950,
//     product_discount: 10,
//     product_discountedPrice: "855.00",
//     product_quantity: 11,
//     description:
//       "VISION Blender High speed (VIS-HSBL-008) 100% Pure Copper Motor",
//     image: "https://i.ibb.co/47PDJQL/home-appliance-1.jpg",
//     product_rating: 4,
//     product_totalSell: 4,
//   },
//   {
//     _id: "661e9277dcb4daf06ed3baaf",
//     email: "mongo@db.com20",
//     product_name: "Vision Dry Iron ",
//     product_Category: "Home Appliance",
//     product_price: 980,
//     product_discount: 12,
//     product_discountedPrice: "862.40",
//     product_quantity: 12,
//     description:
//       "Vision Dry Iron Model Vis-Dei-007 Non-Sticky Coating Sole Plate 1150Watt - Iron Machine: Ironing Made Easy",
//     image: "https://i.ibb.co/znY1DkK/home-appliance-2.jpg",
//     product_rating: 4.5,
//     product_totalSell: 0,
//   },
//   {
//     _id: "661e931c16e361af823af422",
//     email: "mongo@db.com20",
//     product_name: "PREETHI GRINDER POWER GRIND (PREETHIPOWERGRIND)",
//     product_Category: "Home Appliance",
//     product_price: 960,
//     product_discount: "0",
//     product_discountedPrice: "960.00",
//     product_quantity: 15,
//     description:
//       "PREETHI GRINDER POWER GRIND (PREETHIPOWERGRIND).PREETHI GRINDER POWER GRIND (PREETHIPOWERGRIND)",
//     image: "https://i.ibb.co/4YxBRsB/home-appliance-3.webp",
//     product_rating: 4.2,
//     product_totalSell: 0,
//   },
// ];
// const productData =[  {
//   _id: "661408ffb6952535a7466c59",
//   email: "alsafa024@gmail.com",
//   product_name: "Phone0200",
//   product_Category: "Phone",
//   product_price: 4545,
//   product_discount: "0",
//   product_discountedPrice: "4545.00",
//   product_quantity: null,
//   description:
//     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptates, velit error accusamus placeat nam deserunt culpa perspiciatis. Dicta explicabo animi libero in voluptatem dolore enim neque nihil culpa et!",
//   image:
//     "https://i.ibb.co/rQj32wZ/desktop-wallpaper-nancy-momoland-korean-singer.jpg",
//   product_rating: 5,
//   product_totalSell: null,
// },
// {
//   _id: "66140910b6952535a7466c5a",
//   email: "alsafa024@gmail.com",
//   product_name: "office10",
//   product_Category: "Office Equipment",
//   product_price: 4242,
//   product_discount: "42",
//   product_discountedPrice: "2460.36",
//   product_quantity: null,
//   description:
//     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptates, velit error accusamus placeat nam deserunt culpa perspiciatis. Dicta explicabo animi libero in voluptatem dolore enim neque nihil culpa et!",
//   image: "https://i.ibb.co/k17y5Nq/sukuna-4k.jpg",
//   product_rating: 4,
//   product_totalSell: null,
// },]
const categorySize = [
  { size: "0-3 months" },
  { size: "3-6 month’s" },
  { size: "12 month" },
  { size: "18 month" },
];
const productCategoryTypes = [
  { name: "Rampers" },
  { name: "Half T-shirt" },
  { name: "Full T-shirt" },
];
const Test = () => {
  const [loading, setLoading] = useState(false);
  const [selectedSize, setSelectedSize] = useState(categorySize[0].size);
  // const [productData, setProductData] = useState([]);
  // const [categoryName, setCategoryName] = useState(category[0].size);
  // console.log("selectedSize", selectedSize);
  const { data: productData } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      return res.data;
    },
  });
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/comments")
  //     .then((res) => res.json())
  //     .then((data) => setProductData(data));
  // }, []);
  //   const { refetch, data: users = [] } = useQuery({
  //     queryKey: ["users"],
  //     queryFn: async () => {
  //          const res = await axiosPublic.get("/users");
  //          return res.data;
  //     },
  // });

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };
  return (
    <div className="mb-5">
      <div className="container mx-auto">
        {loading ? (
          <div className="text-center">
            {/* <ReactLottie /> */}
            <p>loading</p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-5 md:px-5 lg:px-10">
            {/* left div */}
            <div className="min-w-full md:min-w-[220px] h-full md:min:h-[600px] bg-gradient-to-t to-[#FEFEFE] from-[#85C9CC] py-5 px-3 rounded-3xl">
              {/* show category */}
              <h1 className="text-2xl font-extrabold black text-center mb-5">
                {/* {productData?.map((item) => (
                  <div key={item.id}>
                    <h1>{item.name}</h1>
                  </div>
                ))} */}
              </h1>
              {/* Sub Categories */}
              <div>
                <h2 className="text-xl font-extrabold black mb-1">Category</h2>
                {productCategoryTypes.map((item) => (
                  <div
                    key={item.name}
                    className="ml-10 text-base black font-medium space-y-5 cursor-pointer"
                  >
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
              <div className="border-2 border-gray-400 w-[70%] mx-auto my-4"></div>
              {/* Short by size’s */}
              <div className="flex flex-col">
                <h2 className="text-xl black font-extrabold mb-1">
                  Short by size’s
                </h2>
                <div className="flex flex-col ml-5 black font-medium space-y-1">
                  {categorySize.map((category, index) => (
                    <label className="cursor-pointer" key={index}>
                      <input
                        type="radio"
                        id={category?.size.replace(/\s+/g, "-").toLowerCase()}
                        name="duration"
                        value={category?.size}
                        // defaultChecked={index === 0}
                        onChange={handleSizeChange}
                        style={{
                          appearance: "none",
                          backgroundColor:
                            selectedSize === category?.size
                              ? "rgb(12, 230, 12)"
                              : "#FFFFFF",
                          width: "14px",
                          height: "14px",
                          border: "none",
                          borderRadius: "0",
                        }}
                        className="checked:bg-green-700"
                      />
                      <span className="ml-2 text-base">{category?.size}</span>
                    </label>
                  ))}
                  <p>{selectedSize}</p>
                </div>

                {/* <p className="text-xl my-5 text-center">
            Selected size: {selectedSize}
          </p> */}
              </div>
              <div className="border-2 border-gray-400 w-[70%] mx-auto my-4"></div>
              {/* Combo pack */}
              <div>
                <h2 className="text-xl font-extrabold black mb-1">
                  Combo pack
                </h2>
                {/* <div className="ml-5 text-sm black font-medium space-y-1">
            <p>Rampers</p>
            <p>Half T-shirt</p>
            <p>Full T-shirt</p>
          </div> */}
              </div>
              <div className="border-2 border-gray-400 w-[70%] mx-auto my-4"></div>
              {/* Gift pack */}
              <div>
                <h2 className="text-xl font-extrabold black mb-1">Gift pack</h2>
                {/* <div className="ml-5 text-sm black font-medium space-y-1">
            <p>Rampers</p>
            <p>Half T-shirt</p>
            <p>Full T-shirt</p>
          </div> */}
              </div>
              <div className="border-2 border-gray-400 w-[70%] mx-auto my-4"></div>
            </div>
            {/* card div */}
            <div className="w-full">
              {productData?.length === 0 ? (
                <div className="w-full h-[50vh] flex justify-center items-center">
                  <h1 className="black font-bold text-3xl">
                    Products not available...
                  </h1>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:px-">
                  {productData?.map((item) => (
                    <div
                      key={item._id}
                      className="border flex flex-col border-[#000000] rounded-xl overflow-hidden"
                    >
                      <div className="">
                        <img
                          className="object-fill h-[300px] md:h-[250px] lg:h-[250px] xl:h-[300px] w-full"
                          src={item?.thumbnail}
                          alt=""
                        />
                      </div>
                      <div className="grow w-full h-full">
                        <div className="flex flex-col gap-1 px-2 mt-2">
                          <h1 className="text-base font-medium black grow">
                            {/* {item?.title} */}
                            {item?.name}
                          </h1>
                          <p className="text-xs font-normal black">
                            {/* {item?.description} */}
                            {item?.email}
                          </p>
                          <p className="text-xs font-normal black">
                            {/* {item?.description} */}
                            {item?.body}
                          </p>
                          <p className="text-lg font-medium black">
                            <span className="text-xs font-normal mr-1">
                              TAKA:
                            </span>
                            <span className="text-xl red-text font-bold">
                              {item?.price}
                            </span>
                            <span className="text-xs font-normal ml-1">tk</span>
                          </p>
                        </div>
                      </div>
                      <button className="w-full cart-btn font-bold text-2xl">
                        Add to cart
                      </button>
                    </div>
                  ))}
                  {/* // Add additional empty divs if less than 3 products */}
                  {/* {[...Array(Math.max(0, 3 - productData?.length))].map(
                    (_, index) => (
                      <div
                        key={index}
                        className="w-full h-[200px] border border-transparent"
                      />
                    )
                  )} */}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
// import React from "react";
// import "./test.css";
// const Test = () => {
//   return (
//     <div className="myContainer">
//       <h2 className="text border-right">
//         Welcome to React
//         {/* <span className="border-right animate-pulse"></span> */}
//       </h2>
//     </div>
//   );
// };

// export default Test;
