import "./Arte.css";
import React from "react";
import arteTitle from "../style/titulos/arte.png"
import { Link } from "react-router-dom";
import botonLeccion from "./Images/btnArte.png"
import botonModel3D from "./Images/btnArte3D.png"

const Arte = () => {
  return (
    <div class="contenedor-inicial">
      <nav className="navbarPrincipal">
        <ul className="navbarList2Principal">
          <li className="navbarItemPrincipal">
            <a className="navbarLink2Principal">
              Usuario
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href="/Home" className="navbarLink2Principal">
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navbar2Principal">
        <ul className="navbarListPrincipal">
          <li className="navbarItemPrincipal">
            <a className="navbarLinkPrincipal">
              Lecciones
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href="/Temas" className="navbarLink3Temas">
              Temas
            </a>
          </li>
        </ul>
      </nav>
      <div class="temaArte"><img src={arteTitle} alt="Imagen" /></div>
      <div class="introduccionArte">El arte griego abarca una amplia gama de disciplinas, desde la escultura y la arquitectura hasta la pintura y la cerámica. A lo largo de los siglos, los artistas griegos experimentaron y perfeccionaron diversas técnicas y estilos artísticos, dejando un legado duradero</div>
      <div class="button-container-arte">
        <Link to="/Temas/Arte/Lecciones" class="btn ">
          <img src={botonLeccion} alt="Imagen" class="button-image" />
        </Link>
        <Link to="/Temas/Arte/Model" class="btn ">
          <img src={botonModel3D} alt="Imagen" class="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Arte;