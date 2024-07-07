import Banner from "../component/Banner";
import ContentMenu from "../component/CntentMenu";
import Future from "../component/Future";
import Menu from "../component/Menu";
import MenuSideBar from "../component/MenuSideBar";
import Navigation from "../component/Navigation";
import RelatedRooms from "../component/RelatedRooms";


export default function Rooms() {
  return (
    <div>
      <Navigation></Navigation>
      <div>
        <Banner className="" />
        <Menu className="z-50 mt-[-40px]"/>
      <div className="flex gap-16 py-[144px] px-[64px]  ">
        <ContentMenu />
        <MenuSideBar />
      </div>
      <div className="py-[144px] px-[64px]">
          <RelatedRooms />
        </div>
        <Future />
      </div>
    </div>
  );
}
