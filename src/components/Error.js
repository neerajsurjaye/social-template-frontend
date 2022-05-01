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

        {/* <div className="btn"> */}
        <Link to='/' className='alert-link btn'>Home</Link>
        {/* </div> */}
    </div>
}

export default Error;