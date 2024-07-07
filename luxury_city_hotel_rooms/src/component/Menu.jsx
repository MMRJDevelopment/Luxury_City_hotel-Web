import { useEffect, useState } from "react";

export default function Menu() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isScrolled = scrollY >= 710;

  return (
    <div
      className={`bg-[#473D35] h-[64px] w-full  transition-all duration-300 ease-in-out ${
        isScrolled
          ? `fixed top-[140px] z-[99999] transition-all duration-300 ease-in-out`
          : ""
      }`}
    >
      <div className="text-white font-ango text-[24px] font-normal text-center px-[10px] pt-3.5">
        <a className="px-[32px] py-[18px] hover:bg-[#21160E] " href="">
          Description
        </a>
        <a className="px-[32px] py-[18px] hover:bg-[#21160E] " href="">
          Room Facilities
        </a>
        <a className="px-[32px] py-[18px] hover:bg-[#21160E] " href="">
          Floor Plan
        </a>
        <a className="px-[32px] py-[18px] hover:bg-[#21160E] " href="">
          Photo Gallery
        </a>
        <a className="px-[32px] py-[18px] hover:bg-[#21160E] " href="">
          Rates
        </a>
        <a className="px-[32px] py-[18px] hover:bg-[#21160E] " href="">
          Availability
        </a>
        <a className="px-[32px] py-[18px] hover:bg-[#21160E] " href="">
          Reservation Form
        </a>
        <a className="px-[32px] py-[18px] hover:bg-[#21160E] " href="">
          Reviews
        </a>
      </div>
    </div>
  );
}
