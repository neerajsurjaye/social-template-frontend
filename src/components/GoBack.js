import { useHistory, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

let GoBack = () => {

    let navigate = useNavigate();

    return <div className="go-back btn" onClick={() => { navigate(-1) }}>
        {/* +---- */}
        <FaArrowLeft></FaArrowLeft>
    </div>
}

export default GoBack;