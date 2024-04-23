
const CategoriesWithGridDynamicValue = () => {
  // Define a function to calculate column span dynamically
  const calculateColSpan = (index) => {
    const pattern = [3, 2, 2, 3];
    return pattern[index % pattern.length];
  };
  // Define a function to calculate top property value dynamically
  const calculateCategoryPosition = (index) => {
    const pattern = [50, 80, 35, 65];
    return pattern[index % pattern.length];
  };
  const categoryData = [
    {
      id: 1,
      image:
        "https://cdn.firstcry.com/education/2022/11/30093932/Clothes-Names-For-Preschoolers-To-Improve-their-Vocabulary.jpg",
      category_name: "Woman",
    },
    {
      id: 2,
      image:
        "https://cdn.firstcry.com/education/2022/11/30093932/Clothes-Names-For-Preschoolers-To-Improve-their-Vocabulary.jpg",
      category_name: "Boy Baby’s",
    },
    {
      id: 3,
      image:
        "https://cdn.firstcry.com/education/2022/11/30093932/Clothes-Names-For-Preschoolers-To-Improve-their-Vocabulary.jpg",
      category_name: "Kids Toy",
    },
    {
      id: 4,
      image:
        "https://cdn.firstcry.com/education/2022/11/30093932/Clothes-Names-For-Preschoolers-To-Improve-their-Vocabulary.jpg",
      category_name: "Girl’s Baby",
    },
    {
      id: 5,
      image:
        "https://cdn.firstcry.com/education/2022/11/30093932/Clothes-Names-For-Preschoolers-To-Improve-their-Vocabulary.jpg",
      category_name: "Woman",
    },
    {
      id: 6,
      image:
        "https://cdn.firstcry.com/education/2022/11/30093932/Clothes-Names-For-Preschoolers-To-Improve-their-Vocabulary.jpg",
      category_name: "Boy Baby’s",
    },
    {
      id: 7,
      image:
        "https://cdn.firstcry.com/education/2022/11/30093932/Clothes-Names-For-Preschoolers-To-Improve-their-Vocabulary.jpg",
      category_name: "Kids Toy",
    },
    {
      id: 8,
      image:
        "https://cdn.firstcry.com/education/2022/11/30093932/Clothes-Names-For-Preschoolers-To-Improve-their-Vocabulary.jpg",
      category_name: "Girl’s Baby",
    },
    {
      id: 9,
      image:
        "https://cdn.firstcry.com/education/2022/11/30093932/Clothes-Names-For-Preschoolers-To-Improve-their-Vocabulary.jpg",
      category_name: "Girl’s Baby",
    },
    {
      id: 10,
      image:
        "https://cdn.firstcry.com/education/2022/11/30093932/Clothes-Names-For-Preschoolers-To-Improve-their-Vocabulary.jpg",
      category_name: "Girl’s Baby",
    },
    {
      id: 11,
      image:
        "https://cdn.firstcry.com/education/2022/11/30093932/Clothes-Names-For-Preschoolers-To-Improve-their-Vocabulary.jpg",
      category_name: "Girl’s Baby",
    },
  ];
  return (
    <div>

        <div className="grid grid-cols-5 gap-1 md:gap-2 my-2 rounded-xl">
          {/* card div */}
          {categoryData.map((category, index) => (
            <div
              key={category.id}
              //   className="shadow-lg overflow-hidden relative h-[120px] md:h-[150px] rounded-3xl"
              className={`col-span-${calculateColSpan(
                index
              )} shadow-lg overflow-hidden relative h-[120px] md:h-[150px] rounded-3xl`}
            >
              {/* category_Image */}
              <img
                className="object-cover w-full h-[120px] md:h-[150px]"
                src={category?.image}
                alt=""
              />
              {/* category_name div as absolute */}
              <div
                style={{
                  position: "absolute",
                  top: `${calculateCategoryPosition(index)}%`,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                className="w-full"
              >
                <div className="absolute inset-0 bg-white opacity-70"></div>
                <h2 className="z-10 relative text-3xl md:text-3xl font-bold black whitespace-nowrap text-center py-3 md:py-4">
                  {category?.category_name}
                </h2>
              </div>
            </div>
          ))}
        </div>

    </div>
  );
};

export default CategoriesWithGridDynamicValue;
