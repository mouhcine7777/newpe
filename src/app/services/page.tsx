import Services from "./components/Servicespage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  return (
    <main>
      <Header />
      <Services />
      <Footer />
      <ChatWidget />
    </main>
  );
}