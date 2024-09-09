import React, { useEffect, useState } from "react";
import ShowAllProductPage from "../AllProductPage/ShowAllProductPage";

const GridLayout = () => {
  const productCategories = [
    { id: 1, subCategory: "Jogger" },
    { id: 2, subCategory: "pant" },
    { id: 3, subCategory: "trouser" },
    { id: 4, subCategory: "category" },
    { id: 5, subCategory: "Shorts" },
    { id: 6, subCategory: "Hoodie" },
    { id: 7, subCategory: "category" },
    { id: 8, subCategory: "Shorts" },
    { id: 9, subCategory: "Hoodies" },
  ];
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addProduct")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);
  // console.log(allProduct);
  return (
    <div>
      <div className="container mx-auto overflow-hidden">
        {/* parent */}
        <div className="max-h-screen grid grid-cols-12 md:px-2">
          {/* left */}
          <div className="md:max-h-screen w-[100%] col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-2 md:overflow-y-auto h-full">
            <div className="mx-auto md:flex md:gap-1 justify-center rounded-xl border border-yellow-300 h-full md:px-2 md:pt-5 lg:md:pt-5 overflow-auto">
              {/* main category */}
              <div className="block">
                <h1 className="text-2xl md:text-2xl font-bold text-center">
                  Boys
                </h1>
              </div>
              {/* sub category */}
              <div className="font-medium flex md:flex-col text-lg md:text-xl items-center md:items-stretch mt-5 md:mt-16 grow w-full flex-wrap md:flex-nowrap gap-2 justify-center md:justify-stretch mb-5 md:mb-0">
                {productCategories.map((category) => (
                  <button
                    key={category.id}
                    className="btn whitespace-wrap text-xs"
                  >
                    {category?.subCategory}
                  </button>
                ))}
                {/* <button className="btn">Jogger</button>
                <button className="btn">pant</button>
                <button className="btn">trouser</button>
                <button className="btn">category</button>
                <button className="btn">Shorts</button>
                <button className="btn">Hoodie</button>
                <button className="btn">category</button>
                <button className="btn">Shorts</button>
                <button className="btn">Hoodies</button> */}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="max-h-screen overflow-y-auto col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-10 border border-green-500 h-full px-2 overflow-auto md:ml-10">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
              {/* 1st */}
              {allProduct.map((product) => (
                <ShowAllProductPage
                  key={product._id}
                  product={product}
                ></ShowAllProductPage>
              ))}
            </div>
          </div>
          {/* end of right */}
        </div>
      </div>
    </div>
  );
};

export default GridLayout;