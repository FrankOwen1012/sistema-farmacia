
/*import Fondo from "../Assets/Fondo4.jpg";
import Icono from "../Assets/Sistemas.jpg";*/


import React, { useState } from "react";
import { Menu } from "./Menu";


export const Login = () => {
  const [miLogin, setLogin] = useState(false);
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");

  function IniciarSesion(e) {
    e.preventDefault();

    let txtUsu = document.getElementById("RUC").value;
    let txtPas = document.getElementById("Password").value;
    if (txtUsu.length === 0 || txtPas.length === 0) {
      alert("Complete Los datos Faltantes");
    }
    else {
      if (usu === "admin" && pas === "123") {
        setLogin(true);
        document.getElementById("form_login").style.display = "none";
      }
      else {
        setLogin(false);
        alert("ERROR DE USUARIO Y/O Contraseña");
        document.getElementById("RUC").value = "";
        document.getElementById("Password").value = "";
        document.getElementById("RUC").focus();
      }
    }
  }


  return (

      <div className="container" style={{ background: "lightgray", marginTop: 20, padding: 20 }}>

        <form id="form_login">
          <div>
            <h1 style={{ color: "blue", textalign: "center" }}>LOGIN</h1>
            <label htmlFor="txtusu"><strong>Username</strong></label>
            <input type="text" id="RUC" style={{ textAlign: "center" }} className="form-control" onChange={(e) => setUsu(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="txtpas"><strong>Password</strong></label>
            <input type="password" id="Password" style={{ textAlign: "center" }} className="form-control" onChange={(e) => setPas(e.target.value)} required />
          </div><br />
          <input type="submit" onClick={IniciarSesion} className="btn btn-primary" value="Login" />
        </form>

        {miLogin === true && <Menu usu={usu}/>} 

      </div>


  )

}



