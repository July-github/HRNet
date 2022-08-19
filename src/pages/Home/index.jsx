import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { datas } from '../../data'

function Home(){
    localStorage.setItem('Array of employees', JSON.stringify(datas))

    return(
        <>
            <div className='home_div'>
                <div className='home_left'>
                    <Link to='/employees'>
                        View employees list
                    </Link>
                </div>
                <div className='home_logo'>
                    <img src={logo} alt='logo Wealth Healthy' />
                </div>
                <div className='home_right'>
                    <Link to='/Employee_creation'>
                        Create employee
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home