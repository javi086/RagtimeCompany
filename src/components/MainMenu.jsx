import React from "react";

function MainMenu(){
    return (
          <div className="col-lg-4 col-md-12">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div className="collapse navbar-collapse " id="navbarNavDropdown">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item dropdown">
                              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                  aria-expanded="false">Conocenos</a>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="conocenos.html#meetUs_section">Acerca de
                                          nosotros</a></li>
                                  <li><a className="dropdown-item" href="conocenos.html#founders_section">Fundadores</a>
                                  </li>
                                  <li><a className="dropdown-item" href="conocenos.html#dancers_section">Bailarines</a>
                                  </li>
                              </ul>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                  aria-expanded="false">Actividades</a>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="#">Clases abiertas.</a></li>
                                  <li><a className="dropdown-item" href="#">Entrenamiento compañia.</a></li>
                                  <li><a className="dropdown-item" href="#">Eventos especiales.</a></li>
                              </ul>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="contact.html#contact" role="button">Contacto</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="registration.html" role="button">Registrate</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#" role="button">Login</a>
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