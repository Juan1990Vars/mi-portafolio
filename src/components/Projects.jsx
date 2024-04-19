import { useState } from 'react'
import './styles/projects.css'

const Projects = () => {
  const [currentSliders, setCurrentSliders] = useState(0)

  const sliders = [
    {
      title: 'Rick AND Morty',
      image: '/images/RickAndMorty.png',
      description: 'App Rick And Morty es extraido de una API, introduce un número del 1 al 126 y apareceran tarjetas de cada personaje de la serie animada.',
      tecnology: 'HTML, CSS, JS, React, API',
      site: 'https://app-rickandmorty-vars.netlify.app/',
      github: 'https://github.com/Juan1990Vars/rick-and-morty'
    },
    {
      title: 'App Weather',
      image: '/images/weather.png',
      description: 'Esta pagina web es extraida de un API y da información referente al clima en tiempo real de acuerdo a la ubicación en la que se encuentra el usuario.',
      tecnology: 'HTML, CSS, JS, React, API',
      site: 'https://weather-app-vargas.netlify.app/',
      github: 'https://github.com/Juan1990Vars/weather-app'
    },
    {
      title: 'Galleta de la fortuna',
      image: '/images/cookie.png',
      description: 'App Fortune Cookie es extraida de una API y su función es al abrir la pagina de la galleta de la fortuna el usuario descubrira que mensaje o frase del dia le espera. ',
      tecnology: 'HTML, CSS, JS, React, API',
      site: 'https://fortune-cookie-huvars.netlify.app/',
      github: 'https://github.com/Juan1990Vars/my-fortune-cookie'
    }
  ]

  const former = () => {
    setCurrentSliders((currentSliders - 1 + sliders.length)%sliders.length)
  }
  const next = () => {
    setCurrentSliders((currentSliders + 1)%sliders.length)
  }

  return (
    <div id='folder' className='projects'>
      <h2 className='projects__title'>Proyectos</h2>
      <hr />
      <div className='slider'>
        <div className='slider__div'>
          <div className='slider__button'>
            <div className='slider__i'>
              <i onClick={former} id='left' class="bx bxs-skip-previous-circle"></i>
            </div>
            <div className='slider__i'>
              <i onClick={next} id='right' class="bx bxs-skip-next-circle"></i>
            </div>
          </div>
      {
        sliders.map((slider, index) => (
          <section key={index} id='sliderId' className={`${ index === currentSliders ? 'slider__box--carousel' : 'hidden'}`}>
            <div className='container__projects'>
              <h3>{slider.title}</h3>
              <div>
                <a href={slider.site} target='_blank'><img src={slider.image} alt="#" /></a>
                <br />
                <div>
                  <p>{slider.description}</p>
                  <br />
                  <p className='p__tecnology'><span>Tecnologías:</span> {slider.tecnology} </p>
                </div>
                <div className='slider__button'>
                <p className='slider__i'><a href={slider.site} target='_blank'><i class="bx bx-link"></i></a></p>
                <p className='slider__i'><a href={slider.github} target='_blank'><i class="bx bxl-github"></i></a></p>
                </div>
              </div>
            </div>
          </section>
        ))
      }
        </div>
      </div>
    </div>
  )
}

export default Projects