import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/MyStyle.css'
import fotoPerfil from '../imagenes/imagenPerfil.jpg'

function Biografia() {
  return (
    <>
    <div className='contenedorBiografia'>
      <img className='imagen' src= {fotoPerfil} alt=""/>
        <p className='titulo'>¿Quien soy? </p>
    <p className='container'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam voluptatum modi expedita! Ex, dolor beatae reiciendis quaerat nulla voluptas. Quisquam quae perferendis at incidunt totam hic veritatis provident cupiditate aut
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam voluptatum modi expedita! Ex, dolor beatae reiciendis quaerat nulla voluptas. Quisquam quae perferendis at incidunt totam hic veritatis provident cupiditate aut
    </p>
    
    </div>
    </>
  )
}

export default Biografia