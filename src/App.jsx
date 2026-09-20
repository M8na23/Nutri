import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import OverviewCounter from "./components/overview-counter/OverviewCounter";
import BannerDetails from "./components/bannerDetails/BannerDetails";
import BannerDetails1 from "./components/bannerDetails1/BannerDetails1";
import SimpleBanner from "./components/simpleBanner/SimpleBanner";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Contactus from "./Pages/Contactus";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import AboutUs from "./Pages/AboutUs";
import ProductPage from "./Pages/ProductPage";
import NosProduits from "./Pages/NosProduits";

function App() {
  const [page, setPage] = useState("home"); // current page
  const [selectedProductId, setSelectedProductId] = useState(1); // product id for ProductPage

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  // unified navigation function
  const handleNavigate = (pageName, productId = null) => {
    setPage(pageName);
    if (productId) setSelectedProductId(productId);
  };

  return (
    <div className="dark:bg-gray-900 bg-white">
      <Navbar onNavigate={handleNavigate} />

      {page === "home" && (
        <>
          <Hero />
          <OverviewCounter />
          <BannerDetails onNavigate={handleNavigate} />
          <BannerDetails1 onNavigate={handleNavigate}reverse={true} />
          <SimpleBanner onNavigate={handleNavigate}/>
          {/* <Blogs /> */}
        </>
      )}

      {page === "contact" && <Contactus />}
      {page === "privacy" && <PrivacyPolicy />}
      {page === "aboutus" && <AboutUs />}
      {page === "products" && <ProductPage productId={selectedProductId} />}
      {page === "nosProduits" && <NosProduits onNavigate={handleNavigate} />}


      <Footer onNavigate={handleNavigate} />

    </div>
  );
}

export default App;
