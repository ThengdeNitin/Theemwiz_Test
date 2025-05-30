import "../App.css";
import { useState } from "react";
import down from "../assets/pricing/down.png";
import up from "../assets/pricing/up.png";
import plus from "../assets/pricing/plus.png";
import minus from "../assets/pricing/minus.png";

function Pricing() {
  const [openIndex, setOpenIndex] = useState(0);
  const [toggles, setToggles] = useState({
    brandDesign: false,
    marketAnalysis: false,
    production: false,
    brandDesign1: false,
    marketAnalysis1: false,
    production1: false,
    brandDesign2: false,
    marketAnalysis2: false,
    production2: false,
  });

  const toggle = (key) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };


  const faqs = [
    {
      question: "A digital agency is a business",
      answer: `Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital
        solutions to promote your product or service online and help you hit your marketing goals and grow your business.`,
    },
    {
      question: "Hire to outsource your digital",
      answer: `Outsourcing can give access to experienced professionals and free up your team to focus on strategy.`,
    },
    {
      question: "Marketing efforts",
      answer: `They handle SEO, ads, social media, and content to drive results for your business.`,
    },
    {
      question: "Can provide your business",
      answer: `Digital agencies can improve your brand reach and increase ROI through targeted campaigns.`,
    },
  ];

  return (
    <>
      <div className="bg-[#FDF0E9]">
        {/*Desktop View*/}
        <main className="hidden md:block max-w-7xl mx-auto px-6 py-16 md:py-24">
          <section className="max-w-7xl mx-auto mb-20 md:mb-28">
            <div className="max-w-md md:max-w-lg mb-26">
              <h4 className="text-[16px] font-semibold tracking-widest text-[#EF6D58] uppercase font-epilogue mb-2">
                Pricing
              </h4>
              <h1 className="text-[56px] font-extrabold text-black leading-tight font-epilogue">
                Check Our <br />
                Pricing Plans
              </h1>
            </div>

            <div
              className="flex flex-col md:flex-row max-w-7xl mx-auto"
              role="list"
            >
              <article className="flex-1 bg-[#FAEBD7] border border-[#EF6D58] rounded-md p-6 md:p-7">
                <h4 className="text-[16px] font-semibold tracking-widest font-epilogue text-[#EF6D58] uppercase mb-4">
                  Consultation
                </h4>
                <h1 className="font-extrabold text-black text-[40px] font-epilogue mb-2">
                  Free
                </h1>
                <p className="text-[16px] text-[#6B5B4B] mb-6 font-epilogue leading-relaxed">
                  Your digital marketing efforts, instead of handling in-house.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-[#6B5B4B]">
                  <li
                    className="flex font-epilogue items-center gap-2 cursor-pointer"
                    onClick={() => toggle("brandDesign")}
                  >
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EF6D58] text-white text-[16px]"
                      aria-hidden="true"
                    >
                      <img
                        src={toggles.brandDesign ? minus : plus}
                        alt={toggles.brandDesign ? "minus" : "plus"}
                        className="h-full w-full"
                      />
                    </span>
                    Brand Design
                  </li>

                  <li
                    className="flex font-epilogue items-center gap-2 cursor-pointer"
                    onClick={() => toggle("marketAnalysis")}
                  >
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EF6D58] text-white text-[16px]"
                      aria-hidden="true"
                    >
                      <img
                        src={toggles.marketAnalysis ? plus : minus}
                        alt={toggles.marketAnalysis ? "plus" : "minus"}
                        className="h-full w-full"
                      />
                    </span>
                    Market Analysis
                  </li>

                  <li
                    className="flex font-epilogue items-center gap-2 cursor-pointer"
                    onClick={() => toggle("production")}
                  >
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EF6D58] text-white text-[16px]"
                      aria-hidden="true"
                    >
                      <img
                        src={toggles.production ? plus : minus}
                        alt={toggles.production ? "plus" : "minus"}
                        className="h-full w-full"
                      />
                    </span>
                    Production
                  </li>
                </ul>
                <a href="/">
                  <button
                    type="button"
                    className="font-extrabold text-[16px] w-[158px] h-[48px] uppercase bg-white text-[#3B1F0B] px-5 py-2 rounded shadow-[0_2px_6px_rgba(0,0,0,0.1)] font-epilogue hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow"
                  >
                    Contact Us
                  </button>
                </a>
              </article>

              <article className="flex-1 bg-white rounded-md p-4 md:p-7 relative border border-[#EF6D58] shadow-md -mt-12 z-10">
                <span className="absolute top-4 left-4 w-[92px] h-[38px] bg-[#EF6D58] border-[#EF6D58] text-white text-[16px] font-semibold rounded-full font-epilogue px-4 py-2">
                  Popular
                </span>
                <h4 className="text-[16px] font-epilogue font-semibold tracking-widest text-[#EF6D58] uppercase mb-4 mt-10">
                  Design
                </h4>
                <h3 className="font-extrabold font-epilogue text-black text-[40px] mb-2">
                  $1500
                </h3>
                <p className="text-[16px] font-epilogue text-[#6B5B4B] mb-6 leading-relaxed">
                  Provide your business with a variety of digital solutions to
                  promote.
                </p>
                <ul className="space-y-3 mb-8 text-[16px] text-[#6B5B4B]">
                  <li
                    className="flex font-epilogue items-center gap-2 cursor-pointer"
                    onClick={() => toggle("brandDesign1")}
                  >
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EF6D58] text-white text-xs"
                      aria-hidden="true"
                    >
                      <img
                        src={toggles.brandDesign1 ? minus : plus}
                        alt={toggles.brandDesign1 ? "minus" : "plus"}
                        className="h-full w-full"
                      />
                    </span>
                    Brand Design
                  </li>

                  <li
                    className="flex font-epilogue items-center gap-2 cursor-pointer"
                    onClick={() => toggle("marketAnalysis1")}
                  >
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EF6D58] text-white text-xs"
                      aria-hidden="true"
                    >
                      <img
                        src={toggles.marketAnalysis1 ? minus : plus}
                        alt={toggles.marketAnalysis1 ? "minus" : "plus"}
                        className="h-full w-full"
                      />
                    </span>
                    Market Analysis
                  </li>

                  <li
                    className="flex font-epilogue items-center gap-2 cursor-pointer"
                    onClick={() => toggle("production1")}
                  >
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F0D9CC] text-[#D9C6B9] text-xs"
                      aria-hidden="true"
                    >
                      <img
                        src={toggles.production1 ? plus : minus}
                        alt={toggles.production1 ? "plus" : "minus"}
                        className="h-full w-full"
                      />
                    </span>
                    Production
                  </li>
                </ul>
                <a href="/">
                  <button
                    type="button"
                    className="font-extrabold text-[16px] w-[158px] h-[48px] uppercase bg-[#EF6D58] text-white px-5 py-2 rounded shadow-[0_2px_6px_rgba(0,0,0,0.1)] font-epilogue hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow"
                  >
                    Contact Us
                  </button>
                </a>
              </article>

              <article className="flex-1 bg-[#FAEBD7] border border-[#EF6D58] rounded-md p-6 md:p-7">
                <h4 className="text-[16px] font-epilogue font-semibold tracking-widest text-[#EF6D58] uppercase mb-4">
                  Design · Code
                </h4>
                <h3 className="font-extrabold font-epilogue text-black text-[40px] mb-2">
                  $2900
                </h3>
                <p className="text-[16px] font-epilogue text-[#6B5B4B] mb-6 leading-relaxed">
                  Help you hit your marketing goals and grow your business.
                </p>
                  <ul className="space-y-3 mb-8 text-[16px] text-[#6B5B4B]">
                    <li
                      className="flex font-epilogue items-center gap-2 cursor-pointer"
                      onClick={() => toggle("brandDesign2")}
                    >
                      <span
                        className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EF6D58] text-white text-xs"
                        aria-hidden="true"
                      >
                        <img
                          src={toggles.brandDesign2 ? minus : plus}
                          alt={toggles.brandDesign2 ? "minus" : "plus"}
                          className="h-full w-full"
                        />
                      </span>
                      Brand Design
                    </li>
                    <li
                      className="flex font-epilogue items-center gap-2 cursor-pointer"
                      onClick={() => toggle("marketAnalysis2")}
                    >
                      <span
                        className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EF6D58] text-white text-xs"
                        aria-hidden="true"
                      >
                        <img
                          src={toggles.marketAnalysis2 ? minus : plus}
                          alt={toggles.marketAnalysis2 ? "minus" : "plus"}
                          className="h-full w-full"
                        />
                      </span>
                      Market Analysis
                    </li>
                    <li
                      className="flex font-epilogue items-center gap-2 cursor-pointer"
                      onClick={() => toggle("production2")}
                    >
                      <span
                        className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EF6D58] text-white text-xs"
                        aria-hidden="true"
                      >
                        <img
                          src={toggles.production2 ? minus : plus}
                          alt={toggles.production2 ? "minus" : "plus"}
                          className="h-full w-full"
                        />
                      </span>
                      Production
                    </li>
                  </ul>
                <a href="/">
                  <button
                    type="button"
                    className="font-extrabold text-[16px] w-[158px] h-[48px] uppercase bg-white text-[#3B1F0B] px-5 py-2 rounded shadow-[0_2px_6px_rgba(0,0,0,0.1)] font-epilogue hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow"
                  >
                    Contact Us
                  </button>
                </a>
              </article>
            </div>
          </section>

          <section className="max-w-7xl mx-auto mb-6 flex flex-col md:flex-row gap-12 md:gap-70">
            <div className="max-w-md md:max-w-s">
              <h4 className="text-[16px] font-epilogue font-semibold tracking-widest text-[#EF6D58] uppercase mb-2">
                FAQ
              </h4>
              <h1 className="text-[40px] font-epilogue text-[#391400] font-extrabold leading-tight mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-[16px] font-epilogue text-[#6B5B4B] mb-6 leading-relaxed max-w-[420px]">
                A digital agency is a business you hire to outsource your
                digital marketing efforts, instead of handling in-house.
              </p>
              <h4 className="text-[16px] font-epilogue font-bold text-[#3B1F0B] cursor-pointer select-none">
                Contact Us
              </h4>
            </div>

            <div className="max-w-md md:max-w-xl">
              <div
                className="bg-white rounded-md shadow-md divide-y divide-[#F0D9CC] border border-[#EF6D58]"
                role="list"
              >
                {faqs.map((faq, index) => (
                  <div key={index} role="listitem">
                    <div
                      className={`p-8 flex justify-between items-center ${
                        index === openIndex ? "" : "!bg-[#FAEBD7]"
                      }`}
                    >
                      <h2 className="font-extrabold font-epilogue text-[#3B1F0B] text-[24px] leading-tight max-w-[85%]">
                        {faq.question}
                      </h2>
                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                        aria-expanded={openIndex === index}
                        aria-controls={`faq${index}`}
                        className="text-[#EF6D58] text-lg h-[32px] w-[32px]"
                        aria-label={`${
                          openIndex === index ? "Collapse" : "Expand"
                        } ${faq.question}`}
                      >
                        <img
                          src={openIndex === index ? up : down}
                          alt={openIndex === index ? "up" : "down"}
                          className="h-full w-full"
                        />
                      </button>
                    </div>
                    {openIndex === index && (
                      <p
                        id={`faq${index}`}
                        className="px-8 pb-8 text-[#6B5B4B] font-epilogue text-[16px] leading-relaxed max-w-[90%]"
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/*Mobile View*/}
        <main className="block md:hidden max-w-7xl mx-auto px-6 py-16 md:py-24">
          <section className="max-w-7xl mx-auto mb-20 md:mb-28">
            <div className="max-w-md md:max-w-lg mb-10">
              <p className="text-[16px] font-epilogue font-semibold tracking-widest text-[#EF6D58] uppercase mb-2">
                Pricing
              </p>
              <h2 className="text-[40px] font-epilogue font-extrabold text-black leading-[48px] w-[265px] h-[96px]">
                Check Our Pricing Plans
              </h2>
            </div>

            <div
              className="flex flex-col md:flex-row max-w-7xl mx-auto"
              role="list"
            >
              <article className="w-[329px] h-[493px] flex flex-col justify-between bg-[#FAEBD7] border border-[#EF6D58] rounded-md p-6 md:p-7">
                <div className="mt-6">
                  <p className="text-[16px] font-epilogue font-semibold tracking-widest text-[#EF6D58] w-[142px] h-[32px] mb-2">
                    CONSULTATION
                  </p>
                  <h3 className="font-extrabold font-epilogue text-black text-[40px] w-[93px] h-[48px] mb-6">
                    Free
                  </h3>
                  <p className="text-[16px] font-epilogue text-[#6B5B4B] mb-6 w-[273px] h-[69px] leading-relaxed">
                    Your digital marketing efforts, instead of handling
                    in-house.
                  </p>
                  <ul className="space-y-3 text-sm text-[#6B5B4B]">
                    <li className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EF6D58] text-white">
                        <img src={plus} alt="plus" className="h-full w-full" />
                      </span>
                      <span className="w-[103px] font-epilogue h-[32px]">
                        Brand Design
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F0D9CC] text-[#D9C6B9]">
                        <img
                          src={minus}
                          alt="minus"
                          className="h-full w-full"
                        />
                      </span>
                      <span className="w-[103px] h-[32px] font-epilogue">
                        Market Analysis
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F0D9CC] text-[#D9C6B9]">
                        <img
                          src={minus}
                          alt="minus"
                          className="h-full w-full"
                        />
                      </span>
                      <span className="w-[103px] h-[32px] font-epilogue">
                        Production
                      </span>
                    </li>
                  </ul>
                </div>
                <a href="/">
                  <button
                    type="button"
                    className="mb-6 font-extrabold text-[16px] w-[158px] h-[48px] uppercase bg-white text-[#3B1F0B] px-5 py-2 rounded shadow hover:shadow-lg transition-shadow font-epilogue"
                  >
                    Contact Us
                  </button>
                </a>
              </article>

              <article className="w-[329px] h-[493px] flex flex-col justify-between bg-white border border-[#EF6D58] shadow-md rounded-md p-6 md:p-7 relative">
                <span className="absolute top-10 left-4 w-[92px] h-[38px] bg-[#EF6D58] text-white text-[16px] font-semibold rounded-full flex items-center justify-center font-epilogue">
                  Popular
                </span>
                <div className="mt-18">
                  <p className="text-[16px] font-epilogue font-semibold tracking-widest text-[#EF6D58] uppercase mb-4">
                    Design
                  </p>
                  <h3 className="font-extrabold font-epilogue text-black text-[40px] mb-2">
                    $1500
                  </h3>
                  <p className="text-[16px] font-epilogue text-[#6B5B4B] mb-6 leading-relaxed">
                    Provide your business with a variety of digital solutions to
                    promote.
                  </p>
                  <ul className="space-y-3 text-[16px] text-[#6B5B4B]">
                    <li className="flex items-center font-epilogue gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EF6D58] text-white">
                        <img src={plus} alt="plus" className="h-full w-full" />
                      </span>
                      Brand Design
                    </li>
                    <li className="flex items-center font-epilogue gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EF6D58] text-white">
                        <img src={plus} alt="plus" className="h-full w-full" />
                      </span>
                      Market Analysis
                    </li>
                    <li className="flex items-center font-epilogue gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F0D9CC] text-[#D9C6B9]">
                        <img
                          src={minus}
                          alt="minus"
                          className="h-full w-full"
                        />
                      </span>
                      Production
                    </li>
                  </ul>
                </div>
                <a href="/">
                  <button
                    type="button"
                    className="mt-6 mb-4 font-extrabold text-[16px] w-[158px] h-[48px] uppercase bg-[#EF6D58] text-white px-5 py-2 rounded shadow hover:shadow-lg font-epilogue transition-shadow"
                  >
                    Contact Us
                  </button>
                </a>
              </article>

              <article className="w-[329px] h-[493px] flex flex-col justify-between bg-[#FAEBD7] border border-[#EF6D58] rounded-md p-6 md:p-7">
                <div className="mt-6">
                  <p className="text-[16px] font-epilogue font-semibold tracking-widest text-[#EF6D58] uppercase mb-4">
                    Design · Code
                  </p>
                  <h3 className="font-extrabold font-epilogue text-black text-[40px] mb-2">
                    $2900
                  </h3>
                  <p className="text-[16px] font-epilogue text-[#6B5B4B] mb-6 leading-relaxed">
                    Help you hit your marketing goals and grow your business.
                  </p>
                  <ul className="space-y-3 text-[16px] text-[#6B5B4B]">
                    <li className="flex font-epilogue items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EF6D58] text-white">
                        <img src={plus} alt="plus" className="h-full w-full" />
                      </span>
                      Brand Design
                    </li>
                    <li className="flex font-epilogue items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EF6D58] text-white">
                        <img src={plus} alt="plus" className="h-full w-full" />
                      </span>
                      Market Analysis
                    </li>
                    <li className="flex font-epilogue items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EF6D58] text-white">
                        <img src={plus} alt="plus" className="h-full w-full" />
                      </span>
                      Production
                    </li>
                  </ul>
                </div>
                <a href="/">
                  <button
                    type="button"
                    className="mt-6 mb-4 font-extrabold text-[16px] w-[158px] h-[48px] uppercase bg-white text-[#3B1F0B] px-5 py-2 rounded shadow hover:shadow-lg font-epilogue transition-shadow"
                  >
                    Contact Us
                  </button>
                </a>
              </article>
            </div>
          </section>

          <section className="max-w-7xl mx-auto mb-6 flex flex-col md:flex-row gap-12 md:gap-70">
            <div className="max-w-md md:max-w-s">
              <p className="text-[16px] font-epilogue font-semibold tracking-widest text-[#EF6D58] uppercase mb-2">
                FAQ
              </p>
              <h2 className="text-[40px] font-epilogue w-[329px] h-[144px] text-[#391400] font-extrabold leading-[48px] mb-4">
                Frequently Asked <br />
                Questions
              </h2>
              <p className="text-[16px] font-epilogue w-[329px] h-[96px] text-[#6B5B4B] mb-6 leading-relaxed max-w-[320px]">
                A digital agency is a business you hire to outsource your
                digital marketing efforts, instead of handling in-house.
              </p>
              <a href="/">
                <p className="text-[16px] font-epilogue font-extrabold text-[#3B1F0B] cursor-pointer select-none">
                  Contact Us
                </p>
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Pricing;
