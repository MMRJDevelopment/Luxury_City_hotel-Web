import { FaCalendarAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";

export default function MenuSideBar() {
  return (
    <div className="bg-red-500 px-[30px] py-[35px] w-[392px]">
      <div className="flex items-center justify-start mb-[32px] text-white gap-4">
        <FaCalendarAlt className="text-[30px]" />
        <h2 className="text-[24px] font-ango font-normal">
          Check Availability
        </h2>
      </div>
      <div className="mb-[32px]">
        <p className="text-[12px] text-[#D4CFCD]">ARRIVAL DATE</p>
        <div className="flex items-center border-b-2 ">
          <h6 className="text-[16px] text-white font-ango py-[8px]">
            Friday, 15 April
          </h6>
          <FaAngleDown className="text-white ml-[200px] " />
        </div>
      </div>
      <div className="mb-[32px]">
        <p className="text-[12px] text-[#D4CFCD]">DEPARTURE DATE</p>
        <div className="flex items-center border-b-2 ">
          <h6 className="text-[16px] text-white font-ango py-[8px]">
            Wednesday, 27 April
          </h6>
          <FaAngleDown className="text-white ml-[155px] " />
        </div>
      </div>
      <div className="mb-[32PX]">
        <p className="text-[12px] text-[#D4CFCD]">ROOMS</p>
        <div className="flex items-center border-b-2 ">
          <h6 className="text-[16px] text-white font-ango py-[8px]">1 room</h6>
          <FaAngleDown className="text-white ml-[200px] " />
        </div>
        <div className="flex gap-10 mt-[32px]">
          <div className="mB-[32PX] w-[150px]">
            <p className="text-[12px] text-[#D4CFCD]">ADULTS</p>
            <div className="flex items-center border-b-2 ">
              <h6 className="text-[16px] text-white font-ango py-[8px]">1</h6>
              <div className="ml-[120px]">
                <RiArrowUpSLine className="text-white  " />
                <FaAngleDown className="text-white  " />
              </div>
            </div>
          </div>
          <div className="mb-[32PX] w-[150px]">
            <p className="text-[12px] text-[#D4CFCD]">CHILDREN</p>
            <div className="flex items-center border-b-2 ">
              <h6 className="text-[16px] text-white font-ango py-[8px]">1</h6>
              <div className="ml-[120px]">
                <RiArrowUpSLine className="text-white text-[18px]  " />
                <FaAngleDown className="text-white  " />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[32px]">
          <p className="text-[12px] text-[#D4CFCD] pb-3">RATE PER NIGHT</p>
          <div className="flex items-center border-b-2 ">
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
