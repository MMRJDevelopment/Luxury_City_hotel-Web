import logo from "../image/logo.png";
import arow from "../image/arrow_menu.svg";
import award1 from "../image/award1.png";
import award2 from "../image/award2.png";
import award3 from "../image/award3.png";


export default function Future() {
  return (
    <div>
      <div className="bg-[#473D35] text-white font-sans mt-[100px]">
        <div className="pt-[50px] px-[64px]">
          <div className="flex justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img src={logo} alt="" />
              <p className="mt-4 text-[16px] font-robo text-[#D4CFCD] pb-4 font-normal">
                7 Rue Caulaincourt, 75018 Paris, France
              </p>
              <p className="text-[16px] font-robo text-[#D4CFCD] font-normal pb-4">
                <span className="font-semibold">Phone:</span> +1 800 603 6035
                (Viber, WhatsApp)
              </p>
              <p className="text-[16px] font-robo text-[#D4CFCD] font-normal pb-4">
                <span className="font-semibold">Fax:</span> +1 800 889 9898
              </p>
              <p className="text-[16px] font-robo text-[#D4CFCD] font-normal ">
                <span className="font-semibold">Email:</span>
                mail@companyname.com
              </p>
            </div>

            <div className="md:ml-12">
              <h2 className="text-2xl  mb-4 texe-[24px] font-ango font-normal text-white">
                Menu
              </h2>
              <ul className="list-none">
                <li className="mb-2 flex">
                  <img src={arow} className="mr-2 w-8" />
                  <a
                    href="#"
                    className="hover:text-gray-400 hover:transition-all"
                  >
                    About
                  </a>
                </li>
                <li className="mb-2 flex">
                  <img src={arow} className="mr-2 w-8" />
                  <a href="#" className="hover:text-gray-400">
                    Special Offers
                  </a>
                </li>
                <li className="mb-2 flex">
                  <img src={arow} className="mr-2 w-8" />
                  <a href="#" className="hover:text-gray-400">
                    News
                  </a>
                </li>
                <li className="flex">
                  <img src={arow} className="mr-2 w-8" />
                  <a href="#" className="hover:text-gray-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:ml-12">
              <h2 className="text-2xl  mb-4 texe-[24px] font-ango font-normal text-white">
                Rooms & Suits
              </h2>
              <ul className="list-none">
                <li className="mb-2 flex">
                  <img src={arow} className="mr-2 w-8" />
                  <a href="#" className="hover:text-gray-400">
                    Classic
                  </a>
                </li>
                <li className="mb-2 flex">
                  <img src={arow} className="mr-2 w-8" />
                  <a href="#" className="hover:text-gray-400">
                    Superior
                  </a>
                </li>
                <li className="mb-2 flex">
                  <img src={arow} className="mr-2 w-8" />
                  <a href="#" className="hover:text-gray-400">
                    Deluxe
                  </a>
                </li>
                <li className="flex">
                  <img src={arow} className="mr-2 w-8" />
                  <a href="#" className="hover:text-gray-400">
                    Master
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:ml-12">
              <h2 className="text-2xl  mb-4 texe-[24px] font-ango font-normal text-white">
                Stay Connected
              </h2>
              <ul className="list-none">
                <li className="mb-2 flex">
                  <img src={arow} className="mr-2 w-8" />
                  <a href="#" className="hover:text-gray-400">
                    Facebook
                  </a>
                </li>
                <li className="mb-2 flex">
                  <img src={arow} className="mr-2 w-8" />
                  <a href="#" className="hover:text-gray-400">
                    Instagram
                  </a>
                </li>
                <li className="mb- flex">
                  <img src={arow} className="mr-2 w-8" />
                  <a href="#" className="hover:text-gray-400">
                    Twitter
                  </a>
                </li>
                <li className="flex">
                  <img src={arow} className="mr-2 w-8" />
                  <a href="#" className="hover:text-gray-400">
                    Tripadvisor
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <h2 className="text-2xl  mb-4 texe-[24px] font-ango font-normal text-white">
                Our Awards
              </h2>
              <div className="flex flex-row gap-6 items-center">
                <img
                  src={award1}
                  alt="Conde Nast Traveler Gold List"
                  className="w-24 h-24 mb-4"
                />
                <img
                  src={award2}
                  alt="Tripadvisor Certificate of Excellence"
                  className="w-24 h-24 mb-4"
                />
                <img
                  src={award3}
                  alt="World Travel Award Winner"
                  className="w-24 h-24"
                />
              </div>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-500">
            Copyright © 2021 Hôtel Privé. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
