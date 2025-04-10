import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Section_Auction from "./components/Section_Auction/Section_Auction";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Section_Auction />
      <ToastContainer />
      
    </>
  );
}

export default App;
