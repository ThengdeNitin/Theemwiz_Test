import "../App.css";
import { useState } from "react";
import agencyLogo from "../assets/main/agency_logo.png";
import star from "../assets/main/star.png";
import section from "../assets/main/section.png";
import smallpic from "../assets/main/smallpic.png";
import menu from "../assets/main/menu.png"

function Main() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="!bg-[#28293E] min-h-screen w-full">
        <header className="flex items-center justify-between px-4 md:px-12 py-1">
          {/* Desktop View */}
          <div
            className="hidden md:flex items-center space-x-2 absolute"
            style={{
              top: "16px",
              left: "165px",
              width: "152px",
              height: "48px",
            }}
          >
            <a href="/"><img src={agencyLogo} alt="Agency Logo" className="h-full w-auto" /></a>
          </div>

          <nav className="hidden md:flex space-x-20 text-sm font-epilogue text-white absolute"
          style={{
            width: "515px",
            height: "32px",
            top: "28px",
            left: "580px",
          }}>
            <a className="hover:underline font-epilogue" href="/">
              <h4>About</h4>
            </a>
            <a className="hover:underline font-epilogue" href="/">
            <h4>Services</h4>
            </a>
            <a className="hover:underline font-epilogue" href="/">
            <h4>Pricing</h4>
            </a>
            <a className="hover:underline font-epilogue" href="/">
            <h4>Blog</h4>
            </a>
          </nav>
          <a href="/"><button class="hidden md:block border border-gray-500 text-white font-bold text-xs px-7 py-2 rounded hover:bg-[#f36e4d] hover:border-[#f36e4d] font-epilogue absolute"
          style={{
            width: "138px",
            height: "48px",
            top: "16px",
            left: "1220px",
          }}>
            CONTACT
          </button></a>



          {/* Mobile View*/}
          <div className="flex md:hidden items-center space-x-2 absolute"
          style={{
            top: "16px",
            left: "23px",
            width: "152px",
            height: "48px",
          }}>
            <a href="/"><img src={agencyLogo} alt="Agency Logo" className="h-full w-auto" /></a>
          </div>
          <button class="flex md:hidden w-[48px] h-[48px] text-white font-bold text-xs px-2 py-2 rounded hover:bg-[#f36e4d] hover:border-[#f36e4d] absolute"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            top: "16px",
            left: "304px",
          }}>
            <img src={menu} alt="menu" className="h-full w-auto" />
          </button>
          {isOpen && (
        <div className="md:hidden text-center font-epilogue absolute w-[150px] top-[60px] left-53 right-4 bg-[#2b3045] rounded shadow-lg z-50 px-4 py-3 space-y-2">
          <a className="block hover:underline font-epilogue" href="/"><h4>About</h4></a>
          <a className="block hover:underline font-epilogue" href="/"><h4>Services </h4></a>
          <a className="block hover:underline font-epilogue" href="/"><h4>Pricing</h4></a>
          <a className="block hover:underline font-epilogue" href="/"><h4>Blog</h4></a>
        </div>
      )}
        </header>

        {/*Desktop View*/}
        <div
          className="hidden md:flex items-start justify-between bg-no-repeat px-40 pt-30 gap-[100px]"
          style={{
            backgroundImage: `url(${star})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "calc(50% - 230px) 130px",
          }}>
          <section className="w-1/2 pr-2">
            <p className="text-[#EF6D58] text-xs md:text-[16px] font-semibold tracking-widest mb-2 font-epilogue">
              <h4>MODERN STUDIO</h4>
            </p>
            <h1 className="text-white font-extrabold text-[40px] md:text-[72px] leading-tight mb-4 font-epilogue"
            >
              We’re Help
              <br />
              To Build Your
              <br />
              Dream Project
            </h1>
            <p className="text-gray-400 text-sm mb-6 max-w-[420px] md:text-[16px] font-epilogue">
              Agency provides a full service range including technical skills,
              design, business understanding.
            </p>
            <div className="flex items-center space-x-6">
            <a href="/"><button className="w-[154px] h-[48px] bg-[#EF6D58] text-white font-bold text-xs rounded tracking-widest hover:bg-[#e05a3a] transition font-epilogue">
              <h1>HOW WE WORK</h1>
              </button>
              </a>
              <a
                className="text-white md:text-[16px] text-sm font-epilogue"
                href="/"
              >
                <h1>Contact Us</h1>
              </a>
            </div>
            <div className="flex items-center space-x-3 mt-16 mb-16">
              <img
                src={smallpic}
                alt="smallpic"
                className="h-auto max-w-full"
              />
              <div className="text-gray-400 text-xs w-[327px] h-[32px] font-epilogue">
                <p className="mb-1 md:text-[16px] font-epilogue">"Put themselves in the merchant's shoes"</p>
                <p className="text-white font-normal md:text-[16px] font-epilogue">Meta Inc.</p>
              </div>
            </div>
          </section>

          <section className="w-1/2 pr-2">
            <img
              src={section}
              alt="section"
              className="h-auto w-full"
              style={{ height: 500 }}
            />
          </section>
        </div>

        {/*Mobile View*/}
        <div className="flex-col md:hidden items-start justify-between bg-no-repeat px-8 pt-20">
          <section className="">
            <img
              src={section}
              alt="section"
              className="h-[334px] w-[329px]"
            />
          </section>

          <section className="-mb-[60px]">
            <p className="text-[#f36e4d] text-xs md:text-[16px] font-semibold tracking-widest mb-2 font-epilogue">
              MODERN STUDIO
            </p>
            <h1 className="text-white font-extrabold text-[56px] leading-tight mb-4 font-epilogue"
            >
              We’re Help
              <br />
              To Build Your
              <br />
              Dream Project
            </h1>
            <p className="text-gray-400 text-[16px] mb-6 max-w-[420px] md:text-[16px] font-epilogue">
              Agency provides a full service range including technical skills,
              design, business understanding.
            </p>
            <div className="flex items-center space-x-6">
            <a href="/"><button className="w-[154px] h-[48px] bg-[#f36e4d] text-white font-bold text-xs rounded tracking-widest hover:bg-[#e05a3a] transition font-epilogue">
                HOW WE WORK
              </button>
              </a>
              <a
                className="text-white md:text-[16px] text-sm hover:underline font-epilogue"
                href="/"
              >
                Contact Us
              </a>
            </div>
            <div className="flex items-center space-x-3 mt-6 mb-16">
              <img
                src={smallpic}
                alt="smallpic"
                className="h-auto max-w-full"
              />
              <div className="text-gray-400 mt-8 mb-2 text-xs w-[265px] h-[64px] font-epilogue">
                <p className="mb-1 md:text-[16px] font-epilogue">"Put themselves in the merchant's shoes"</p>
                <p className="text-white font-normal md:text-[16px] font-epilogue">Meta Inc.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Main;
