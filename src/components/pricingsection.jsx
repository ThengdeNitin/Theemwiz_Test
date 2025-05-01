import "../App.css";
import down from "../assets/pricing/down.png";
import up from "../assets/pricing/up.png";
import plus from "../assets/pricing/plus.png";
import minus from "../assets/pricing/minus.png";

function Pricing() {
  return (
    <>
      <div className="bg-[#F3D1BF]">
        <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <section className="max-w-7xl mx-auto mb-20 md:mb-28">
            <div className="max-w-md md:max-w-lg mb-26">
              <p className="text-[16px] font-semibold tracking-widest text-[#E37B65] uppercase mb-2">
                Pricing
              </p>
              <h2 className="text-[56px] font-extrabold text-black leading-tight">
                Check Our <br />
                Pricing Plans
              </h2>
            </div>

            <div className="flex flex-col md:flex-row max-w-7xl mx-auto" role="list">
              <article className="flex-1 bg-[#F3D1BF] border border-[#E37B65] rounded-md p-6 md:p-7">
                <p className="text-[16px] font-semibold tracking-widest text-[#E37B65] uppercase mb-4">
                  Consultation
                </p>
                <h3 className="font-extrabold text-black text-[40px] mb-2">Free</h3>
                <p className="text-[16px] text-[#6B5B4B] mb-6 leading-relaxed">
                  Your digital marketing efforts,
                  instead of handling in-house.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-[#6B5B4B]">
                  <li className="flex items-center gap-2">
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#E37B65] text-white text-[16px]"
                      aria-hidden="true"
                    >
                      <img src={plus} alt="plus" className="h-full w-full" /> 
                    </span>
                    Brand Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F0D9CC] text-[#D9C6B9] text-[16px]"
                      aria-hidden="true"
                    >
                      <img src={minus} alt="minus" className="h-full w-full" /> 
                    </span>
                    Market Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F0D9CC] text-[#D9C6B9] text-[16px]"
                      aria-hidden="true"
                    >
                      <img src={minus} alt="minus" className="h-full w-full" /> 
                    </span>
                    Production
                  </li>
                </ul>
                <button
                  type="button"
                  className="font-extrabold text-[16px] w-[158px] h-[48px] uppercase bg-white text-[#3B1F0B] px-5 py-2 rounded shadow-[0_2px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow"
                >
                  Contact Us
                </button>
              </article>

              <article className="flex-1 bg-white rounded-md p-4 md:p-7 relative border border-[#E37B65] shadow-md -mt-12 z-10">
                <span className="absolute top-4 left-4 w-[92px] h-[38px] bg-[#E37B65] border-[#E37B65] text-white text-[16px] font-semibold rounded-full px-4 py-2">
                  Popular
                </span>
                <p className="text-[16px] font-semibold tracking-widest text-[#E37B65] uppercase mb-4 mt-10">
                  Design
                </p>
                <h3 className="font-extrabold text-black text-[40px] mb-2">$1500</h3>
                <p className="text-[16px] text-[#6B5B4B] mb-6 leading-relaxed">
                  Provide your business with a variety of digital
                  solutions to promote.
                </p>
                <ul className="space-y-3 mb-8 text-[16px] text-[#6B5B4B]">
                  <li className="flex items-center gap-2">
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#E37B65] text-white text-xs"
                      aria-hidden="true"
                    >
                      <img src={plus} alt="plus" className="h-full w-full" /> 
                    </span>
                    Brand Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#E37B65] text-white text-xs"
                      aria-hidden="true"
                    >
                      <img src={plus} alt="minus" className="h-full w-full" /> 
                    </span>
                    Market Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F0D9CC] text-[#D9C6B9] text-xs"
                      aria-hidden="true"
                    >
                      <img src={minus} alt="minus" className="h-full w-full" /> 
                    </span>
                    Production
                  </li>
                </ul>
                <button
                  type="button"
                  className="font-extrabold text-[16px] w-[158px] h-[48px] uppercase bg-[#E37B65] text-white px-5 py-2 rounded shadow-[0_2px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow"
                >
                  Contact Us
                </button>
              </article>

              <article className="flex-1 bg-[#F3D1BF] border border-[#E37B65] rounded-md p-6 md:p-7">
                <p className="text-[16px] font-semibold tracking-widest text-[#E37B65] uppercase mb-4">
                  Design · Code
                </p>
                <h3 className="font-extrabold text-black text-[40px] mb-2">$2900</h3>
                <p className="text-[16px] text-[#6B5B4B] mb-6 leading-relaxed">
                  Help you hit your marketing goals and
                  grow your business.
                </p>
                <ul className="space-y-3 mb-8 text-[16px] text-[#6B5B4B]">
                  <li className="flex items-center gap-2">
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#E37B65] text-white text-xs"
                      aria-hidden="true"
                    >
                      <img src={plus} alt="plus" className="h-full w-full" /> 
                    </span>
                    Brand Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#E37B65] text-white text-xs"
                      aria-hidden="true"
                    >
                      <img src={plus} alt="minus" className="h-full w-full" /> 
                    </span>
                    Market Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#E37B65] text-white text-xs"
                      aria-hidden="true"
                    >
                      <img src={plus} alt="minus" className="h-full w-full" /> 
                    </span>
                    Production
                  </li>
                </ul>
                <button
                  type="button"
                  className="font-extrabold text-[16px] w-[158px] h-[48px] uppercase bg-white text-[#3B1F0B] px-5 py-2 rounded shadow-[0_2px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow"
                >
                  Contact Us
                </button>
              </article>
            </div>
          </section>

          <section className="max-w-7xl mx-auto mb-6 flex flex-col md:flex-row gap-12 md:gap-70">
            <div className="max-w-md md:max-w-s">
              <p className="text-[16px] font-semibold tracking-widest text-[#E37B65] uppercase mb-2">
                FAQ
              </p>
              <h2 className="text-[40px] text-[#391400] font-extrabold leading-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[16px] text-[#6B5B4B] mb-6 leading-relaxed max-w-[320px]">
                A digital agency is a business you hire to outsource your
                digital marketing efforts, instead of handling in-house.
              </p>
              <p className="text-[16px] font-extrabold text-[#3B1F0B] cursor-pointer select-none">
                Contact Us
              </p>
            </div>

            <div className="w-full">
              <div
                className="bg-white rounded-md shadow-md divide-y divide-[#F0D9CC] border border-[#E37B65]"
                role="list"
              >
                <div className="p-8" role="listitem">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-extrabold text-[#3B1F0B] text-[24px] leading-tight max-w-[85%]">
                      A digital agency is a business
                    </h3>
                    <button
                      aria-expanded="true"
                      aria-controls="faq1"
                      className="text-[#E37B65] text-lg h-[32px] w-[32px]"
                      aria-label="Collapse A digital agency is a business"
                    >
                      <img src={up} alt="up" className="h-full w-full" />
                    </button>
                    
                  </div>
                  <p
                    id="faq1"
                    className="text-[#6B5B4B] text-[16px] leading-relaxed max-w-[90%]"
                  >
                    Digital marketing efforts, instead of handling in-house.
                    They can provide your business with a variety of digital
                    solutions to promote your product or service online and help
                    you hit your marketing goals and grow your business.
                  </p>
                </div>

                <div
                  className="p-8 cursor-pointer flex justify-between items-center !bg-[#F3D1BF] border-[#E37B65]"
                  role="listitem"
                >
                  <h3 className="font-extrabold text-[#3B1F0B] text-[24px] leading-tight max-w-[85%]">
                    Hire to outsource your digital
                  </h3>
                  <button
                    aria-expanded="false"
                    aria-controls="faq2"
                    className="text-[#E37B65] text-lg h-[32px] w-[32px]"
                    aria-label="Expand Hire to outsource your digital"
                  >
                   <img src={down} alt="down" className="h-full w-full" /> 
                  </button>
                </div>

                <div className="p-8 cursor-pointer flex justify-between items-center !bg-[#F3D1BF] border-[#E37B65]" role="listitem">
                  <h3 className="font-extrabold text-[#3B1F0B] text-[24px] leading-tight max-w-[85%]">
                    Marketing efforts
                  </h3>
                  <button
                    aria-expanded="false"
                    aria-controls="faq3"
                    className="text-[#E37B65] text-lg h-[32px] w-[32px]"
                    aria-label="Expand Marketing efforts"
                  >
                    <img src={down} alt="down" className="h-full w-full" /> 
                  </button>
                </div>

                <div
                  className="p-8 cursor-pointer flex justify-between items-center rounded-b-md !bg-[#F3D1BF] border-[#E37B65]"
                  role="listitem"
                >
                  <h3 className="font-extrabold text-[#3B1F0B] text-[24px] leading-tight max-w-[85%]">
                    Can provide your business
                  </h3>
                  <button
                    aria-expanded="false"
                    aria-controls="faq4"
                    className="text-[#E37B65] text-lg h-[32px] w-[32px]"
                    aria-label="Expand Can provide your business"
                  >
                    <img src={down} alt="down" className="h-full w-full" /> 
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Pricing;
