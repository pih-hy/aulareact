import{BrowserRouter,Routes,Route}from "react-router-dom";
import  Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import MinasGerais from "./Paginas/MinasGerais";
import RiodeJaneiro from "./Paginas/RiodeJaneiro";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import EspiritoSanto from "./Paginas/EspiritoSanto";

export default function App()
{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sp" element={<SaoPaulo/>}/>
            <Route path="/mg" element={<MinasGerais/>}/>
            <Route path="/es" element={<EspiritoSanto/>}/>
            <Route path="/rj" element={<RiodeJaneiro/>}/>
            <Route path="/es" element={</>}/>
            <Route path="/es" element={<EspiritoSanto/>}/>
        </Routes>
        </BrowserRouter>
    );
}