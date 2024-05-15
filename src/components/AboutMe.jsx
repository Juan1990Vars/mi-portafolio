import React from 'react'
import './styles/aboutMe.css'

const AboutMe = () => {
  return (
    <section id='person' className='container'>
          <div className='container__aboutme'>
            <br />
            <h2 className='container__title'>Acerca de mi </h2>
         </div>
         <hr />
         <article className='container__description'>
            <div className='container__div'>
                <h3 className='container__h3'>Desarrollador Web Full Stack</h3>
                <p className='container__p'>
                    Saludos!! Soy Juan HV. Desarrollador Web Full Stack,
                    radico en México - Estado de México. Soy una persona
                    altamente proactiva y apasionada por las tecnologías.
                    Estoy muy emocionado de aplicar mis conocimientos y
                    posisionarme como desarrollador Back-end, front-end, Analista de Datos, con la finalidad de contribuir al exito de la empresa.
                </p>
                <br />
                <p className='container__p'>
                    Actualmente me encuentro estudiando en  la Universidad Autonoma
                    del Estado de México cursando el 8° semestre de la carrera en
                    Informática Administrativa.
                    Siempre busco mantenerme al dia y aprender nuevas herramientas
                    tecnologicas de acuerdo a las exigencias del mercado.💻
                </p>
            </div>
            <br />
            <div className='container__staff'>
                <h3 className='container__h3'>¿Que me hace unico? 🍀👨‍💻</h3>
                <ul className='container__ul'>
                    <li className='container__li'>Proactivo</li>
                    <li className='container__li'>Pasion</li>
                    <li className='container__li'>Compromiso</li>
                    <li className='container__li'>Liderazgo</li>
                    <li className='container__li'>Trabajo en Equipo</li>
                    <li className='container__li'>Adaptabilidad</li>
                    <li className='container__li'>Ética profesional</li>
                </ul>
            </div>
        </article>
    </section>
  )
}

export default AboutMe