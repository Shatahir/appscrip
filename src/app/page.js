import Footer from "@/Components/Footer/Footer";
import HomeTopText from "@/Components/HomeTopText/HomeTopText";
import ProductCollection from "@/Components/ProductCollection/ProductCollection";
import Navbar from "@/Components/TopNavbar/Navbar";
import Ribbon from "@/Components/TopRibbon/Ribbon";

export default function Home() {
  return (
    <>
    <Ribbon />
    <Navbar />
    <HomeTopText />
    <ProductCollection />
    <Footer />
    </>
  );
}
