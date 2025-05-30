import { useState } from "react";
import sofa from "../assets/lastestworking/sofa.png";
import keyboard from "../assets/lastestworking/keyboard.png";
import workmedia from "../assets/lastestworking/workmedia.png";
import dddone from "../assets/lastestworking/dddone.png";

// Main preview data
const data = [
  {
    id: 1,
    title: "SOFA",
    category: "Design",
    image: sofa,
    colSpan: 2,
  },
  {
    id: 2,
    title: "KeyBoard",
    category: "Branding",
    image: keyboard,
    colSpan: 4,
  },
  {
    id: 3,
    title: "Work Media",
    category: "Illustration",
    image: workmedia,
    colSpan: 4,
  },
  {
    id: 4,
    title: "DDDone",
    category: "Motion",
    image: dddone,
    colSpan: 2,
  },
];

// Full datasets
const sofaData = Array(3).fill().map((_, i) => ({
  id: i + 1,
  title: "SOFA",
  category: "Design",
  image: sofa,
  colSpan: 2,
}));

const keyboardData = Array(3).fill().map((_, i) => ({
  id: i + 1,
  title: "KeyBoard",
  category: "Branding",
  image: keyboard,
  colSpan: 2,
}));

const workmediaData = Array(3).fill().map((_, i) => ({
  id: i + 1,
  title: "Work Media",
  category: "Illustration",
  image: workmedia,
  colSpan: 2,
}));

const dddoneData = Array(3).fill().map((_, i) => ({
  id: i + 1,
  title: "DDDone",
  category: "Motion",
  image: dddone,
  colSpan: 2,
}));

const GridContent = ({ selectedCategory }) => {
  let selectedData;

  switch (selectedCategory) {
    case "Design":
      selectedData = sofaData;
      break;
    case "Branding":
      selectedData = keyboardData;
      break;
    case "Illustration":
      selectedData = workmediaData;
      break;
    case "Motion":
      selectedData = dddoneData;
      break;
    case "All":
    default:
      selectedData = data;
      break;
  }

  return (
    <div className="grid grid-cols-6 gap-6 max-w-7xl mx-auto mt-15">
      {selectedData.map((item, index) => (
        <article
          key={index}
          className={`col-span-${item.colSpan} relative rounded-lg overflow-hidden cursor-pointer`}
        >
          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
          <div className="absolute font-epilogue top-94 left-8 bg-white text-[#1f2538] text-[10px] font-semibold rounded-full px-3 py-1 select-none">
            <h4>{item.category}</h4>
          </div>
          <h1 className="absolute font-epilogue bottom-8 left-8 text-white text-[40px] font-extrabold drop-shadow-lg select-none">
            {item.title}
          </h1>
        </article>
      ))}
    </div>
  );
};

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showMore, setShowMore] = useState(false);

  const categories = [
    { name: "Show All", value: "All", count: 14 },
    { name: "Design", value: "Design", count: 9 },
    { name: "Branding", value: "Branding", count: 4 },
    { name: "Illustration", value: "Illustration", count: 3 },
    { name: "Motion", value: "Motion", count: 2 },
  ];

  return (
    <>
      <nav className="flex justify-center space-x-12 text-xs text-[#7a7a7a] mb-10 font-semibold">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => {
              setSelectedCategory(cat.value);
              setShowMore(false); 
            }}
            className={`relative font-epilogue ${
              selectedCategory === cat.value ? "text-white" : ""
            } after:content-['${cat.count}'] after:absolute after:-top-2 after:-right-3 after:bg-[#1f2538] after:text-[#7a7a7a] after:text-[10px] after:font-semibold after:px-[4px] after:rounded-full`}
          >
            <h4>{cat.name}</h4>
          </button>
        ))}
      </nav>

      <GridContent selectedCategory={selectedCategory} />
      {showMore && <GridContent selectedCategory={selectedCategory} />}

      <div className="flex justify-center mt-12">
        <button
          className="text-[10px] font-epilogue font-semibold text-white border border-white px-4 py-2 hover:border-purple-500"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "HIDE" : "EXPLORE MORE"}
        </button>
      </div>
    </>
  );
};

export default GallerySection;
