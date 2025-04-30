import "../App.css";
import agencyLogo from "../assets/main/agency_logo.png";
import star from "../assets/main/star.png";
import section from "../assets/main/section.png";
import smallpic from "../assets/main/smallpic.png"

function Main() {
  return (
    <>
      <div className="!bg-[#1f2437] min-h-screen w-full">
        <header className="flex items-center justify-between px-4 md:px-12 py-4">
          <div className="flex items-center space-x-2">
            <img src={agencyLogo} alt="Agency Logo" className="h-full w-auto" />
          </div>
          <nav className="hidden md:flex space-x-10 text-sm font-normal text-white">
            <a className="hover:underlin" href="#">
              About
            </a>
            <a className="hover:underline" href="#">
              Services
            </a>
            <a className="hover:underline" href="#">
              Pricing
            </a>
            <a className="hover:underline" href="#">
              Blog
            </a>
          </nav>
          <button class="hidden md:block border border-gray-500 text-white font-bold text-xs px-5 py-2 rounded hover:bg-[#f36e4d] hover:border-[#f36e4d] transition">
            CONTACT
          </button>
        </header>

        <div className="flex items-start justify-between px-70 pt-20">
          <section>
            <p className="text-[#f36e4d] text-xs font-semibold tracking-widest mb-2 font-epilogue">
              MODERN STUDIO
            </p>
            <h1
              className="text-white font-extrabold text-[40px] md:text-[48px] leading-tight mb-4 font-epilogue"
              style={{
                backgroundImage: `url(${star})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top right",
                backgroundSize: "contain",
              }}
            >
              We’re Help
              <br />
              To Build Your
              <br />
              Dream Project
            </h1>
            <p className="text-gray-400 text-sm mb-6 max-w-[320px] font-epilogue">
              Agency provides a full service range including technical skills,
              design, business understanding.
            </p>
            <div className="flex items-center space-x-6">
              <button className="w-[138px] h-[48px] bg-[#f36e4d] text-white font-bold text-xs rounded tracking-widest hover:bg-[#e05a3a] transition font-epilogue">
                HOW WE WORK
              </button>
              <a
                className="text-white text-sm hover:underline font-epilogue"
                href="#"
              >
                Contact Us
              </a>
            </div>
            <div className="flex items-center space-x-3 mt-16">
            <img src={smallpic} alt="smallpic" className="h-auto max-w-full"/>
              <div className="text-gray-400 text-xs max-w-[220px] font-epilogue">
                <p className="mb-1">"Put themselves in the merchant's shoes"</p>
                <p className="text-white font-normal">Meta Inc.</p>
              </div>
            </div>
          </section>

          <section className="relative">
            <img src={section} alt="section" className="h-auto max-w-full" style={{ height: 400}}/>
          </section>
        </div>
      </div>
    </>
  );
}

export default Main;
