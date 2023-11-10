import "./globals.css";

import Navbar from "./components/navbar";
import Hero from "./hero";
import Footer from "./footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
