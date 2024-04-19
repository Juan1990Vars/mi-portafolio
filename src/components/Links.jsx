import React from 'react'
import './styles/links.css'

const Links = () => {
  return (
    <div className='links'>
        <ul className='links__ul'>
            <li className='links__li'><a href="https://www.linkedin.com/in/juan-huerta-vars-80849428b/" target='_blank'> <i class='bx bxl-linkedin'></i></a></li>
            <li className='links__li'><a href="https://github.com/Juan1990Vars" target='_blank'> <i class='bx bxl-github'></i></a></li>
            <li className='links__li'><a href="https://api.whatsapp.com/send?phone=7711115423" target='_blank'> <i class='bx bxl-whatsapp'></i></a></li>
            <li className='links__li'><a href="mailto:johanvh422@gmail.com" target='_blank'> <i class='bx bxl-gmail'></i></a></li>
        </ul>
    </div>
  )
}

export default Links