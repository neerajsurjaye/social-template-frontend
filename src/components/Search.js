import { useState } from "react";

let Search = (props) => {

    let [search, setSearch] = props.search;
    let [currSearch, setCurrSearch] = useState("");
    let setSort = props.setSort;

    let updateSort = (e) => {
        setSort(e.target.value);
    }

    return <div className="div">
        <form>
            <input type="text" onChange={(e) => { setCurrSearch(e.target.value) }} value={currSearch} />
            <input type='button' value='search' onClick={() => { setSearch(currSearch) }}></input>
            <select name='cars' onChange={updateSort}>
                <option>New</option>
                <option>Top</option>
            </select>
        </form>
    </div>

}

export default Search;