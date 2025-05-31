import "../App.css";
import React, { useState } from "react";
import GallerySection from "../components/gallerysection";
import MobileGallerySection from "../components/gallerysectionmobile";
import sofa from "../assets/lastestworking/sofa.png";
import keyboard from "../assets/lastestworking/keyboard.png";
import workmedia from "../assets/lastestworking/workmedia.png";
import dddone from "../assets/lastestworking/dddone.png";
import icon from "../assets/lastestworking/icon.png";
import icon_btn from "../assets/lastestworking/Icon_button.png";
import path from "../assets/lastestworking/Path.png";
import block from "../assets/lastestworking/block.png";
import rightgirl from "../assets/lastestworking/rightgirl.png";
import azah from "../assets/lastestworking/Azah.png";
import izabella from "../assets/lastestworking/Izabella.png";
import leonardo from "../assets/lastestworking/Leonardo.png";
import roelof from "../assets/lastestworking/Roelof.png";
// import triangle from "../assets/footer/Triangle.png";
import leftarrow from "../assets/lastestworking/leftarrow.png";
import rightarrow from "../assets/lastestworking/rightarrow.png";

function Lastestworking() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideWidth = 100;

  const teamMembers = [
    {
      img: azah,
      name: "Azah Anyeni",
      role: "Designer",
      imgStyles: "h-[247px] w-[196px] object-contain -mb-[15px]",
    },
    {
      img: roelof,
      name: "Roelof Bekkenenks",
      role: "React Developer",
      imgStyles: "h-[232px] w-[259px] object-contain -mb-[25px]",
    },
    {
      img: leonardo,
      name: "Leonardo Oliveira",
      role: "Illustrator",
      imgStyles: "h-[205px] w-[238px] object-contain -mb-[16px]",
    },
    {
      img: izabella,
      name: "Izabella Tabakova",
      role: "Product Designer",
      imgStyles: "h-[233px] w-[230px] object-contain -mb-[16px]",
    },
    {
      img: azah,
      name: "Azah Anyeni",
      role: "Designer",
      imgStyles: "h-[247px] w-[196px] object-contain -mb-[15px]",
    },
    {
      img: roelof,
      name: "Roelof Bekkenenks",
      role: "React Developer",
      imgStyles: "h-[232px] w-[259px] object-contain -mb-[25px]",
    },
    {
      img: leonardo,
      name: "Leonardo Oliveira",
      role: "Illustrator",
      imgStyles: "h-[205px] w-[238px] object-contain -mb-[16px]",
    },
    {
      img: izabella,
      name: "Izabella Tabakova",
      role: "Product Designer",
      imgStyles: "h-[233px] w-[230px] object-contain -mb-[16px]",
    },
    {
      img: azah,
      name: "Azah Anyeni",
      role: "Designer",
      imgStyles: "h-[247px] w-[196px] object-contain -mb-[15px]",
    },
    {
      img: roelof,
      name: "Roelof Bekkenenks",
      role: "React Developer",
      imgStyles: "h-[232px] w-[259px] object-contain -mb-[25px]",
    },
    {
      img: leonardo,
      name: "Leonardo Oliveira",
      role: "Illustrator",
      imgStyles: "h-[205px] w-[238px] object-contain -mb-[16px]",
    },
    {
      img: izabella,
      name: "Izabella Tabakova",
      role: "Product Designer",
      imgStyles: "h-[233px] w-[230px] object-contain -mb-[16px]",
    },
  ];

  const itemsPerPage = 4;
  const maxPage = Math.floor((teamMembers.length - 1) / itemsPerPage);

  const handleNext = () => {
    if (currentSlide < maxPage) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const data = [
    {
      id: 1,
      title: "SOFA",
      category: "Design",
      image: sofa,
      span: "col-span-2",
    },
    {
      id: 2,
      title: "KeyBoard",
      category: "Branding",
      image: keyboard,
      span: "col-span-4",
    },
    {
      id: 3,
      title: "Work Media",
      category: "Illustration",
      image: workmedia,
      span: "col-span-4",
    },
    {
      id: 4,
      title: "DDDone",
      category: "Motion",
      image: dddone,
      span: "col-span-2",
    },
  ];

  const categories = [
    { label: "Show All", value: "All", count: 14 },
    { label: "Design", value: "Design", count: 9 },
    { label: "Branding", value: "Branding", count: 4 },
    { label: "Illustration", value: "Illustration", count: 3 },
    { label: "Motion", value: "Motion", count: 2 },
  ];

  
  

  return (
    <>
      <div className="bg-[#28293E] text-white">
        <main className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-30">
          <section aria-label="Portfolio Latest Work" className="mb-20">
            <h4 className="text-[16px] font-epilogue text-[#EF6D58] uppercase tracking-widest mb-2 text-center">
              Portfolio
            </h4>
            <h1 className="text-[56px] font-epilogue font-extrabold text-center mb-6">
              Latest Work
            </h1>
            <GallerySection />
          </section>

          <section
            aria-label="Get Started Help Companies Move Faster"
            className="bg-[#FDF0E9] rounded-lg max-w-7xl mx-auto flex flex-col sm:flex-row items-center h-[316px] justify-between px-15 py-0 gap-6 mb-20"
          >
            <div className="flex flex-col items-start max-w-sm space-y-3">
              <img
                src={icon}
                alt="icon"
                className="h-auto w-auto -mt-[140px]"
              />
              <h1 className="text-[16px] font-epilogue text-[#EF6D58] uppercase tracking-widest font-semibold">
                Get Started
              </h1>
              <h2 className="text-[24px] font-epilogue font-extrabold text-[#1f2538] w-[]">
                We Help Companies Move Faster
              </h2>
              <a href="/">
                <button className="bg-[#EF6D58] font-epilogue text-white text-[16px] w-[154px] h-[58px] font-semibold rounded px-4 py-2 hover:bg-[#b85a4d] transition-colors duration-300">
                  CONTACT US
                </button>
              </a>
            </div>

            <img
              src={block}
              alt="block"
              className="h-full w-auto object-contain -ml-[150px]"
            />

            <div
              className="h-full w-[250px] bg-no-repeat bg-contain bg-center flex items-end"
              style={{ backgroundImage: `url(${path})` }}
            >
              <img
                src={rightgirl}
                alt="rightgirl"
                className="h-full w-auto object-contain "
                style={{ height: 396, width: 239, marginTop: 120 }}
              />
            </div>
          </section>

          <section
            aria-label="Team of Designers and Developers"
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-[16px] font-epilogue text-[#EF6D58] uppercase tracking-widest mb-2">
              Our Team
            </h1>
            <h1 className="text-[56px] font-epilogue font-extrabold mb-8 max-w-xl">
              Team of Designers and Developers
            </h1>

            <div className="flex justify-end space-x-4 mb-8">
              <p
                className="relative w-[48px] h-[48px] cursor-pointer"
                onClick={handlePrev}
              >
                <img src={icon_btn} alt="circle" className="h-full w-auto" />
                <img
                  src={leftarrow}
                  alt="Left Arrow"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </p>
              <p
                className="relative w-[48px] h-[48px] cursor-pointer"
                onClick={handleNext}
              >
                <img src={icon_btn} alt="circle" className="h-full w-auto" />
                <img
                  src={rightarrow}
                  alt="Right Arrow"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </p>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * slideWidth}%)`,
                }}
              >
                {teamMembers.map((member, index) => (
                  <div key={index} className="w-1/4 px-3 flex-shrink-0">
                    <div className="flex flex-col">
                      <div className="border rounded-lg p-4 h-[260px] flex items-end justify-center">
                        <img
                          src={member.img}
                          alt={member.name}
                          className={member.imgStyles}
                        />
                      </div>
                      <div className="mt-3">
                        <h2 className="font-bold font-epilogue text-white text-[24px]">
                          {member.name}
                        </h2>
                        <h4 className="text-[16px] font-epilogue text-[#7a7a7a] mt-1">
                          {member.role}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-16 space-x-5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${
                    currentSlide === i
                      ? "bg-[#EF6D58]"
                      : "border border-[#3a3f5c]"
                  }`}
                ></span>
              ))}
            </div>
          </section>
        </main>

        {/*Mobile */}
        <main className="flex-col block md:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-30">
          <section aria-label="Portfolio Latest Work" className="mb-40">
            <p className="text-[16px] font-epilogue text-[#EF6D58] uppercase tracking-widest mb-2 text-center">
              Portfolio
            </p>
            <h2 className="text-[56px] font-epilogue font-extrabold text-center mb-6">
              Latest Work
            </h2>

            <MobileGallerySection />
          </section>

          <section
            aria-label="Get Started Help Companies Move Faster"
            className="bg-[#fff6ef] rounded-lg max-w-7xl mx-auto flex flex-col sm:flex-row items-center h-auto justify-between px-8 py-0 gap-6 mb-30"
          >
            <div className="flex flex-col items-start max-w-sm space-y-3">
              <img src={icon} alt="icon" className="h-auto w-auto -mt-[75px]" />
              <p className="text-[16px] font-epilogue text-[#EF6D58] uppercase tracking-widest mt-2 font-semibold">
                Get Started
              </p>
              <h3 className="text-[24px] font-epilogue font-extrabold mt-2 text-[#1f2538]">
                We Help Companies Move Faster
              </h3>
              <button className="bg-[#d46a5e] font-epilogue text-white text-[16px] w-[154px] h-[58px] font-semibold rounded px-4 py-2 mt-4 hover:bg-[#b85a4d] transition-colors duration-300">
                CONTACT US
              </button>
            </div>

            <img
              src={block}
              alt="block"
              className="h-[232px] w-[351px] object-contain "
            />

            <div
              className="h-full w-[230px] bg-no-repeat bg-contain bg-center flex items-end justify-center -mt-[50px]"
              style={{ backgroundImage: `url(${path})` }}
            >
              <img
                src={rightgirl}
                alt="rightgirl"
                className="object-contain align-middle"
                style={{ height: 317, width: 191 }}
              />
            </div>
          </section>

          <section
            aria-label="Team of Designers and Developers"
            className="max-w-5xl mx-auto"
          >
            <p className="text-[16px] text-[#EF6D58] uppercase font-epilogue tracking-widest mb-2">
              Our Team
            </p>
            <h2 className="text-[40px] font-extrabold mb-8 w-[329px] font-epilogue h-[144px] leading-[48px]">
              Team of Designers and Developers
            </h2>

            {/* <div className="flex flex-row gap-2 overflow-hidden">
              <div className="flex flex-col !w-[270px] !h-[272px] flex-shrink-0">
                <div className="border rounded-lg p-6 h-[250px] flex items-end justify-center">
                  <img
                    src={azah}
                    alt="azah"
                    className="h-[247px] w-[196px] object-contain -mb-[23px]"
                  />
                </div>
                <div className="text-left">
                  <p className="font-bold text-white text-[24px] font-epilogue mt-3">
                    Azah Anyeni
                  </p>
                  <p className="text-[16px] text-[#7a7a7a] font-epilogue mt-1">
                    Designer
                  </p>
                </div>
              </div>

              <div className="flex flex-col flex-shrink-0">
                <div className="border rounded-lg p-4 h-[250px] flex items-end justify-center">
                  <img
                    src={roelof}
                    alt="roelof"
                    className="h-[235px] w-[289px] object-contain -mb-[16px]"
                  />
                </div>
                <div className="mt-3">
                  <p className="font-bold text-white text-[24px] font-epilogue">
                    Roelof Bekkenenks
                  </p>
                  <p className="text-[16px] text-[#7a7a7a] mt-1 font-epilogue">
                    React Developer
                  </p>
                </div>
              </div>

              <div className="flex flex-col flex-shrink-0">
                <div className="border rounded-lg p-4 h-[250px] flex items-end justify-center">
                  <img
                    src={leonardo}
                    alt="leonardo"
                    className="h-[238px] w-[205px] object-contain -mb-[16px]"
                  />
                </div>
                <div className="mt-3">
                  <p className="font-bold text-white text-[24px] font-epilogue">
                    Leonardo Oliveira
                  </p>
                  <p className="text-[16px] text-[#7a7a7a] mt-1 font-epilogue">
                    Illustrator
                  </p>
                </div>
              </div>

              <div className="flex flex-col flex-shrink-0">
                <div className="border rounded-lg p-4 h-[250px] flex items-end justify-center">
                  <img
                    src={izabella}
                    alt="izabella"
                    className="h-[233px] w-[230px] object-contain -mb-[29px]"
                  />
                </div>
                <div className="mt-3">
                  <p className="font-bold text-white text-[24px] font-epilogue">
                    Izabella Tabakova
                  </p>
                  <p className="text-[16px] text-[#7a7a7a] mt-1 font-epilogue">
                    Product Designer
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-16 space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF6D58]"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-[#3a3f5c]"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-[#3a3f5c]"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-[#3a3f5c]"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-[#3a3f5c]"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-[#3a3f5c]"></span>
            </div> */}
            <div className="w-full px-4">
              <div className="flex flex-row gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 snap-start w-[270px] h-[340px] flex flex-col"
                  >
                    <div className="border rounded-lg p-4 h-[290px] flex items-end justify-center">
                      <img
                        src={member.img}
                        alt={member.name}
                        className={`${member.imgStyles} object-contain`}
                      />
                    </div>
                    <div className="text-left mt-3">
                      <p className="font-bold text-white text-[20px] font-epilogue">
                        {member.name}
                      </p>
                      <p className="text-[14px] text-[#7a7a7a] mt-1 font-epilogue">
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8 overflow-x-auto scrollbar">
                <div className="flex space-x-2 min-w-max">
                  {teamMembers.map((_, index) => (
                    <span
                      key={index}
                      className={`w-2.5 h-2.5 rounded-full ${
                        index === 0 ? "bg-[#EF6D58]" : "border border-[#3a3f5c]"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Lastestworking;
