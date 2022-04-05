import { GrStatusCritical } from 'react-icons/gr'
import { MdError } from 'react-icons/md';

const Error = (props) => {
    return <div className="err alert">
        <div className="alert-main">
            Error
        </div>
        <div className="alert-message">
            <MdError className='alert-icon' />
            {props.message}
        </div>

    </div>
}

export default Error;