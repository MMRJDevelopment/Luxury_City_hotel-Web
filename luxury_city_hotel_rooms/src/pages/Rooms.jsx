import Banner from "../component/Banner";
import ContentMenu from "../component/CntentMenu";
import Menu from "../component/Menu";
import MenuSideBar from "../component/MenuSideBar";
import Navigation from "../component/Navigation";


export default function Rooms() {
  return (
    <div>
      <Navigation></Navigation>
      <div>
        <Banner />
        <Menu />
        <ContentMenu />
        <MenuSideBar />
      </div>
    </div>
  );
}
