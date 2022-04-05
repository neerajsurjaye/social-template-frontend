import { AiOutlineInfoCircle } from 'react-icons/ai';


const Success = (props) => {
    return <div className="success alert">
        <div className="alert-main">
            Success
        </div>
        <div className="alert-message">
            <AiOutlineInfoCircle className='alert-icon' />
            {props.message}
        </div>

    </div>
}

export default Success;