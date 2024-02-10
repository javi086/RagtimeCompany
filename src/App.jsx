import React from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Introduction from "./pages/Introduction";
import AboutUs from "./pages/AboutUs";
import Founders from "./pages/Founders";
import Dancers from "./pages/Dancers";
import OpenClasses from "./pages/OpenClasses";
import TrainingCompany from "./pages/TrainingCompany";
import Contact from "./pages/Contact";
import EventsPlanner from "./pages/EventsPlanner";
import RegistrationForm from "./pages/RegistrationForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Promotions from "./components/Promotions";
import Structure from "./pages/Structure";
import { Container } from "react-bootstrap";

/**Lo que este en App se va a reflejar en el navegador*/
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    
    <Container fluid as="main"  className="custom-main">
      <Routes>
        <Route path="/" element={<Introduction></Introduction>}></Route>
       
        {/* Menu "Conocenos" option */}
        <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/founders" element={<Founders></Founders>}></Route>
        <Route path="/dancers" element={<Dancers></Dancers>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
       
       {/* Menu "Actividades" option */}
        <Route path="/openClasses" element={<OpenClasses></OpenClasses>}></Route>
        <Route path="/trainingCompany" element={<TrainingCompany></TrainingCompany>}></Route>

       {/* Menu "Eventos" option */}
       <Route path="/events" element={<EventsPlanner></EventsPlanner>}></Route>

        <Route path="/registration" element={<RegistrationForm></RegistrationForm>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/structure" element={<Structure></Structure>}></Route>
      </Routes>
    </Container>
  
    

      <Promotions></Promotions> 
      <Footer></Footer>
      
    </BrowserRouter>
  );
}

export default App;
