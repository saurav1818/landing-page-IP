import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Footer from "./components/Footer";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
