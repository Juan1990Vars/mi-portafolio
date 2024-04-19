import React from 'react'
import './styles/home.css'

const Home = () => {
  return (
    <section id='home' className='home__container'>
        <div className='home__div'>
            <h1 className='home__hello'>Hola!! Mi nombre es: <span>Juan Huerta Vargas</span></h1>
            {/* <h2 className='home__name'>Juan Huerta Vargas</h2> */}
            <br />
            <p className='home__web'>Soy Desarrollador Web Full Stack</p>
        </div>
        <header className='nav__header'>
            <img className='header__img' src="./images/juanFoto.png" alt="" />
        </header>
        <br /> <br />
        <div className='btn'>
        <button className='div__btn'>
            <a className='btn__link' href="./images/CV varsJH.pdf" download={'CV_Juan Huerta Vargas'}>Descargar CV</a>
        </button>
        </div>
    </section>
  )
}

export default Home