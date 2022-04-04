import { useState } from "react";

let Search = (props) => {

    let [search, setSearch] = props.search;
    let [currSearch, setCurrSearch] = useState("");
    // let setSort = props.setSort;

    // let updateSort = (e) => {
    //     setSort(e.target.value);
    // }

    return <div className={`div ${props.className}`}>
        <form className="home-nav-search">
            <input type="text" className="fit-content" onChange={(e) => { setCurrSearch(e.target.value) }} value={currSearch} />
            <button value='Submit' className="btn primary" onClick={(e) => { e.preventDefault(); setSearch(currSearch) }}>Search</button>
        </form>
    </div>

}

export default Search;