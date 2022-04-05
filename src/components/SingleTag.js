import { useState } from "react";
import PostListV2 from "./PostListV2";
import Search from "./Search";
import PageCounter from './PageCounter';
import { useEffect } from "react";
import get from '../services/get';
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import UserCard from "./UserCard";
import SortBar from "./SortBar";
import CurrPage from "./CurrPage";


let SingleTag = () => {

    let [currPost, setCurrPost] = useState();
    let [search, setSearch] = useState("");
    let [sort, setSort] = useState("new");
    let [page, setPage] = useState(0);
    let [pageCount, setPageCount] = useState(0);
    let { id } = useParams();
    let [tagName, setTagName] = useState('');

    let updatePosts = async () => {
        // let token = localStorage.getItem('Auth');
        let res = await get.singleTag(id, sort, page);
        console.log(res);
        if (res.success) {

            setCurrPost(res.success.posts);
            setPageCount(res.success.count);
            setTagName(res.success.tagName);
        }
    }

    useEffect(() => {
        updatePosts();
    }, [search, sort, page, id])

    //old redacted
    // return <div className="SingleTag">
    //     Single Tag
    //     <Search search={[search, setSearch]} setSort={setSort}></Search>
    //     <PostListV2 currPost={currPost}></PostListV2>
    //     <PageCounter total={pageCount} page={[page, setPage]} ></PageCounter>
    // </div>

    return <div className="user post-page">

        <Nav search={[search, setSearch]} ></Nav>


        <div className="home-post post-main">
            <CurrPage name={`Tag - ${tagName}`}></CurrPage>
            <SortBar sort={setSort}></SortBar>
            <PostListV2 currPost={currPost}></PostListV2>
            <PageCounter total={pageCount} page={[page, setPage]} ></PageCounter>
        </div >

    </div >

}

export default SingleTag;