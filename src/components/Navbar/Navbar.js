import { useState } from 'react'
import { MenuItems } from './MenuItems'
import "./navbar.css"
import ReactIcon from "../../images/physics.png"
import CloseIcon from "../../images/close.png"
import BurgerIcon from "../../images/menu.png"
import Button from '../Button/Button'

const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(prev => !prev)
    }
    return (
        <nav>
            <div className='nav-logo'>
                <h1>React</h1>
                <img className='react-icon' src={ReactIcon} alt="react icon"/>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                {
                    clicked ? (
                        <img className='close' src={CloseIcon} alt="close icon" />
                    ) : (
                        <img src={BurgerIcon} alt="menu icon" />
                    )
                }
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {
                    MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <Button>Sign up</Button>
        </nav>
    )
}

export default Navbar