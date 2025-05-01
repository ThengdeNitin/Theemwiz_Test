import "../App.css";
import map from "../assets/footer/map.png";
import pin from "../assets/footer/pin.png";
import social from "../assets/footer/social.png";
import triangle from "../assets/footer/Triangle.png";

function Footer() {
  return (
    <>
      <div class="bg-[#FAEBD7] text-[#3B1F0B]">
        <section class="relative w-full h-[480px] sm:h-[520px] md:h-[600px] lg:h-[640px] xl:h-[720px]">
          <img src={map} alt="map" className="h-full w-full" />
          <div class="absolute top-20 left-10 sm:left-16 md:left-24 bg-white shadow-md rounded-sm p-8 w-[280px] sm:w-[320px] md:w-[360px]">
            <h2 class="font-extrabold text-[#3B1F0B] text-[24px] mb-6">
              Get In Touch
            </h2>
            <form class="space-y-4">
              <input
                class="w-full border border-[#E37B65] rounded-sm px-3 py-2 text-sm placeholder-[#A78B5B] focus:outline-none focus:ring-1 focus:ring-[#E06A4F]"
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
                class="w-full border border-[#E37B65] rounded-sm px-3 py-2 text-sm placeholder-[#A78B5B] resize-none focus:outline-none focus:ring-1 focus:ring-[#E06A4F]"
                placeholder="Message"
                rows="3"
              ></textarea>
              <div class="flex justify-end">
                <button
                  class="bg-[#E06A4F] w-[154px] h-[48px] text-white font-extrabold text-[16px] uppercase px-5 py-2 rounded-sm hover:bg-[#d55a3f] transition-colors"
                  type="submit"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
          <div class="absolute top-[53%] left-[65%] -translate-y-1/2 -translate-x-1/2 bg-[#E06A4F] w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
            <img src={pin} alt="pin" className="h-full w-full" />
          </div>
        </section>

        <footer class="bg-[#FAEBD7] border-t border-[#E6D3B3] pt-16 pb-6 px-6 sm:px-12 md:px-20">
          <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
            <div class="flex-1 max-w-xs">
              <h3 class="font-extrabold text-[#3B1F0B] text-[24px] w-[90px] h-[32px] mb-6">Agency</h3>
            </div>
            <div class="flex-1 flex justify-between max-w-xs">
              <div>
                <h4 class="text-[#E06A4F] text-[16px] font-semibold tracking-widest mb-4">
                  MENU
                </h4>
                <ul class="text-[#3B1F0B] text-[16px] space-y-1">
                  <li>About</li>
                  <li>Services</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h4 class="text-[#E06A4F] text-[16px] font-semibold tracking-widest mb-4">
                  SERVICE
                </h4>
                <ul class="text-[#3B1F0B] text-[16px] space-y-1">
                  <li>Design</li>
                  <li>Development</li>
                  <li>Marketing</li>
                  <li>See More</li>
                </ul>
              </div>
            </div>
            <div class="flex-1 flex justify-end items-start max-w-xs w-[160px] h-[48px] space-x-4">
              <img src={social} alt="social" className="h-full w-auto" />
            </div>
          </div>
          <div class="max-w-7xl mx-auto mt-16 pt-6 border-t border-[#E6D3B3] flex flex-col md:flex-row justify-between text-[16px] text-[#8B6E4A] px-2">
            <p>Copyright © 2022 Laaiq. All Rights Reserved.</p>
            <div class="flex space-x-8 mt-4 md:mt-0">
              <a class="hover:underline" href="#">
                Terms of Use
              </a>
              <a class="hover:underline" href="#">
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
