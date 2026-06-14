import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Reviews from "@/components/Reviews";
import Shop from "@/components/Shop";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <Shop />
      <Reviews />
      <Footer />
    </main>
  );
};

export default Index;