import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CardStar from "./components/CardStar/CardStar";
import Footer from "./components/Footer/Footer";
import SliderCursos from "./components/SliderCursos/SliderCursos";
import TextBoxLanding from "./components/TextBoxLanding/TextBoxLanding";
import TextBoxLandingContent from "./components/TextBoxLandingContent/TextBoxLandingContent";
import Triangulo from "./components/Triangulo/Triangulo";
import TrianguloContent from "./components/TrianguloContent/TrianguloContent";
import LandingSunSound from "./pages/LandingSunSound";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingSunSound />} />
      <Route path="/card" element={<CardStar text="Educacion"></CardStar>}></Route>
      <Route path="/footer" element={<Footer></Footer>}></Route>
      <Route path="/triangulo" element={<Triangulo rotation="0"  animationSpeed="25" size="200"/>}></Route>
      <Route path="/trianguloContent" element={<TrianguloContent size="500"/>}></Route>
      <Route path="/sliderCursos" element={<SliderCursos></SliderCursos>}></Route>
      <Route path="/textboxlanding" element={<TextBoxLanding applyStyle={false} imagen={'rectangle-5@2x.gif'} colorWords={['experiencia', 'siempre', 'musical']} h2Text={"Tu experiencia musical, para siempre"} h3Text={"Con SunSound, tu conexión con la música se vuelve tangible. Descubre, comparte y próximamente, intercambia tus pistas favoritas para que tus amigos las disfruten."}/>}></Route>
      <Route path="/textboxcontent" element={<TextBoxLandingContent></TextBoxLandingContent>}></Route>
    </Routes>
  );
}
export default App;
