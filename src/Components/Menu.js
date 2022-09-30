import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Registrar } from "./Registrar";
import { Listar } from "./Listar";
import {  Estadisticas } from "./Estadisticas";


export const Menu = (props) => {
    const [reg, setReg] = useState("");
    const [lis, setLis] = useState("");
    const [est, setEsts] = useState("");

    function CerrarSesion() {
        document.getElementById("caja-menu").style.display = "none";
        document.getElementById("form_login").style.display = "block";
        document.getElementById("RUC").value = "";
        document.getElementById("Password").value = "";
        document.getElementById("RUC").focus();
    }
    function opRegistrar() {
        setReg("1");
        setLis("0");
        setEsts("0");
    }
    function opListar() {
        setReg("0");
        setLis("1");
        setEsts("0");
    }
    function opEstadisticas() {
        setReg("0");
        setLis("0");
        setEsts("1");
    }


    return (
        <>

            <div id="caja_menu" style={{ textAlign: "left" }}>

                <strong className="h3">
                    Bienvenido Usuario :{props.usu}
                </strong>

                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ marginTop: 20 }}>
                    <div className="container-fluid">

                        <label className="navbar-brand  h5" href=" ">Menú Principal</label>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink to="" className="nav-link  h5  text-center" onClick={opRegistrar} >Registrar</NavLink>
                                <NavLink to="" className="nav-link  h5  text-center" onClick={opListar} >Listar</NavLink>
                                <NavLink to="" className="nav-link  h5  text-center"onClick={opEstadisticas}  >Estadistica</NavLink>
                                <a className="nav-link  h5  text-center" style={{ color: "blue" }} href=" " onClick={CerrarSesion} >Cerrar Sesión</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {reg === "1" && <Registrar />}
            {lis === "1" && <Listar />}
            {est === "1" && <Estadisticas />}
        </>

    )
}
