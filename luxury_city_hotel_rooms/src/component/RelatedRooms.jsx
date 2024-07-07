import { useState } from "react";
import image from "../image/durooms.jpg";

export default function RelatedRooms() {
  const [isHover, setIshover] = useState({ hover: false, pos: 1 });

  function hoverHandler(isEnter, position) {
    if (isEnter && position) {
      setIshover({
        hover: true,
        pos: position,
      });
    }
  }
  return (
    <div>
      <h1 className="text-[56px] font-ango text-[#21160E] pb-10">
        Related Rooms
      </h1>
      <div className="flex gap-10">
        <div
          className=" relative flex"
          onMouseEnter={() => hoverHandler(true, 1)}
          onMouseLeave={() => hoverHandler(false, 1)}
        >
          <div>
            <img className="w-[570px] h-[570px] " src={image} alt="" />
            <div
              className={`overflow-hidden w-[506px] transition-all ease-in-out duration-1000 h-[${
                isHover.hover && isHover.pos === 1 ? "296px" : "206px"
              }] bg-white absolute mt-[${
                isHover.hover && isHover.pos === 1 ? "-170px" : "-260px"
              }] mx-[30px]`}
            >
              <h5 className="text-[36px] font-ango font-normal text-[#21160E] text-center  pt-[44px] ">
                Deluxe Double Room
              </h5>
              <p className=" text-[16px] font-ango font-normal text-[#21160E] text-center  ">
                From{" "}
                <span className=" text-[32px] font-ango font-normal text-[#21160E] text-center ">
                  $329/{" "}
                </span>
                night
              </p>
              <div
                className={`text-center transition-all ease-in-out duration-1000 pt-4 ${
                  isHover.hover && isHover.pos === 1
                    ? "translate-y-0"
                    : "translate-y-16"
                }`}
              >
                <button className="w-[160px] py-4 bg-[#D9945F] text-white text-[16px] font-robo">
                  BOOK NOW
                </button>
                <button className="w-[160px] px-8 py-4 bg-[#A38C7A] text-white text-[16px] font-robo ml-6">
                  DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" relative flex"
          onMouseEnter={() => hoverHandler(true, 2)}
          onMouseLeave={() => hoverHandler(false, 2)}
        >
          <div>
            <img className="w-[570px] h-[570px] " src={image} alt="" />
            <div
              className={`overflow-hidden w-[506px] transition-all ease-in-out duration-1000 h-[${
                isHover.hover && isHover.pos === 2 ? "296px" : "206px"
              }] bg-white absolute mt-[${
                isHover.hover && isHover.pos === 2 ? "-260px" : "-170px"
              }] mx-[30px]`}
            >
              <h5 className="text-[36px] font-ango font-normal text-[#21160E] text-center  pt-[44px] ">
                Deluxe Double Room
              </h5>
              <p className=" text-[16px] font-ango font-normal text-[#21160E] text-center  ">
                From{" "}
                <span className=" text-[32px] font-ango font-normal text-[#21160E] text-center ">
                  $329/{" "}
                </span>
                night
              </p>
              <div
                className={`text-center transition-all ease-in-out duration-1000 pt-4 ${
                  isHover.hover && isHover.pos === 2
                    ? "translate-y-0"
                    : "translate-y-16"
                }`}
              >
                <button className="w-[160px] py-4 bg-[#D9945F] text-white text-[16px] font-robo">
                  BOOK NOW
                </button>
                <button className="w-[160px] px-8 py-4 bg-[#A38C7A] text-white text-[16px] font-robo ml-6">
                  DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" relative flex"
          onMouseEnter={() => hoverHandler(true, 3)}
          onMouseLeave={() => hoverHandler(false, 3)}
        >
          <div>
            <img className="w-[570px] h-[570px] " src={image} alt="" />
            <div
              className={`overflow-hidden w-[506px] transition-all ease-in-out duration-1000 h-[${
                isHover.hover && isHover.pos === 3 ? "296px" : "206px"
              }] bg-white absolute mt-[${
                isHover.hover && isHover.pos === 3 ? "-260px" : "-170px"
              }] mx-[30px]`}
            >
              <h5 className="text-[36px] font-ango font-normal text-[#21160E] text-center  pt-[44px] ">
                Deluxe Double Room
              </h5>
              <p className=" text-[16px] font-ango font-normal text-[#21160E] text-center  ">
                From{" "}
                <span className=" text-[32px] font-ango font-normal text-[#21160E] text-center ">
                  $329/{" "}
                </span>
                night
              </p>
              <div
                className={`text-center transition-all ease-in-out duration-1000 pt-4 ${
                  isHover.hover && isHover.pos === 3
                    ? "translate-y-0"
                    : "translate-y-16"
                }`}
              >
                <button className="w-[160px] py-4 bg-[#D9945F] text-white text-[16px] font-robo">
                  BOOK NOW
                </button>
                <button className="w-[160px] px-8 py-4 bg-[#A38C7A] text-white text-[16px] font-robo ml-6">
                  DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
