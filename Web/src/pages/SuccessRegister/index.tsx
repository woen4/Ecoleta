import React from "react";
import logo from "../../assets/logo.svg";
import "./styles.css";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const SuccessRegister = () => {
  return (
    <div id="page-success">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div id="content">
          <span id="icon">
            <FiCheckCircle color="#008000" size={40}></FiCheckCircle>
          </span>
          <h1 id="title">Cadastro concluído</h1>
        </div>
      </Link>
    </div>
  );
};

export default SuccessRegister;
