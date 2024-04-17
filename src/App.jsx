import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Events from "./Components/Events/Events";
import Host from "./Components/Host/Host";
import Scanner from "./Components/Scanner/Scanner";

function App() {
  return (
    <>
      <Outlet></Outlet>
      <Navbar></Navbar>
      <Banner></Banner>
      <Events></Events>
      <Host></Host>
      <Scanner></Scanner>
      <Footer></Footer>
    </>
  );
}

export default App;
