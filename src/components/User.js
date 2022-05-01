import { useParams } from "react-router-dom";
import PostList from "./PostList";
import UserCard from "./UserCard";
import PostListV2 from './PostListV2';
import { useEffect } from "react";
import { useState } from "react";
import get from '../services/get';
import PageCounter from "./PageCounter";
import SortBar from "./SortBar";
import Nav from "./Nav";
import CurrPage from "./CurrPage";

let User = () => {

    let { id } = useParams();

    let [currPost, setCurrPost] = useState();
    let [pageCount, setPageCount] = useState(0);
    let [page, setPage] = useState(0);
    let [search, setSearch] = useState("");
    let [sort, setSort] = useState("new");
    let [follows, setFollows] = useState(false);
    let [reload, setReload] = useState(0);

    let getPost = async () => {

        let res = await get.post(page, search, sort, id);

        console.log(res.success);

        if (res.success) {
            setCurrPost(res.success.posts);
            setPageCount(res.success.count);
        } else {

        }

    }

    let checkFollows = async () => {
        let res = await get.follows(id, localStorage.getItem('Auth'));
        setFollows(res.success);
        console.log(res.success);
    }

    useEffect(() => {
        setCurrPost(null);
        getPost();
        checkFollows();
    }, [page, search, sort]);



    return <div className="user post-page">

        <Nav search={[search, setSearch]} ></Nav>


        <div className="home-post post-main">
            {/* <CurrPage name={`user - ${id}`}></CurrPage> */}
            <UserCard id={id} follows={[follows, setFollows]} setReload={setReload}></UserCard>
            <SortBar sort={setSort}></SortBar>
            <PostListV2 currPost={currPost}></PostListV2>
            <PageCounter total={pageCount} page={[page, setPage]} ></PageCounter>
        </div>

    </div>
}

export default User;