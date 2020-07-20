import React from "react";
import logo from "../../assets/logo.svg";
import "./styles.css";
import { FiLogIn } from "react-icons/fi";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img alt="Ecoleta" src={logo}></img>
        </header>
        <main>
          <h1>Seu marketplace de coleta de resíduos</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
          </p>

          <Link to="/create-point">
            <span>
              <FiLogIn></FiLogIn>
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
      <a style={{}} target="_blank" href="https://expo.io/artifacts/b8b584a6-3475-4f1e-9dd8-fadb70107fd7">
        <button id="button-android">
          <AiFillAndroid color="#fff" size={35}></AiFillAndroid>
        </button>
      </a>
    </div>
  );
};

export default Home;
