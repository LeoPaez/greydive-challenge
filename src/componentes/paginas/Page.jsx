import React from 'react'
// import db from "../../assets/db.json"
import "../../stylesheets/Page.css"
import ReactPlayer from 'react-player'

const Page = ({data}) => {
  const re = /^[0-9\b]+$/;
  const htmlText = data.transcripcion

  return (
    <div className='test-contenedor'>
      <h1 className='cliente'>{data.cliente}</h1>
      <h2 className='test'>Test: Test de usabilidad en el sitio web</h2>
      <p className='testeador'>Testeador 1</p>
      <ReactPlayer 
        controls={true} 
        url={data.linkVideo}
        width='100%'
        height='100%' 
      />
      <h3 className='transcripcion-titulo'>Transcripcion</h3>
      <div className='transcripcion' dangerouslySetInnerHTML={{ __html: htmlText }} />
      <h3 className='tareas-titulo'>Tareas</h3>
      <p className='escenario'>Escenario: {data.escenario}</p>

      {data.preguntas.map((pregunta, index) => (
      <div className='contenedor-tareas' key={index}>
        <p className='tarea'>Tarea {index + 1}</p>
        <p className='tarea-texto'>{pregunta.texto}</p>
        {pregunta.respuesta.match(re) ? <p className='respuesta'>Respuesta: {pregunta.respuesta}</p> : null }
        <p className='duracion'>Duración de la tarea: <span className='duracion-tiempo'>{pregunta.tiempo}</span></p>
      </div>
      ))}
    </div>
  )
}

export default Page