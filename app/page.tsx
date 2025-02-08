
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import LatestProducts from "./components/LatestProducts";
import ShopexOffer from "./components/ShopexOffer";
import GetLatest from "./components/GetLatest";
import Blog from "./components/Blog";
import Unique from "./components/Unique";
import TrendyProducts from "./components/TrendyProducts";
import DiscountSection from "./components/discountItem";
import TopCategories from "./components/TopCatogeries";



export default function Home() {


  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <LatestProducts />

      <ShopexOffer />
      <Unique />
      <TrendyProducts />
      <DiscountSection />
      <TopCategories/>
      <GetLatest />
      <Blog />

    </div>
  );
}
