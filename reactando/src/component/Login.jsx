import React from "react";
import "../assets/style/login.css";

// Importando assets
import group from "../assets/group0.svg";
import facebookLogo from "../assets/logos-facebook0.svg";
import googleIcon from "../assets/flat-color-icons-google0.svg";
import vector1 from "../assets/vector-10.svg";
import callIcon from "../assets/call0.png";
import envelopeIcon from "../assets/envelope0.png";
import passwordIcon from "../assets/password0.png";
import vector from "../assets/vector0.svg";

const Login = () => {
  return (
    <div className="i-phone-14-15-pro-7">
      {/* Twitter Icon */}
      <div className="skill-icons-twitter">
        <img className="group" src={group} alt="Twitter Icon" />
      </div>

      {/* Facebook Icon */}
      <img
        className="logos-facebook"
        src={facebookLogo}
        alt="Facebook Logo"
      />

      {/* Google Icon */}
      <img
        className="flat-color-icons-google"
        src={googleIcon}
        alt="Google Icon"
      />

      {/* Frame and Titles */}
      <div className="frame-1"></div>
      <div className="cria-o-de-conta">Criação de Conta</div>
      <div className="pag-express-moz">Pag Express Moz</div>
      <img className="vector-1" src={vector1} alt="Decoration" />

      {/* Form Fields */}
      <div className="rectangle-3"></div>
      <div className="rectangle-32"></div>
      <div className="rectangle-33"></div>
      <div className="rectangle-34"></div>
      <div className="digite-seu-email">Digite seu email</div>
      <div className="palavra-passe">Palavra-passe</div>
      <div className="o-seu-contacto">O seu contacto</div>
      <div className="cadastrar-agora">Cadastrar Agora</div>

      {/* Icons */}
      <img className="call" src={callIcon} alt="Phone Icon" />
      <img className="envelope" src={envelopeIcon} alt="Envelope Icon" />
      <img className="password" src={passwordIcon} alt="Password Icon" />

      {/* Login Link */}
      <div className="j-possui-conta-fa-a-login-aqui">
        <span>
          <span className="j-possui-conta-fa-a-login-aqui-span">
            Já possui conta?
          </span>
          <span className="j-possui-conta-fa-a-login-aqui-span2">
            Faça login aqui
          </span>
        </span>
      </div>

      {/* Vector Decoration */}
      <img className="vector" src={vector} alt="Vector Decoration" />
    </div>
  );
};

export default Login;
