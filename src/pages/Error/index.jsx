import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Error(){

    return(
            <>
            <div className='App-name-home'>HRnet</div>
            <div className='error_div'>
                <div className='home_left'>
                    The page you're looking for doesn't exist.
                </div>
                <div className='error_logo'>
                    <img src={logo} alt='logo Wealth Healthy' />
                </div>
                <div className='home_right'>
                    <Link to='/'>
                        Go back to welcome page
                    </Link>
                </div>
            </div>
        </>

    )
}

export default Error