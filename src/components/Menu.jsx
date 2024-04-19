import { useState } from 'react'
import './styles/menu.css'

const Menu = ( {type, handleToggle} ) => {

    const [isOpen, setIsOpen] = useState(false)
    const handleNav = () => {
      setIsOpen(!isOpen)
    }
  return (
    <nav className='nav'>
        <p className='menu' >
          <i className={` ${type ?'bx bx-toggle-left':'bx bxs-toggle-right'} `}onClick={handleToggle}>
          </i>{type ?<i className="bx bx-sun"></i>:<i className="bx bxs-moon"></i>}</p>
        <ul className={`nav__ul`}>
            <li className='nav__li'><i className='bx bxs-home'></i><a href="#home">Home</a></li>
            <li className='nav__li'><i className='bx bxs-meh-blank'></i><a href="#person">Acerca De Mi</a></li>
            <li className='nav__li'><i className='bx bxs-user-check'></i><a href="#hand">Mis Habilidades</a></li>
            <li className='nav__li'><i className='bx bxs-file-archive'></i><a href="#folder">Mis Proyectos</a></li>
            <li className='nav__li'><i className='bx bxs-id-card'></i><a href="#card">Contacto</a></li>
        </ul>

        {/* Submenu responsive */}
        <div className='nav__responsive'>
            <i className={` ${isOpen ?'bx bxs-message-square-x':'bx bx-menu'} `} onClick={handleNav}></i>
            <ul className={`nav__responsive-ul ${isOpen && 'nav_bar'} `}>
                    <li className='nav__responsive-li'><i className='bx bxs-home'></i><a href="#home">Home</a></li>
                    <li className='nav__responsive-li'><i className='bx bxs-meh-blank'></i><a href="#person">Acerca De Mi</a></li>
                    <li className='nav__responsive-li'><i className='bx bxs-user-check'></i><a href="#hand">Mis Habilidades</a></li>
                    <li className='nav__responsive-li'><i className='bx bxs-file-archive'></i><a href="#folder">Proyectos</a></li>
                    <li className='nav__responsive-li'><i className='bx bxs-id-card'></i><a href="#card">Contacto</a></li>
                
        </ul>
        </div>
    </nav>
  )
}

export default Menu