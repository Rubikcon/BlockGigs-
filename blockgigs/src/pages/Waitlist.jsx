
import About from "../components/About";
import Be from "../components/Be";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Who from "../components/Who";

const Home = () => {
  return (
    <main className="w-screen bg-[#ECF3FF]">
      <Hero/>
      <Welcome/>
      <Be/>
      <About/>
      <Who/>
      
          
    </main>
  );
};

export default Home;
