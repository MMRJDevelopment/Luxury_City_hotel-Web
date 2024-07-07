import bannerim from "../image/bannerimg2.jpg";
import { TbRotateRectangle } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { IoImageOutline } from "react-icons/io5";

export default function Banner() {
  return (
    <>
      <div className="relative sm:pt-[120px]">
        <img className=" absolute " src={bannerim} alt="" />
        <div className="bg-[#473D35]  w-full 2xl:h-[848px] lg:h-[848px] mt-0 mr-0 opacity-40 " />
        <div className="absolute mt-[-260px] sm:mt-[1020px] flex items-center justify-center px-[64px] md:px-0 lg:px-0 sm:px-0 ">
          <div>
            <h1 className="text-[64px]  sm:text-[32px] sm:mt-[60px] sm:ml-4   text-white font-normal font-ango pb-[32px]">
              Superior Single Room
            </h1>
            <div className="2xl:flex  items-center justify-center  sm:absolute sm:top-[200px] sm:flex  sm:right-0 gap-6 sm:bg-black">
              <div className="flex items-center justify-center gap-2">
                <TbRotateRectangle className="text-[56px] text-white" />
                <p className="font-robo text-[18px] text-white font-normal">
                  30 Sqm
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <IoBedOutline className="text-[56px] text-white" />
                <p className="font-robo text-[18px] text-white font-normal">
                  1 Single Bed
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <IoIosPeople className="text-[56px] text-white" />
                <p className="font-robo text-[18px] text-white font-normal">
                  1 Adult
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <IoImageOutline className="text-[56px] text-white" />
                <p className="font-robo text-[18px] text-white font-normal">
                  Gardern View
                </p>
              </div>
            </div>
          </div>
          <div className="pl-[930px] lg:pl-0 md:pl-0 sm:pl-0 sm:absolute sm:top-0 sm:left-0">
            <p className="text-white font-ango font-normal text-[18px]">From</p>
            <h6 className="font-ango text-[48px] text-white font-normal">
              $199/
              <samp className="font-ango font-normal text-[18px] text-white">
                night
              </samp>
            </h6>
            <button className="px-6 py-4 bg-[#BF885E] font-robo text-sm text-white font-normal ">
              BOOK THIS ROOM
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
