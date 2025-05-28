import "../App.css";
import React, { useState } from "react";
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
import triangle from "../assets/footer/Triangle.png";
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
      imgStyles: "h-[232px] w-[259px] object-contain -mb-[42px]",
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
      imgStyles: "h-[233px] w-[230px] object-contain -mb-[32px]",
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
      imgStyles: "h-[232px] w-[259px] object-contain -mb-[42px]",
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
      imgStyles: "h-[233px] w-[230px] object-contain -mb-[32px]",
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
      imgStyles: "h-[232px] w-[259px] object-contain -mb-[42px]",
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
      imgStyles: "h-[233px] w-[230px] object-contain -mb-[32px]",
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

  return (
    <>
      <div className="bg-[#1f2538] text-white">
        <main className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-30">
          <section aria-label="Portfolio Latest Work" className="mb-20">
            <h4 className="text-[16px] font-epilogue text-[#d46a5e] uppercase tracking-widest mb-2 text-center">
              Portfolio
            </h4>
            <h1 className="text-[56px] font-epilogue font-extrabold text-center mb-6">
              Latest Work
            </h1>
            <nav className="flex justify-center space-x-12 text-xs text-[#7a7a7a] mb-10 font-semibold">
              <button className="relative after:content-['14'] after:absolute text-white after:-top-2 after:-right-3 after:bg-[#1f2538] after:text-[#7a7a7a] font-epilogue after:text-[10px] after:font-semibold after:px-[4px] after:rounded-full">
                <h4>Show All</h4>
              </button>
              <button className="relative after:content-['9'] after:absolute after:-top-2 after:-right-3 after:bg-[#1f2538] after:text-[#7a7a7a] after:text-[10px] font-epilogue after:font-semibold after:px-[4px] after:rounded-full">
                <h4>Design</h4>
              </button>
              <button className="relative after:content-['4'] after:absolute after:-top-2 after:-right-3 after:bg-[#1f2538] after:text-[#7a7a7a] after:text-[10px] font-epilogue after:font-semibold after:px-[4px] after:rounded-full">
                <h4>Branding</h4>
              </button>
              <button className="relative after:content-['3'] after:absolute after:-top-2 after:-right-3 after:bg-[#1f2538] after:text-[#7a7a7a] after:text-[10px] font-epilogue after:font-semibold after:px-[4px] after:rounded-full">
                <h4>Illustration</h4>
              </button>
              <button className="relative after:content-['2'] after:absolute after:-top-2 after:-right-3 after:bg-[#1f2538] after:text-[#7a7a7a] after:text-[10px] font-epilogue after:font-semibold after:px-[4px] after:rounded-full">
                <h4>Motion</h4>
              </button>
            </nav>

            <div className="grid grid-cols-6 gap-6 max-w-7xl mx-auto mt-15">
              <article className="col-span-2 relative rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={sofa}
                  alt="sofa"
                  className="h-full w-full object-cover"
                />
                <div className="absolute font-epilogue top-95 left-8 bg-white text-[#1f2538] text-[10px] font-semibold rounded-full px-3 py-1 select-none">
                  <h4>Design</h4>
                </div>
                <h1 className="absolute font-epilogue bottom-8 left-8 text-white text-[40px] font-extrabold drop-shadow-lg select-none">
                  SOFA
                </h1>
              </article>

              <article className="col-span-4 relative rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={keyboard}
                  alt="keyboard"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-95 left-8 bg-white text-[#1f2538] text-[10px] font-semibold rounded-full px-3 py-1 select-none font-epilogue">
                  <h4>Branding</h4>
                </div>
                <h1 className="absolute bottom-8 left-8 text-white text-[40px] font-epilogue font-extrabold drop-shadow-lg select-none">
                  KeyBoard
                </h1>
              </article>

              <article className="col-span-4 relative rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={workmedia}
                  alt="workmedia"
                  className="h-full w-full object-cover"
                />
                <div className="absolute font-epilogue top-95 left-8 bg-white text-[#1f2538] text-[10px] font-semibold rounded-full px-3 py-1 select-none">
                  <h4>Illustration</h4>
                </div>
                <h1 className="absolute font-epilogue bottom-8 left-8 text-white text-[40px] font-extrabold drop-shadow-lg select-none">
                  Work Media
                </h1>
              </article>

              <article className="col-span-2 relative rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={dddone}
                  alt="dddone"
                  className="h-full w-full object-cover"
                />
                <div className="absolute font-epilogue top-95 left-8 bg-white text-[#1f2538] text-[10px] font-semibold rounded-full px-3 py-1 select-none">
                  <h4>Motion</h4>
                </div>
                <h1 className="absolute font-epilogue bottom-8 left-8 text-white text-[40px] font-extrabold drop-shadow-lg select-none">
                  DDDone
                </h1>
              </article>
            </div>

            <div className="flex justify-center mt-12">
              <a href="/"><button className="text-[10px] font-epilogue font-semibold text-white border border-white px-4 py-2 hover:border-purple-500">
                EXPLORE MORE
              </button></a>
            </div>
          </section>

          <section
            aria-label="Get Started Help Companies Move Faster"
            className="bg-[#fff6ef] rounded-lg max-w-7xl mx-auto flex flex-col sm:flex-row items-center h-[316px] justify-between px-15 py-0 gap-6 mb-20"
          >
            <div className="flex flex-col items-start max-w-sm space-y-3">
              <img
                src={icon}
                alt="icon"
                className="h-auto w-auto -mt-[140px]"
              />
              <h1 className="text-[16px] font-epilogue text-[#d46a5e] uppercase tracking-widest font-semibold">
                Get Started
              </h1>
              <h2 className="text-[24px] font-epilogue font-extrabold text-[#1f2538] w-[]">
                We Help Companies Move Faster
              </h2>
              <a href="/"><button className="bg-[#d46a5e] font-epilogue text-white text-[16px] w-[154px] h-[58px] font-semibold rounded px-4 py-2 hover:bg-[#b85a4d] transition-colors duration-300">
                CONTACT US
              </button></a>
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
            <h1 className="text-[16px] font-epilogue text-[#d46a5e] uppercase tracking-widest mb-2">
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
                      ? "bg-[#d46a5e]"
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
            <p className="text-[16px] font-epilogue text-[#d46a5e] uppercase tracking-widest mb-2 text-center">
              Portfolio
            </p>
            <h2 className="text-[56px] font-epilogue font-extrabold text-center mb-6">
              Latest Work
            </h2>
            <div className="relative flex w-full">
              <select
                aria-label="Subject"
                className="appearance-none w-full border border-[#E37B65] rounded-sm px-3 py-2 text-sm text-[#A78B5B] focus:outline-none focus:ring-1 font-epilogue focus:ring-[#E06A4F] bg-white"
              >
                <option disabled selected>
                  Select All
                </option>
                <option>Design</option>
                <option>Branding</option>
                <option>Illustration</option>
                <option>Motion</option>
              </select>

              <img
                src={triangle}
                alt="dropdown arrow"
                className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-[10px] h-[6px]"
              />
            </div>

            <div className="flex flex-col gap-8 max-w-7xl mx-auto mt-8">
              <article className="relative rounded-lg w-full h-[416px] overflow-hidden cursor-pointer">
                <img
                  src={sofa}
                  alt="sofa"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-75 left-8 bg-white text-[#1f2538] text-[10px] font-semibold rounded-full px-3 py-1 select-none font-epilogue">
                  Design
                </div>
                <h3 className="absolute bottom-8 left-8 text-white text-[40px] font-extrabold drop-shadow-lg font-epilogue select-none">
                  SOFA
                </h3>
              </article>

              <article className="relative rounded-lg w-full h-[416px] overflow-hidden cursor-pointer">
                <img
                  src={keyboard}
                  alt="keyboard"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-75 left-8 font-epilogue bg-white text-[#1f2538] text-[10px] font-semibold rounded-full px-3 py-1 select-none">
                  Branding
                </div>
                <h3 className="absolute bottom-8 left-8 font-epilogue text-white text-[40px] font-extrabold drop-shadow-lg select-none">
                  KeyBoard
                </h3>
              </article>

              <article className="relative rounded-lg w-full h-[416px] overflow-hidden cursor-pointer">
                <img
                  src={workmedia}
                  alt="workmedia"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-75 left-8 bg-white font-epilogue text-[#1f2538] text-[10px] font-semibold rounded-full px-3 py-1 select-none">
                  Illustration
                </div>
                <h3 className="absolute bottom-8 left-8 text-white font-epilogue text-[40px] font-extrabold drop-shadow-lg select-none">
                  Work Media
                </h3>
              </article>
            </div>

            <div className="flex justify-center mt-12">
              <button className="text-[10px] font-semibold font-epilogue text-white border border-white px-4 py-2 hover:border-purple-500">
                EXPLORE MORE
              </button>
            </div>
          </section>

          <section
            aria-label="Get Started Help Companies Move Faster"
            className="bg-[#fff6ef] rounded-lg max-w-7xl mx-auto flex flex-col sm:flex-row items-center h-auto justify-between px-8 py-0 gap-6 mb-30"
          >
            <div className="flex flex-col items-start max-w-sm space-y-3">
              <img src={icon} alt="icon" className="h-auto w-auto -mt-[75px]" />
              <p className="text-[16px] font-epilogue text-[#d46a5e] uppercase tracking-widest mt-2 font-semibold">
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
            <p className="text-[16px] text-[#d46a5e] uppercase font-epilogue tracking-widest mb-2">
              Our Team
            </p>
            <h2 className="text-[40px] font-extrabold mb-8 w-[329px] font-epilogue h-[144px] leading-[48px]">
              Team of Designers and Developers
            </h2>

            <div className="flex flex-row gap-2 overflow-hidden">
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
              <span className="w-2.5 h-2.5 rounded-full bg-[#d46a5e]"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-[#3a3f5c]"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-[#3a3f5c]"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-[#3a3f5c]"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-[#3a3f5c]"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-[#3a3f5c]"></span>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Lastestworking;
