import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Mainsection from "./components/Mainsection";
import useHooks from "./components/useHooks";

import "./assets/styles/main.css";
import "./assets/styles/footer.css";
import "./assets/styles/header.css";

function App() {
  return (
    <div>
      <Header />
      <Mainsection />
      <Footer />
    </div>
  );
}

export default App;
