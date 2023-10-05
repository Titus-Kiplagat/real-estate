import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Features from './components/Features';
import OnSale from "./components/OnSale";
import Service from "./components/Service";
import View from "./components/View";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Features />
      <OnSale />
      <Service />
      <View />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}

export default App
