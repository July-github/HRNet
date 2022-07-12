import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Header(){

    return(
        <header className="App-header">
            <Link to='/'>
                <img src={logo} alt='logo Wealth Healthy' />
                <p className='App-name'>HRnet</p>
            </Link>
        </header>
    )
}

export default Header