import "../App.css";
import { useState } from "react";
import map from "../assets/footer/map.png";
import pin from "../assets/footer/pin.png";
import social from "../assets/footer/social.png";
import oval from "../assets/footer/Oval.png";
import fb from "../assets/footer/facebook.png";
import twit from "../assets/footer/twitter.png";
import insta from "../assets/footer/instagram.png";
import triangle from "../assets/footer/Triangle.png";

function Footer() {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (!form.message) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", form);
      // Handle submission (API call, reset, etc.)
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <>
      <div className="bg-[#FDF0E9] text-[#3B1F0B]">
        {/*Desktop View*/}
        <section className="hidden md:block relative w-full h-[480px] sm:h-[520px] md:h-[600px] lg:h-[640px] xl:h-[720px]">
          <img src={map} alt="map" className="h-full w-full" />
          <div className="absolute top-20 left-10 sm:left-16 md:left-24 bg-white shadow-md rounded-sm p-8 w-[280px] sm:w-[320px] md:w-[360px]">
            <h2 className="font-extrabold text-[#3B1F0B] text-[24px] mb-6 font-epilogue">
              Get In Touch
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-[#EF6D58] rounded-sm px-3 py-2 text-sm placeholder-[#A78B5B] focus:outline-none focus:ring-1 focus:ring-[#E06A4F]"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="relative w-full">
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="appearance-none w-full border border-[#EF6D58] rounded-sm px-3 py-2 text-sm text-[#A78B5B] focus:outline-none focus:ring-1 focus:ring-[#E06A4F] font-epilogue"
                >
                  <option value="" disabled>
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
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="3"
                  className="w-full border border-[#EF6D58] rounded-sm px-3 py-2 text-sm placeholder-[#A78B5B] resize-none focus:outline-none focus:ring-1 focus:ring-[#E06A4F]"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <div className="flex justify-end">
                <a href="/">
                  <button
                    type="submit"
                    className="bg-[#E06A4F] w-[154px] h-[48px] text-white font-extrabold text-[16px] uppercase px-5 py-2 rounded-sm hover:bg-[#d55a3f] transition-colors font-epilogue"
                  >
                    Submit Now
                  </button>
                </a>
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
              <h3 className="font-extrabold text-[#3B1F0B] text-[24px] w-[90px] h-[32px] font-epilogue mb-6">
                Agency
              </h3>
            </div>
            <div className="flex-1 flex justify-between max-w-xs">
              <div>
                <h4 className="text-[#E06A4F] text-[16px] font-semibold tracking-widest font-epilogue mb-4">
                  MENU
                </h4>
                <ul className="text-[#3B1F0B] text-[16px] font-epilogue space-y-1.5">
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Services</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#E06A4F] text-[16px] font-semibold tracking-widest font-epilogue mb-4">
                  SERVICE
                </h4>
                <ul className="text-[#3B1F0B] text-[16px] font-epilogue space-y-1.5">
                    <li><a href="/">Design </a></li>
                    <li><a href="/">Development </a></li>                
                    <li><a href="/">Marketing </a></li>
                    <li><a href="/">See More </a></li>
                </ul>
              </div>
            </div>
            <div className="flex-1 flex justify-end items-start max-w-xs w-[48px] h-[48px] space-x-4">
              <a
                href="https://www.facebook.com"
                className="relative w-[48px] h-[48px]"
              >
                <img src={oval} alt="facebook" className="h-full w-auto" />
                <img
                  src={fb}
                  alt="facebook logo"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </a>
              <a href="https://x.com" className="relative w-[48px] h-[48px]">
                <img src={oval} alt="twitter" className="h-full w-auto" />
                <img
                  src={twit}
                  alt="twitter logo"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </a>
              <a
                href="https://www.instagram.com"
                className="relative w-[48px] h-[48px]"
              >
                <img src={oval} alt="instagram" className="h-full w-auto" />
                <img
                  src={insta}
                  alt="instagram logo"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-[#E6D3B3] flex flex-col md:flex-row justify-between text-[16px] text-[#8B6E4A] px-2 font-epilogue">
            <p>Copyright © 2022 Laaiq. All Rights Reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a className="font-epilogue" href="/">
                Terms of Use
              </a>
              <a className="font-epilogue" href="/">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>

        {/*Mobile View */}
        <section className="block md:hidden relative mb-10 w-full h-[480px] sm:h-[520px] md:h-[600px] lg:h-[640px] xl:h-[720px] rounded">
          <div className="absolute top-10 mb-10 left-5 sm:left-16 md:left-24 bg-white shadow-md rounded-sm p-6 w-[369px] h-auto">
            <h2 className="font-extrabold text-[#3B1F0B] text-[24px] font-epilogue mt-8 mb-8">
              Get In Touch
            </h2>
            <form className="space-y-6">
              <input
                className="w-full border border-[#EF6D58] rounded-sm px-3 py-2 text-sm placeholder-[#A78B5B] focus:outline-none focus:ring-1 focus:ring-[#E06A4F]"
                placeholder="Your email"
                type="email"
              />
              <div className="relative w-full">
                <select
                  aria-label="Subject"
                  className="appearance-none w-full border border-[#EF6D58] rounded-sm px-3 py-2 text-sm text-[#A78B5B] focus:outline-none focus:ring-1 font-epilogue focus:ring-[#E06A4F]"
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
                className="w-full border border-[#EF6D58] rounded-sm px-3 py-2 text-sm placeholder-[#A78B5B] resize-none focus:outline-none focus:ring-1 focus:ring-[#E06A4F]"
                placeholder="Message"
                rows="3"
              ></textarea>
              <div className="flex justify-end">
                <a href="/">
                  <button
                    className="bg-[#E06A4F] w-[154px] h-[48px] text-white font-extrabold text-[16px] uppercase px-5 py-2 rounded-sm hover:bg-[#d55a3f] transition-colors font-epilogue"
                    type="submit"
                  >
                    Submit Now
                  </button>
                </a>
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
              <h2 className="font-extrabold text-[#3B1F0B] text-[24px] w-[90px] h-[32px] font-epilogue mb-6">
                Agency
              </h2>
            </div>
            <div className="flex flex-col max-w-xs space-y-6">
              <div className="flex flex-col">
                <h4 className="text-[#E06A4F] text-center text-[16px] font-epilogue font-semibold tracking-widest mb-6">
                  MENU
                </h4>
                <ul className="text-[#3B1F0B] text-center text-[16px] font-epilogue space-y-1.5">
                 
                    <li>
                      <h4><a href="/">About</a></h4>
                    </li>
                    <li>
                      <h4><a href="/">Services</a></h4>
                    </li>
                    <li>
                      <h4><a href="/">Blog</a></h4>
                    </li>
                    <li>
                      <h4><a href="/">Contact</a></h4>
                    </li>
                 
                </ul>
              </div>
              <div className="flex mt-4 flex-col">
                <h4 className="text-[#E06A4F] text-center text-[16px] font-semibold font-epilogue tracking-widest mb-6">
                  SERVICE
                </h4>
                <ul className="text-[#3B1F0B] text-center text-[16px] font-epilogue space-y-1.5">
                    <li>
                      <h4><a href="/">Design </a></h4>
                    </li>
                    <li>
                      <h4><a href="/">Development </a></h4>
                    </li>
                    <li>
                      <h4><a href="/">Marketing </a></h4>
                    </li>                 
                    <li>
                      <h4><a href="/">See More </a></h4>
                    </li>
                </ul>
              </div>
            </div>

            <div className="flex-1 flex justify-end items-start max-w-xs w-[160px] h-[48px] space-x-4">
              <img src={social} alt="social" className="h-full w-auto" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-[#E6D3B3] flex flex-col md:flex-row justify-between items-center text-[16px] text-[#8B6E4A] px-2 text-center">
            <span className="w-[198px] h-[63px] flex items-center justify-center font-epilogue">
              Copyright © 2022 Laaiq. All Rights Reserved.
            </span>
            <div className="flex space-x-38 mt-4 md:mt-0">
              <a className="font-epilogue" href="/">
                Terms of Use
              </a>
              <a className="font-epilogue" href="/">
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
