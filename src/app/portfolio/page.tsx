import Portfoliopage from "./components/Portfolio-page";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  return (
    <main>
      <Header />
      <Portfoliopage />
      <Footer />
      <ChatWidget />
    </main>
  );
}