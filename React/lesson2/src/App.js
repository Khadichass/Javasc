import Header from "./layouts/Header";
import "./assets/styles/header.css";
import Mainsection from "./layouts/Mainsection";
import "./assets/styles/main.css";
import Footer from "./layouts/Footer";
import "./assets/styles/footer.css";
function App() {
  return (
    <div>
      <Header></Header>
      <Mainsection></Mainsection>
      <Footer></Footer>
    </div>
  );
}

export default App;
