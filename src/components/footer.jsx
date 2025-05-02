import "../App.css";
import map from "../assets/footer/map.png";
import pin from "../assets/footer/pin.png";
import social from "../assets/footer/social.png";
import triangle from "../assets/footer/Triangle.png";

function Footer() {
  return (
    <>
      <div className="bg-[#FAEBD7] text-[#3B1F0B]">
        {/*Desktop View*/}
        <section className="hidden md:block relative w-full h-[480px] sm:h-[520px] md:h-[600px] lg:h-[640px] xl:h-[720px]">
          <img src={map} alt="map" className="h-full w-full" />
          <div className="absolute top-20 left-10 sm:left-16 md:left-24 bg-white shadow-md rounded-sm p-8 w-[280px] sm:w-[320px] md:w-[360px]">
            <h2 className="font-extrabold text-[#3B1F0B] text-[24px] mb-6">
              Get In Touch
            </h2>
            <form className="space-y-4">
              <input
                className="w-full border border-[#E37B65] rounded-sm px-3 py-2 text-sm placeholder-[#A78B5B] focus:outline-none focus:ring-1 focus:ring-[#E06A4F]"
                placeholder="Your email"
                type="email"
              />
              <div className="relative w-full">
                <select
                  aria-label="Subject"
                  className="appearance-none w-full border border-[#E37B65] rounded-sm px-3 py-2 text-sm text-[#A78B5B] focus:outline-none focus:ring-1 focus:ring-[#E06A4F]"
                >
                  <option disabled selected>
                    Subject
                  </option>
                  <option>Subject 1</option>
                  <option>Subject 2</option>
                  <option>Subject 3</option>
                </select>

                <img
                  src={triangle}
                  alt="dropdown arrow"
                  className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-[10px] h-[6px]"
                />
              </div>

              <textarea
                className="w-full border border-[#E37B65] rounded-sm px-3 py-2 text-sm placeholder-[#A78B5B] resize-none focus:outline-none focus:ring-1 focus:ring-[#E06A4F]"
                placeholder="Message"
                rows="3"
              ></textarea>
              <div className="flex justify-end">
                <button
                  className="bg-[#E06A4F] w-[154px] h-[48px] text-white font-extrabold text-[16px] uppercase px-5 py-2 rounded-sm hover:bg-[#d55a3f] transition-colors"
                  type="submit"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
          <div className="absolute top-[53%] left-[65%] -translate-y-1/2 -translate-x-1/2 bg-[#E06A4F] w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
            <img src={pin} alt="pin" className="h-full w-full" />
          </div>
        </section>

        <footer className="hidden md:block bg-[#FAEBD7] border-t border-[#E6D3B3] pt-16 pb-6 px-6 sm:px-12 md:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
            <div className="flex-1 max-w-xs">
              <h3 className="font-extrabold text-[#3B1F0B] text-[24px] w-[90px] h-[32px] mb-6">
                Agency
              </h3>
            </div>
            <div className="flex-1 flex justify-between max-w-xs">
              <div>
                <h4 className="text-[#E06A4F] text-[16px] font-semibold tracking-widest mb-4">
                  MENU
                </h4>
                <ul className="text-[#3B1F0B] text-[16px] space-y-1">
                  <li>About</li>
                  <li>Services</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#E06A4F] text-[16px] font-semibold tracking-widest mb-4">
                  SERVICE
                </h4>
                <ul className="text-[#3B1F0B] text-[16px] space-y-1">
                  <li>Design</li>
                  <li>Development</li>
                  <li>Marketing</li>
                  <li>See More</li>
                </ul>
              </div>
            </div>
            <div className="flex-1 flex justify-end items-start max-w-xs w-[160px] h-[48px] space-x-4">
              <img src={social} alt="social" className="h-full w-auto" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-[#E6D3B3] flex flex-col md:flex-row justify-between text-[16px] text-[#8B6E4A] px-2">
            <p>Copyright © 2022 Laaiq. All Rights Reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a className="hover:underline" href="#">
                Terms of Use
              </a>
              <a className="hover:underline" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>

        {/*Mobile View */}
        <section className="block md:hidden relative mb-10 w-full h-[480px] sm:h-[520px] md:h-[600px] lg:h-[640px] xl:h-[720px] rounded">
          <div className="absolute top-10 mb-10 left-5 sm:left-16 md:left-24 bg-white shadow-md rounded-sm p-6 w-[369px] h-auto">
            <h2 className="font-extrabold text-[#3B1F0B] text-[24px] mt-8 mb-8">
              Get In Touch
            </h2>
            <form className="space-y-6">
              <input
                className="w-full border border-[#E37B65] rounded-sm px-3 py-2 text-sm placeholder-[#A78B5B] focus:outline-none focus:ring-1 focus:ring-[#E06A4F]"
                placeholder="Your email"
                type="email"
              />
              <div className="relative w-full">
                <select
                  aria-label="Subject"
                  className="appearance-none w-full border border-[#E37B65] rounded-sm px-3 py-2 text-sm text-[#A78B5B] focus:outline-none focus:ring-1 focus:ring-[#E06A4F]"
                >
                  <option disabled selected>
                    Subject
                  </option>
                  <option>Subject 1</option>
                  <option>Subject 2</option>
                  <option>Subject 3</option>
                </select>

                <img
                  src={triangle}
                  alt="dropdown arrow"
                  className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-[10px] h-[6px]"
                />
              </div>

              <textarea
                className="w-full border border-[#E37B65] rounded-sm px-3 py-2 text-sm placeholder-[#A78B5B] resize-none focus:outline-none focus:ring-1 focus:ring-[#E06A4F]"
                placeholder="Message"
                rows="3"
              ></textarea>
              <div className="flex justify-end">
                <button
                  className="bg-[#E06A4F] w-[154px] h-[48px] text-white font-extrabold text-[16px] uppercase px-5 py-2 rounded-sm hover:bg-[#d55a3f] transition-colors"
                  type="submit"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="block md:hidden relative w-full h-[450px] sm:h-[600px] md:h-[600px] lg:h-[640px] xl:h-[720px]">
          <img
            src={map}
            alt="map"
            className="h-[450px] w-full object-cover transform scale-110"
          />
          <div className="absolute top-[53%] left-[65%] -translate-y-1/2 -translate-x-1/2 bg-[#E06A4F] w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
            <img src={pin} alt="pin" className="h-full w-full" />
          </div>
        </section>

        <footer className="block md:hidden bg-[#FAEBD7] border-t border-[#E6D3B3] pt-16 pb-6 px-6 sm:px-12 md:px-20">
          <div className="max-w-7xl mt-5 mx-auto flex flex-col md:justify-between items-center gap-10 md:gap-0">
            <div className="flex-1 max-w-xs">
              <h3 className="font-extrabold text-[#3B1F0B] text-[24px] w-[90px] h-[32px] mb-6">
                Agency
              </h3>
            </div>
            <div className="flex flex-col max-w-xs space-y-6">
              <div className="flex flex-col">
                <h4 className="text-[#E06A4F] text-center text-[16px] font-semibold tracking-widest mb-6">
                  MENU
                </h4>
                <ul className="text-[#3B1F0B] text-center text-[16px] space-y-2">
                  <li>About</li>
                  <li>Services</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="flex mt-4 flex-col">
                <h4 className="text-[#E06A4F] text-center text-[16px] font-semibold tracking-widest mb-6">
                  SERVICE
                </h4>
                <ul className="text-[#3B1F0B] text-center text-[16px] space-y-2">
                  <li>Design</li>
                  <li>Development</li>
                  <li>Marketing</li>
                  <li>See More</li>
                </ul>
              </div>
            </div>

            <div className="flex-1 flex justify-end items-start max-w-xs w-[160px] h-[48px] space-x-4">
              <img src={social} alt="social" className="h-full w-auto" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-[#E6D3B3] flex flex-col md:flex-row justify-between items-center text-[16px] text-[#8B6E4A] px-2 text-center">
            <span className="w-[198px] h-[63px] flex items-center justify-center">
              Copyright © 2022 Laaiq. All Rights Reserved.
            </span>
            <div className="flex space-x-38 mt-4 md:mt-0">
              <a className="hover:underline" href="#">
                Terms of Use
              </a>
              <a className="hover:underline" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
