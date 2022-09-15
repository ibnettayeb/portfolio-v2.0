import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
function App() {
  return (
    <div className="max-w-[975px] px-7 mx-auto">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
