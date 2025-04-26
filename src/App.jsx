import { Helmet } from "react-helmet";

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
    <Footer />
  
    <Helmet>
      <meta charSet="utf-8" />
      <title>Allah Hafez</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  </>
  );
}

export default App;
