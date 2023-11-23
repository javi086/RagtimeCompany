import React from "react";
import { Link } from "react-router-dom";

function MainMenu(){
    return (
          <div className="col-lg-4 col-md-12">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div className="collapse navbar-collapse " id="navbarNavDropdown">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item dropdown">
                              <Link className="nav-link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Conocenos</Link> 
                              <ul className="dropdown-menu">
                                  <li><Link className="dropdown-item" to="conocenos.html#meetUs_section">Acerca de
                                          nosotros</Link> </li>
                                  <li><Link className="dropdown-item" to="conocenos.html#founders_section">Fundadores</Link> 
                                  </li>
                                  <li><Link className="dropdown-item" to="conocenos.html#dancers_section">Bailarines</Link> 
                                  </li>
                              </ul>
                          </li>
                          <li className="nav-item dropdown">
                              <Link className="nav-link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Actividades</Link> 
                              <ul className="dropdown-menu">
                                  <li><Link className="dropdown-item" to="/clasesAbiertas">Clases abiertas.</Link> </li>
                                  <li><Link className="dropdown-item" to="/Training">Entrenamiento compañia.</Link> </li>
                                  <li><Link className="dropdown-item" to="/Eventos">Eventos especiales.</Link> </li>
                              </ul>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/contact" role="button">Contacto</Link> 
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/registration" role="button">Registrate</Link> 
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/login" role="button">Login</Link> 
                          </li>
                      </ul>
                  </div>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
              </nav>
          </div>
    )
}

export default MainMenu;