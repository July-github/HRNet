import { Link } from 'react-router-dom';

function Error(){

    return(
        <div className='error_page'>
            <div className='App-name-home'>HRnet</div>
            <div className='error_div'>
                <div className='error_message'>
                    The page you're looking for doesn't exist.
                    <br/>
                    <Link to='/'>
                        Go back to welcome page
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Error