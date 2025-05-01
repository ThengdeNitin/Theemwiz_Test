import "../App.css";
import sofa from "../assets/lastestworking/sofa.png";
import keyboard from "../assets/lastestworking/keyboard.png";
import workmedia from "../assets/lastestworking/workmedia.png";
import dddone from "../assets/lastestworking/dddone.png";
import icon from "../assets/lastestworking/icon.png";
import path from "../assets/lastestworking/Path.png";
import block from "../assets/lastestworking/block.png";
import rightgirl from "../assets/lastestworking/rightgirl.png";
import azah from "../assets/lastestworking/Azah.png";
import izabella from "../assets/lastestworking/Izabella.png";
import leonardo from "../assets/lastestworking/Leonardo.png";
import roelof from "../assets/lastestworking/Roelof.png";
import arrow from "../assets/lastestworking/arrow.png"

function Lastestworking() {
  return (
    <>
      <div className="bg-[#1f2538] text-white">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-30">
          <section aria-label="Portfolio Latest Work" className="mb-20">
            <p className="text-[16px] text-[#d46a5e] uppercase tracking-widest mb-2 text-center">
              Portfolio
            </p>
            <h2 className="text-[56px] font-extrabold text-center mb-6">
              Latest Work
            </h2>
            <nav className="flex justify-center space-x-12 text-xs text-[#7a7a7a] mb-10 font-semibold">
              <button className="relative after:content-['14'] after:absolute text-white after:-top-2 after:-right-3 after:bg-[#1f2538] after:text-[#7a7a7a] after:text-[10px] after:font-semibold after:px-[4px] after:rounded-full">
                Show All
              </button>
              <button className="relative after:content-['9'] after:absolute after:-top-2 after:-right-3 after:bg-[#1f2538] after:text-[#7a7a7a] after:text-[10px] after:font-semibold after:px-[4px] after:rounded-full">
                Design
              </button>
              <button className="relative after:content-['4'] after:absolute after:-top-2 after:-right-3 after:bg-[#1f2538] after:text-[#7a7a7a] after:text-[10px] after:font-semibold after:px-[4px] after:rounded-full">
                Branding
              </button>
              <button className="relative after:content-['3'] after:absolute after:-top-2 after:-right-3 after:bg-[#1f2538] after:text-[#7a7a7a] after:text-[10px] after:font-semibold after:px-[4px] after:rounded-full">
                Illustration
              </button>
              <button className="relative after:content-['2'] after:absolute after:-top-2 after:-right-3 after:bg-[#1f2538] after:text-[#7a7a7a] after:text-[10px] after:font-semibold after:px-[4px] after:rounded-full">
                Motion
              </button>
            </nav>

            <div className="grid grid-cols-6 gap-6 max-w-7xl mx-auto mt-15">
              <article className="col-span-2 relative rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={sofa}
                  alt="sofa"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-95 left-8 bg-white text-[#1f2538] text-[10px] font-semibold rounded-full px-3 py-1 select-none">
                  Design
                </div>
                <h3 className="absolute bottom-8 left-8 text-white text-[40px] font-extrabold drop-shadow-lg select-none">
                  SOFA
                </h3>
              </article>

              <article className="col-span-4 relative rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={keyboard}
                  alt="keyboard"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-95 left-8 bg-white text-[#1f2538] text-[10px] font-semibold rounded-full px-3 py-1 select-none">
                  Branding
                </div>
                <h3 className="absolute bottom-8 left-8 text-white text-[40px] font-extrabold drop-shadow-lg select-none">
                  KeyBoard
                </h3>
              </article>

              <article className="col-span-4 relative rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={workmedia}
                  alt="workmedia"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-95 left-8 bg-white text-[#1f2538] text-[10px] font-semibold rounded-full px-3 py-1 select-none">
                  Illustration
                </div>
                <h3 className="absolute bottom-8 left-8 text-white text-[40px] font-extrabold drop-shadow-lg select-none">
                  Work Media
                </h3>
              </article>

              <article className="col-span-2 relative rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={dddone}
                  alt="dddone"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-95 left-8 bg-white text-[#1f2538] text-[10px] font-semibold rounded-full px-3 py-1 select-none">
                  Motion
                </div>
                <h3 className="absolute bottom-8 left-8 text-white text-[40px] font-extrabold drop-shadow-lg select-none">
                  DDDone
                </h3>
              </article>
            </div>

            <div className="flex justify-center mt-12">
              <button className="text-[10px] font-semibold text-white border border-white px-4 py-2 hover:border-purple-500">
                EXPLORE MORE
              </button>
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
              <p className="text-[16px] text-[#d46a5e] uppercase tracking-widest font-semibold">
                Get Started
              </p>
              <h3 className="text-[24px] font-extrabold text-[#1f2538] w-[]">
                We Help Companies Move Faster
              </h3>
              <button className="bg-[#d46a5e] text-white text-[16px] w-[154px] h-[58px] font-semibold rounded px-4 py-2 hover:bg-[#b85a4d] transition-colors duration-300">
                CONTACT US
              </button>
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
                style={{height: 396, width:239, marginTop:120}}
              />
            </div>
          </section>

          <section
            aria-label="Team of Designers and Developers"
            className="max-w-5xl mx-auto"
          >
            <p className="text-[16px] text-[#d46a5e] uppercase tracking-widest mb-2">
              Our Team
            </p>
            <h2 className="text-[56px] font-extrabold mb-8 max-w-xl">
              Team of Designers and Developers
            </h2>
            <div className="flex justify-end space-x-4 mb-8">
              <img src={arrow} alt="arrow" className="h-auto w-auto"/>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              
            <div className="flex flex-col">
              <div className="border rounded-lg p-6 h-[250px] flex items-end justify-center">
                <img src={azah} alt="azah" className="h-[247px] w-[196px] object-contain -mb-[28px]" />
              </div>
              <div className="text-left">
              <p className="font-bold text-white text-[24px] mt-3">Azah Anyeni</p>
              <p className="text-[16px] text-[#7a7a7a] mt-1">Designer</p>
              </div>
            </div>  


            <div className="flex flex-col">
              <div className="border rounded-lg p-4 h-[250px] flex items-end justify-center">
              <img src={roelof} alt="roelof" className="h-[235px] w-[289px] object-contain -mb-[42px]"/>
              </div>
              <div className="mt-3">
              <p className="font-bold text-white text-[24px]">Roelof Bekkenenks</p>
                <p className="text-[16px] text-[#7a7a7a] mt-1">React Developer</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="border rounded-lg p-4 h-[250px] flex items-end justify-center">
              <img src={leonardo} alt="leonardo" className="h-[238px] w-[205px] object-contain -mb-[16px]"/>
              </div>
              <div className="mt-3">
              <p className="font-bold text-white text-[24px]">
                  Leonardo Oliveira
                </p>
                <p className="text-[16px] text-[#7a7a7a] mt-1">Illustrator</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="border rounded-lg p-4 h-[250px] flex items-end justify-center">
              <img src={izabella} alt="izabella" className="h-[233px] w-[230px] object-contain -mb-[29px]"/>
              </div>
              <div className="mt-3">
              <p className="font-bold text-white text-[24px]">
                  Izabella Tabakova
                </p>
                <p className="text-[16px] text-[#7a7a7a] mt-1">Product Designer</p>
              </div>
            </div>

            </div>
            <div className="flex justify-center mt-16 space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d46a5e]"></span>
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
