import { useEffect } from "react";
import { useState } from "react";

let SortBar = (props) => {

    let [classes, setClasses] = useState([]);
    let buttons = 2;
    let setSort = props.sort;

    let updateButton = (x) => {

        let temp = []
        for (let i = 0; i < buttons; i++) {

            if (i == x) {
                temp.push('btn selected');
            } else {
                temp.push('btn');
            }

        }

        setClasses(temp);

    }

    useEffect(() => {
        updateButton(0);
    }, [])

    return <div className="sort-bar">
        <div className={classes[0]} onClick={() => { updateButton(0); setSort('New') }}>
            New
        </div>

        <div className={classes[1]} onClick={() => { updateButton(1); setSort('Top') }} >
            Top
        </div>

    </div>
}

export default SortBar;