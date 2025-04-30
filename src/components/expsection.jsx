import "../App.css";
import logo from "../assets/experiance/logo.png";
import leftpic from "../assets/experiance/leftpic.png";
import videobg from "../assets/experiance/videobg.png";
import play from "../assets/experiance/play.png";

function Expsection() {
  return (
    <>
      <div class="bg-[#FAF0E6] text-[#3B1F0B] min-h-screen flex flex-col">
        <header class="border-b border-[#E6D4C3] py-6 px-6 flex justify-center max-w-7xl mx-auto w-full">
          <nav class="flex justify-between items-center w-full max-w-5xl">
            <img src={logo} alt="logo" className="h-full w-auto" />
          </nav>
        </header>
        <main class="flex-grow max-w-7xl mx-auto w-full px-6 py-10">

          <section class="relative flex flex-col md:flex-row items-center md:items-start gap-6 max-w-5xl mx-auto">
            <div class="relative flex-shrink-0">
              <img src={leftpic} alt="leftpic" className="h-full w-auto" />
            </div>
            <div class="max-w-md md:max-w-sm">
              <p class="text-xs font-semibold text-[#E06A56] tracking-widest mb-2 uppercase">
                ABOUT
              </p>
              <h1 class="text-3xl font-extrabold leading-tight mb-2">
                An Experience Design Agency
              </h1>
              <p class="font-semibold mb-4">Provides a full service range</p>
              <p class="text-xs text-[#7A6B5A] mb-6 leading-relaxed">
                Ability to put themselves in the merchant's shoes. It is meant
                to partner on the long run, and work as an extension of the
                merchant's team.
              </p>
              <button
                type="button"
                class="bg-white text-[#3B1F0B] text-xs font-bold px-4 py-2 rounded shadow-sm hover:bg-[#f0e6dc] transition"
              >
                ABOUT US
              </button>
            </div>
          </section>
          
          <section class="border border-[#E6D4C3] rounded-md mt-16 max-w-5xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#E6D4C3]">
            <div class="flex-1 p-6 text-center md:text-left">
              <p class="text-xl font-extrabold mb-1">42%</p>
              <p class="text-xs">Years of experience</p>
            </div>
            <div class="flex-1 p-6 text-center md:text-left">
              <p class="text-xl font-extrabold mb-1">73+</p>
              <p class="text-xs">Agency members</p>
            </div>
            <div class="flex-1 p-6 text-center md:text-left">
              <p class="text-xl font-extrabold mb-1">5.000</p>
              <p class="text-xs">Projects complete</p>
            </div>
          </section>

          <section class="max-w-5xl mx-auto mt-16 flex flex-col md:flex-row gap-10 md:gap-50">
            <div class="max-w-sm">
              <p class="text-xs font-semibold text-[#E06A56] tracking-widest mb-2 uppercase">
                HOW WE WORK
              </p>
              <h2 class="text-xl font-extrabold mb-2">
                Making Your Projects Look Awesome
              </h2>
              <p class="text-xs text-[#7A6B5A] mb-4 leading-relaxed">
                Technical skills, design, business understanding, ability to put
                themselves in the merchant's shoes.
              </p>
              <a
                href="#"
                class="text-xs text-[#3B1F0B] font-normal hover:underline"
              >
                Read More
              </a>
            </div>
            <div class="flex flex-col justify-center space-y-4">
              <div class="flex items-center gap-4">
                <p class="text-3xl font-extrabold flex-shrink-0">1</p>
                <p class="text-xs font-extrabold">
                  Full service range including
                </p>
              </div>
              <div class="flex items-center gap-4">
                <p class="text-3xl font-extrabold flex-shrink-0">2</p>
                <p class="text-xs font-extrabold">
                  Technical skills, design, business
                </p>
              </div>
              <div class="flex items-center gap-4">
                <p class="text-3xl font-extrabold flex-shrink-0">3</p>
                <p class="text-xs font-extrabold">
                  Themselves in the merchant's
                </p>
              </div>
            </div>
          </section>

          <section class="max-w-5xl mx-auto mt-16 flex flex-col md:flex-row gap-10 md:gap-50 items-center">
            <div class="relative w-full md:w-96 rounded-md overflow-hidden shadow-lg">
              <img src={videobg} alt="videobg" className="h-full w-auto" />

              <img
                src={play}
                alt="play"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12"
              />

              <div
                aria-hidden="true"
                class="absolute bottom-2 left-2 text-xs text-white font-semibold bg-black bg-opacity-50 rounded px-1"
              >
                1:45
              </div>
            </div>

            <div class="max-w-sm">
              <p class="text-xs font-semibold text-[#E06A56] tracking-widest mb-2 uppercase">
                VIDEO REEL
              </p>
              <h2 class="text-xl font-extrabold mb-2">
                Unlock The Greatest Value Possible
              </h2>
              <p class="text-xs text-[#7A6B5A] leading-relaxed">
                Design, business understanding, ability to put themselves in the
                merchant's shoes meant to partner.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Expsection;
