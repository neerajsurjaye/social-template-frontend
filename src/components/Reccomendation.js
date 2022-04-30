import { useState } from "react";
import PostListV2 from "./PostListV2";
import Search from "./Search";
import PageCounter from './PageCounter';
import { useEffect } from "react";
import get from '../services/get';
import Nav from "./Nav";
import SortBar from "./SortBar";
import CurrPage from "./CurrPage";
import { useContext } from "react";
import userContext from "../context/userContext";
import Error from "./Error";


const Reccomendation = () => {

    let [currPost, setCurrPost] = useState();
    let [search, setSearch] = useState("");
    let [sort, setSort] = useState("new");
    let [page, setPage] = useState(0);
    let [pageCount, setPageCount] = useState(0);

    let [user, setUser] = useContext(userContext);

    let updatePosts = async () => {
        let token = localStorage.getItem('Auth');
        let res = await get.reccomended(sort, page, token);
        if (res.success) {
            setCurrPost(res.success.posts);
            console.log(res.success.posts);
            // setPageCount(res.success.count);
        }
    }

    useEffect(() => {


        setCurrPost(null);
        updatePosts();
    }, [search, sort, page])

    // return <div className="feed">
    //     Feed
    //     <Search search={[search, setSearch]} setSort={setSort}></Search>
    //     <PostListV2 currPost={currPost}></PostListV2>
    //     <PageCounter total={pageCount} page={[page, setPage]} ></PageCounter>
    // </div>

    return <div className='home'>

        <Nav ></Nav>

        {/* <PostList></PostList> */}
        <div className="home-post">
            <CurrPage name='Reccomendations - Based on your activity'></CurrPage>

            {user ?

                <>
                    <PostListV2 currPost={currPost}></PostListV2>
                    <PageCounter total={pageCount} page={[page, setPage]} ></PageCounter>
                </>
                :
                <Error message="Not logged in"></Error>
            }


        </div>

        <div className="nav">

        </div>

    </div>
}

export default Reccomendation;