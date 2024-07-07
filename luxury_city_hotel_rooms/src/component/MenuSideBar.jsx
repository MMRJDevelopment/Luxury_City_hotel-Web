import { FaCalendarAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";

export default function MenuSideBar() {
  return (
    <div>
      <div className="bg-[#664831] px-[30px] py-[35px] w-[392px] mr-[64px] ">
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
            <h6 className="text-[16px] text-white font-ango py-[8px]">
              1 room
            </h6>
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
            <div className="flex items-center border-b-2 " />
            <div className="flex items-end justify-between text-white text-[14px] font-ango pt-2">
              <p>$89</p>
              <p className="items-center ">$813</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[12px] font-robo text-white pb-[8px]">AMENITIES</p>
          <div className="flex gap-4 pb-[16px]">
            <div className="w-[24px] h-[24px] border-2 border-white" />
            <p className="text-[16px] font-ango font-normal text-white">
              Air Conditioner
            </p>
          </div>
          <div className="flex gap-4 pb-[16px]">
            <div className="w-[24px] h-[24px] border-2 border-white" />
            <p className="text-[16px] font-ango font-normal text-white">
              Family Friendly
            </p>
          </div>
          <div className="flex gap-4 pb-[16px]">
            <div className="w-[24px] h-[24px] border-2 border-white" />
            <p className="text-[16px] font-ango font-normal text-white">
              Hair Dryer
            </p>
          </div>
          <div className="flex gap-4 pb-[16px]">
            <div className="w-[24px] h-[24px] border-2 border-white" />
            <p className="text-[16px] font-ango font-normal text-white">
              LCD Television
            </p>
          </div>
          <div className="flex gap-4 pb-[16px]">
            <div className="w-[24px] h-[24px] border-2 border-white" />
            <p className="text-[16px] font-ango font-normal text-white">
              Minibar
            </p>
          </div>
          <div className="flex gap-4 pb-[16px]">
            <div className="w-[24px] h-[24px] border-2 border-white" />
            <p className="text-[16px] font-ango font-normal text-white">
              No Smoking
            </p>
          </div>
          <div className="flex gap-4 pb-[16px]">
            <div className="w-[24px] h-[24px] border-2 border-white" />
            <p className="text-[16px] font-ango font-normal text-white">
              Parking
            </p>
          </div>
          <div className="flex gap-4 pb-[16px]">
            <div className="w-[24px] h-[24px] border-2 border-white" />
            <p className="text-[16px] font-ango font-normal text-white">
              Pets Allowed
            </p>
          </div>
          <div className="flex gap-4 pb-[16px]">
            <div className="w-[24px] h-[24px] border-2 border-white" />
            <p className="text-[16px] font-ango font-normal text-white">
              Safe Deposit Box
            </p>
          </div>
        </div>
        <div className="pt-5">
          <button className="bg-[#B5885E] w-[328px] h-[48px] text-white font-robo font-normal text-sm">
            CHECK AVAILABILITY
          </button>
        </div>
      </div>
      <div className="w-[392px] h-[528px]">
        <div className="bg-[#473D35] w-[392px] h-[528px]">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
