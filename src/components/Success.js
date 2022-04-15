import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Success = (props) => {
    return <div className="success alert">
        <div className="alert-main">
            Success
        </div>
        <div className="alert-message">
            <AiOutlineInfoCircle className='alert-icon' />
            {props.message}
        </div>

        <Link to='/' className='alert-link'>Home</Link>


    </div>
}

export default Success;