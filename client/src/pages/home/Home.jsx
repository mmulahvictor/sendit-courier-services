import DashBoard from "../../components/dashboard/DashBoard";
import NavBar from "../../components/navbar/NavBar";
import { useSelector } from "react-redux";
import HeroSection from "../../components/HeroSection/HeroSection";
import MidSection from "../../components/MidSection/MidSection";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const display = useSelector((state) => state.toggle.value);

  return (
    <div>
      <NavBar />
      <div className="flex">
        <div>{display ? <DashBoard /> : null}</div>
        <div className="flex flex-col w-[100%]">
        <HeroSection />
        <MidSection />
        <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
