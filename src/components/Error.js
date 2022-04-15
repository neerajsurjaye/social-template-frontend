import { GrStatusCritical } from 'react-icons/gr'
import { MdError } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Error = (props) => {
    return <div className="err alert">
        <div className="alert-main">
            Error
        </div>
        <div className="alert-message">
            <MdError className='alert-icon' />
            {props.message}
        </div>

        <Link to='/' className='alert-link'>Home</Link>

    </div>
}

export default Error;