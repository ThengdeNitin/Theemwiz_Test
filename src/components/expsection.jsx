import "../App.css";
import logo from "../assets/experiance/logo.png";
import logo_mv from "../assets/experiance/logos_mv.png";
import leftpic from "../assets/experiance/leftpic.png";
import videobg from "../assets/experiance/videobg.png";
import play from "../assets/experiance/play.png";

function Expsection() {
  return (
    <>
      <div className="bg-[#FAF0E6] text-[#3B1F0B] min-h-screen flex flex-col">
        <header className="hidden md:flex border-b border-[#E6D4C3] py-16 px-4 justify-center max-w-7xl mx-auto w-full">
          {/*Desktop View*/}
          <nav className="hidden md:flex justify-between items-center w-full max-w-5xl">
            <img src={logo} alt="logo" className="h-full w-auto" />
          </nav>
        </header>

        <header className="flex md:hidden border-b border-[#E6D4C3] py-10 px-10 justify-center max-w-7xl mx-auto w-full">
          {/*MObile View*/}
          <nav className="flex md:hidden justify-between items-center w-[296px] h-[175px]">
            <img src={logo_mv} alt="logo_mv" className="h-full w-auto" />
          </nav>
        </header>

        {/*Desktop View*/}
        <main className="hidden md:block flex-grow max-w-7xl  mx-auto w-full px-8 py-16 mt-10">
          <section className="relative flex flex-col justify-between md:flex-row items-center md:items-start gap-16 max-w-7xl mx-auto mb-30">
            <div className="relative flex-shrink-0">
              <img src={leftpic} alt="leftpic" className="h-full w-auto" />
            </div>
            <div className="max-w-md md:max-w-[566px] mt-18">
              <p className="text-[16px] font-semibold text-[#E06A56] tracking-widest font-epilogue mb-2 uppercase">
                <h4>ABOUT</h4>
              </p>
              <h1 className="text-[56px] font-extrabold leading-tight font-epilogue mb-2">
                An Experience Design Agency
              </h1>
              <p className="font-semibold mb-4 text-[20px] font-epilogue">
                Provides a full service range
              </p>
              <p className="text-[16px] text-[#7A6B5A] mb-6 leading-relaxed font-epilogue">
                Ability to put themselves in the merchant's shoes. It is meant
                to partner on the long run, and work as an extension of the
                merchant's team.
              </p>
              <a href="/"><button
                type="button"
                className="bg-white text-[#3B1F0B] text-xs font-bold px-4 py-2 font-epilogue rounded shadow-sm hover:bg-[#f0e6dc] transition"
              >
                <h4>ABOUT US</h4>
              </button></a>
            </div>
          </section>

          <section className="border border-[#E6D4C3] rounded-md mt-16 mb-25 max-w-7xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#E6D4C3] font-epilogue">
            <div className="flex-1 p-6 text-center md:text-left">
              <p className="text-[40px] font-extrabold mb-1 font-epilogue">
                42%
              </p>
              <h3 className="text-[20px] font-epilogue">Years of experience</h3>
            </div>
            <div className="flex-1 p-6 text-center md:text-left">
              <p className="text-[40px] font-extrabold mb-1 font-epilogue">
                73+
              </p>
              <h3 className="text-[20px] font-epilogue">Agency members</h3>
            </div>
            <div className="flex-1 p-6 text-center md:text-left">
              <p className="text-[40px] font-extrabold mb-1 font-epilogue">
                5000
              </p>
              <h3 className="text-[20px] font-epilogue">Projects complete</h3>
            </div>
          </section>

          <section className="max-w-7xl border-b border-[#E6D4C3] mx-auto mt-16 flex flex-col md:flex-row gap-10 md:gap-60">
            <div className="max-w-sm">
              <p className="text-[16px] font-semibold text-[#E06A56] tracking-widest mb-2 uppercase font-epilogue">
                <h4>HOW WE WORK</h4>
              </p>
              <h2 className="text-[40px] font-extrabold mb-2 w-[470px] font-epilogue">
                Making Your Projects Look Awesome
              </h2>
              <p className="text-[16px] text-[#7A6B5A] mb-4 leading-relaxed w-[470px] font-epilogue">
                Technical skills, design, business understanding, ability to put
                themselves in the merchant's shoes.
              </p>
              <a
                href="/"
                className="text-[16px] text-[#3B1F0B] font-normal hover:underline font-epilogue"
              >
                <h4>Read More</h4>
              </a>
            </div>
            <div className="flex flex-col justify-center space-y-4 mt-10 mb-15">
              <div className="flex items-center gap-4 font-epilogue">
                <p className="text-[72px] font-extrabold flex-shrink-0 font-epilogue">
                  1
                </p>
                <p className="text-[24px] font-extrabold font-epilogue">
                  <h2>Full service range including</h2>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-[72px] font-extrabold flex-shrink-0 font-epilogue">
                  2
                </p>
                <p className="text-[24px] font-extrabold font-epilogue">
                  <h2>Technical skills, design, business</h2>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-[72px] font-extrabold flex-shrink-0">3</p>
                <p className="text-[24px] font-extrabold font-epilogue">
                  <h2>Themselves in the merchant's</h2>
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-7xl justify-between mx-auto flex flex-col md:flex-row md:gap-5 items-center">
            <div className="relative !w-[570px] !h-[368px] rounded-md overflow-hidden shadow-lg">
              <img src={videobg} alt="videobg" className="h-full w-full" />
              <img
                src={play}
                alt="play"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[148px] h-[148px]"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-4 left-4 text-xs text-white font-semibold bg-black/30 rounded px-1"
              >
                1:45
              </div>
            </div>

            <div className="relative !w-[570px] !h-[368px] mt-40">
              <p className="text-[16px] font-semibold text-[#E06A56] tracking-widest mb-2 uppercase font-epilogue">
                <h4>VIDEO REEL</h4>
              </p>
              <h1 className="text-[40px] font-extrabold mb-2 font-epilogue">
                Unlock The Greatest Value Possible
              </h1>
              <p className="text-[16px] text-[#7A6B5A] leading-relaxed font-epilogue">
                Design, business understanding, ability to put themselves in the
                merchant's shoes meant to partner.
              </p>
            </div>
          </section>
        </main>

        {/*MObile View*/}
        <main className="flex-grow block md:hidden max-w-7xl  mx-auto w-full px-8 py-16 mt-4">
          <section className="relative flex flex-col justify-between md:flex-row items-center md:items-start gap-16 max-w-7xl mx-auto mb-30">
            <div className="relative flex-shrink-0">
              <img
                src={leftpic}
                alt="leftpic"
                className="h-[340px] w-[329px]"
              />
            </div>
            <div className="max-w-md md:max-w-[566px] -mt-[20px]">
              <p className="text-[16px] font-semibold text-[#E06A56] tracking-widest mb-2 font-epilogue uppercase">
                ABOUT
              </p>
              <h1 className="text-[40px] font-extrabold leading-tight mb-2 w-[307px] h-[96px] font-epilogue">
                An Experience Design Agency
              </h1>
              <p className="font-semibold mb-4 text-[20px] font-epilogue">
                Provides a full service range
              </p>
              <p className="text-[16px] text-[#7A6B5A] mb-6 leading-relaxed font-epilogue">
                Ability to put themselves in the merchant's shoes. It is meant
                to partner on the long run, and work as an extension of the
                merchant's team.
              </p>
              <button
                type="button"
                className="bg-white text-[#3B1F0B] w-[138px] h-[48px] text-[16px] font-bold px-4 py-2 mt-10 mb-8 rounded shadow-sm hover:bg-[#f0e6dc] transition font-epilogue"
              >
                ABOUT US
              </button>
            </div>
          </section>

          <section className="border border-[#E6D4C3] rounded-md mt-16 mb-25 max-w-7xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#E6D4C3]">
            <div className="flex-1 p-6 text-center md:text-left">
              <p className="text-[40px] font-extrabold mb-1 font-epilogue">
                42%
              </p>
              <p className="text-[20px] font-epilogue">Years of experience</p>
            </div>
            <div className="flex-1 p-6 text-center md:text-left">
              <p className="text-[40px] font-extrabold mb-1 font-epilogue">
                73+
              </p>
              <p className="text-[20px] font-epilogue">Agency members</p>
            </div>
            <div className="flex-1 p-6 text-center md:text-left">
              <p className="text-[40px] font-extrabold mb-1 font-epilogue">
                5000
              </p>
              <p className="text-[20px] font-epilogue">Projects complete</p>
            </div>
          </section>

          <section className="max-w-7xl border-b border-[#E6D4C3] mx-auto mt-20 flex flex-col md:flex-row gap-10 md:gap-60">
            <div className="max-w-sm">
              <p className="text-[16px] font-semibold text-[#E06A56] tracking-widest mb-2 uppercase font-epilogue">
                HOW WE WORK
              </p>
              <h2 className="text-[40px] font-extrabold mb-2 w-[329px] leading-[48px] font-epilogue">
                Making Your Projects Look Awesome
              </h2>
              <p className="text-[16px] text-[#7A6B5A] mb-4 leading-relaxed w-[329px] h-[96px] font-epilogue">
                Technical skills, design, business understanding, ability to put
                themselves in the merchant's shoes.
              </p>
              <a
                href="/"
                className="text-[16px] text-[#3B1F0B] font-normal hover:underline font-epilogue"
              >
                Read More
              </a>
            </div>
            <div className="flex flex-col justify-center space-y-4 mt-10 mb-15">
              <div className="flex items-center gap-12">
                <p className="text-[72px] font-extrabold flex-shrink-0 font-epilogue">
                  1
                </p>
                <p className="text-[24px] font-extrabold w-[257px] h-[64px] font-epilogue">
                  Full service range including
                </p>
              </div>
              <div className="flex items-center gap-10">
                <p className="text-[72px] font-extrabold flex-shrink-0 font-epilogue">
                  2
                </p>
                <p className="text-[24px] font-extrabold w-[257px] h-[64px] font-epilogue">
                  Technical skills, design, business
                </p>
              </div>
              <div className="flex items-center gap-10">
                <p className="text-[72px] font-extrabold flex-shrink-0 font-epilogue">
                  3
                </p>
                <p className="text-[24px] font-extrabold w-[257px] h-[64px] font-epilogue">
                  Themselves in the merchant's
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-7xl justify-between mx-auto mt-16 flex flex-col md:flex-row md:gap-5 items-center">
            <div className="relative w-[329px] h-[212px] rounded-md overflow-hidden shadow-lg">
              <img src={videobg} alt="videobg" className="h-full w-full" />
              <img
                src={play}
                alt="play"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[148px] h-[148px]"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-4 left-4 text-xs text-white font-semibold bg-black/30 rounded px-1"
              >
                1:45
              </div>
            </div>

            <div className="relative mt-8">
              <p className="text-[16px] font-semibold text-[#E06A56] tracking-widest mb-2 uppercase font-epilogue">
                VIDEO REEL
              </p>
              <h2 className="text-[40px] w-[329px] h-[143px] font-extrabold mb-2 leading-[48px] font-epilogue">
                Unlock The Greatest Value Possible
              </h2>
              <p className="text-[16px] text-[#7A6B5A] w-[329px] h-[99px] leading-relaxed font-epilogue">
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
