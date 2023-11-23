import React from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import RegistrationForm from "./pages/RegistrationForm";
import Introduction from "./pages/Introduction";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Promotions from "./components/Promotions";

/**Lo que este en App se va a reflejar en el navegador*/
function App() {
  return (
    <BrowserRouter>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Introduction></Introduction>}></Route>
        <Route
          path="/registration"
          element={<RegistrationForm></RegistrationForm>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Promotions></Promotions>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
