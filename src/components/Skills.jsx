import React from 'react'
import './styles/skill.css'

export const Skills = () => {
  return (
    <section id='hand' className='skill'>
        <article className='skill__container'>
            <div className='skill__div'>
                <br />
                <h2 className='skill__title'>Mis habilidades</h2>
            </div>
            <hr />
            <br />
            <div className='skill__carrousel'>
            <ul className='skill__ul'>
                <li className='skill__li - html'> <img className='skill__img' src="./images/html.png" alt="" /> Html</li>
                <li className='skill__li - css'> <img className='skill__img' src="./images/css.png" alt="" /> Css</li>
                <li className='skill__li . js'> <img className='skill__img' src="./images/javascript.svg" alt="" />JavaScript</li>
                <li className='skill__li - react'> <img className='skill__img' src="./images/React.png" alt="" />React</li>
                <li className='skill__li - node'> <img className='skill__img' src="./images/node-js.svg" alt="" />Node Js</li>
                <li className='skill__li - postgres'> <img className='skill__img' src="./images/postgresql.png" alt="" />Postgres</li>
                <li className='skill__li - mysql'> <img className='skill__img' src="./images/mysql.png" alt="" />MySQL</li>
                <li className='skill__li - github'> <img className='skill__img' src="./images/github.png" alt="" />GitHub</li>
                <li className='skill__li - powerbi'> <img className='skill__img' src="./images/powerBI.png" alt="" />Power BI</li>
            </ul>
            </div>
        </article>
    </section>
  )
}

export default Skills
