import { useState } from "react";
import sofa from "../assets/lastestworking/sofa.png";
import keyboard from "../assets/lastestworking/keyboard.png";
import workmedia from "../assets/lastestworking/workmedia.png";
import dddone from "../assets/lastestworking/dddone.png";
import triangle from "../assets/footer/Triangle.png";

const data = [
  {
    id: 1,
    title: "SOFA",
    category: "Design",
    image: sofa,
  },
  {
    id: 2,
    title: "KeyBoard",
    category: "Branding",
    image: keyboard,
  },
  {
    id: 3,
    title: "Work Media",
    category: "Illustration",
    image: workmedia,
  },
  {
    id: 4,
    title: "DDDone",
    category: "Motion",
    image: dddone,
  },
];

const allDataMap = {
  Design: Array(3).fill({ ...data[0], id: 0 }),
  Branding: Array(3).fill({ ...data[1], id: 0 }),
  Illustration: Array(3).fill({ ...data[2], id: 0 }),
  Motion: Array(3).fill({ ...data[3], id: 0 }),
  All: data,
};

const MobileGallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showMore, setShowMore] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setShowMore(false);
  };

  const selectedData = allDataMap[selectedCategory];
  const dataToDisplay = showMore
    ? [...selectedData, ...selectedData]
    : selectedData;

  return (
    <div className="px-4 py-8">
      {/* Dropdown Filter */}
      <div className="relative flex w-full mb-6">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="appearance-none w-full border border-[#EF6D58] rounded-sm px-3 py-2 text-sm text-[#A78B5B] focus:outline-none focus:ring-1 font-epilogue focus:ring-[#E06A4F] bg-white"
        >
          <option value="All">Show All</option>
          <option value="Design">Design</option>
          <option value="Branding">Branding</option>
          <option value="Illustration">Illustration</option>
          <option value="Motion">Motion</option>
        </select>

        <img
          src={triangle}
          alt="dropdown arrow"
          className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-[10px] h-[6px]"
        />
      </div>

      {/* Gallery Cards */}
      <div className="flex flex-col gap-6">
        {dataToDisplay.map((item, index) => (
          <article
            key={index}
            className="relative rounded-lg w-full h-[416px] overflow-hidden cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-75 left-4 bg-white text-[#1f2538] text-[10px] font-semibold rounded-full px-3 py-1 select-none font-epilogue">
              {item.category}
            </div>
            <h3 className="absolute bottom-6 left-4 text-white text-[32px] font-extrabold drop-shadow-lg font-epilogue select-none">
              {item.title}
            </h3>
          </article>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button
          className="text-[10px] font-semibold font-epilogue text-white border border-white px-4 py-2 hover:border-purple-500"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "HIDE" : "EXPLORE MORE"}
        </button>
      </div>
    </div>
  );
};

export default MobileGallerySection;
