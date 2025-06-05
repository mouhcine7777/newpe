import Apropos from "./components/Apropos";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  return (
    <main>
      <Header />
      <Apropos />
      <Footer />
      <ChatWidget />
    </main>
  );
}