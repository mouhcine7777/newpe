import Contactpage from "./components/Contact-page";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  return (
    <main>
      <Header />
      <Contactpage />
      <Footer />
      <ChatWidget />
    </main>
  );
}