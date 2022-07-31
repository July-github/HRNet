import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { CgMenu } from "react-icons/cg";
import { useState } from 'react';
import { RiArrowDropRightFill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Header(){
    const [openMenu, setOpenMenu] = useState(false)
// console.log('header')
    return(
        <header className="App-header">
            <Link to='/'>
                <img src={logo} alt='logo Wealth Healthy' />
                <p className='App-name'>HRnet</p>
            </Link>
            {openMenu ? 
                (<div className='menu_open'>
                    <div className='close_menu' onClick={() => setOpenMenu(false)}><AiOutlineCloseCircle /></div>
                    <div className='menu_links'>
                        <Link to='/employees' onClick={() => setOpenMenu(false)}><RiArrowDropRightFill className='menu_icon' />List of employees</Link>
                        <Link to='/employee_creation' onClick={() => setOpenMenu(false)}><RiArrowDropRightFill className='menu_icon' />Employee creation</Link>
                    </div>
                </div>) 
                : <CgMenu className='menu_closed' onClick={() => setOpenMenu(true)} />}
        </header>
    )
}

export default Header