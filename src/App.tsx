import { FAQs } from "@/components/FAQs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";

function App() {
  return (
    <>
      <Header />
      {/* <Hero /> */}
      <Intro />
      <Projects />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
