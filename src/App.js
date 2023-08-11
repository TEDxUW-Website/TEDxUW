import "./styles.css";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import {
  Container,
  Grid,
  GridColumn,
  Image,
  ImageGroup,
  Item,
} from "semantic-ui-react";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Partners from "./pages/Partners/Partners";
import Speakers from "./pages/Speakers/Speakers";
import Faq from "./pages/Faq/Faq";
import Story from "./pages/Story/Story";

export default function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Partners" element={<Partners />} />
          <Route path="/Speakers" element={<Speakers />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/OurStory" element={<Story />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}
