import "./StyleSignIn.css";
import backgroundImage from "./Images/acropolis.jpg";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../Services/users";
import Swal from "sweetalert2";
import { LoginContext } from "../context/signInContext";

const SignIn = () => {
  const [fromData, setFromData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  const { setIsLogged } = useContext(LoginContext);
  // const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...fromData,
    };

    // setLoading(true);

    signIn(data)
      .then((response) => {
        // setLoading(false);
        localStorage.setItem("userData", JSON.stringify(response));

        Swal.fire({
          icon: "success",
          title: "Bienvenido",
          text: "Te has logueado correctamente",
          confirmButtonText: "Continuar",
          allowOutsideClick: false,
          showCancelButton: false,
        }).then(() => {
          // setIsLogged(true);
          navigate("Principal");
        });
      })
      .catch((err) => {
        onError(err);
        // setLoading(false);
      });
  };

  const onError = (error) => {
    Swal.fire({
      icon: "error",
      title: "Algo salió mal",
      text: "Ocurrió un error al crear el usuario, intenta de nuevo",
      confirmButtonText: "Continuar",
      allowOutsideClick: false,
      showCancelButton: false,
    });
  };

  return (
    <div
      className="contenedorPrincipal"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="formContainer">
        <div className="form-group">
          <h2>Iniciar sesión</h2>
          <label>Correo: </label>
          <input
            type="email"
            className="form-control"
            name="username"
            placeholder="lorena@gmail.com"
            onChange={handleChange}
          />
          <br />
          <label>Contraseña: </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="********"
            onChange={handleChange}
          />
          <br />
          <button onSubmit={handleSubmit} type="submit">
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
