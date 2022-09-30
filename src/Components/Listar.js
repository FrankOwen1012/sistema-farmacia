import React, { useState, useEffect } from 'react';



export const Listar = () => {

  const obtenerRegistros = () => {//obetenemos los datos registrados en localestorage
    let datos = localStorage.getItem("registroslogin");
    if (datos) {
      return JSON.parse(datos);
    }
    else {
      return [];
    }
  }

  const [registroslogin, setRegistrologin] = useState(obtenerRegistros());


  const botonEliminar = (miIndex) => {
    if (window.confirm("Esta seguro de Eliminar ")) {
      let registrosFiltrados = registroslogin.filter((e, index) => {
        return miIndex !== index;

      });
      setRegistrologin(registrosFiltrados);
    }
  }

  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin));
  }, [registroslogin]);


  return (

    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>

      <div className="h3">
        Listado De Registro De Pinturas
      </div>

      <div className="table-responsive">

{registroslogin.length>0?  

        <>
          <table className="table table-bordered table-hover" style={{ marginTop: 12 }}>
            <thead className="text-center" style={{ background: "lightgray" }}>
              <tr>
                <th>#</th>
                <th>Titulo</th>
                <th>Estilo</th>
                <th>Tecnica</th>
                <th>Precio</th>
                <th>X</th>
              </tr>
            </thead>
            <tbody className="text-center align-baseline">
              {
                registroslogin.map((X, index) => (
                  <tr key={index} >
                    <th>{index + 1}</th>
                    <td >{X.titulo}</td>
                    <td >{X.estilo}</td>
                    <td >{X.tecnica}</td>
                    <td >{X.precio}</td>
                    <td className='text-center'>
                      <button className='btn btn-outline-danger' onClick={() => { botonEliminar(index) }}>
                        <i class="bi bi-trash3-fill"></i>
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </>
  : <p className='h5' style={{color:"red"}}> "NO HAY REGISTRO PARA LISTAR"</p>}


      </div>

    </div>

  )

}
