import { useState } from 'react';
import { AiFillFilter, AiFillHome } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

let BottomNav = () => {

    let navigate = useNavigate();

    let [buttons, setButtons] = useState([
        //component, name , display name , active , loc
        [<AiFillHome />, "Home", '', 'active', '/'],
        [<AiFillFilter />, "Feed", 'none', '', 'feed'],
        [<IoAddCircleOutline />, "AddPost", 'none', '', 'newpost'],
    ]);

    let updateButtons = (n) => {

        let btns = [...buttons];

        for (let i = 0; i < btns.length; i++) {

            if (n == i) {
                btns[i][2] = '';
                btns[i][3] = 'active';
            } else {
                btns[i][2] = 'none';
                btns[i][3] = '';
            }

        }

        setButtons(btns);
        navigate(buttons[n][4]);

    }

    let genNavs = () => {
        let out = [];
        for (let i = 0; i < buttons.length; i++) {
            out.push(
                <div className={`btn-sed footer-btn  ${buttons[i][3]}`} onClick={() => { updateButtons(i) }}>
                    <div className="button-icon">
                        {buttons[i][0]}
                    </div>
                    <div className={`button-label ${buttons[i][2]}`}>
                        {buttons[i][1]}
                    </div>
                </div >
            )
        }
        return out;
    }

    return <div className="bottom-nav">
        {genNavs()}
    </div>

}

export default BottomNav;