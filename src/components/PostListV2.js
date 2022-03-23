import { useEffect } from 'react';
import { useState } from 'react';
import get from '../services/get';
import Post from '../components/Post';
import PageCounter from './PageCounter';
import Search from './Search';

const PostListV2 = (props) => {

    let [currPost, setCurrPost] = useState(props.posts);
    let [pageCount, setPageCount] = useState(0);
    let [page, setPage] = useState(0);
    let [search, setSearch] = useState("");
    let [sort, setSort] = useState("new");
    // let [reload, setReload] = useState("false");

    let getPost = async () => {

        let res;

        if (props.user) {
            res = await get.post(page, search, sort, props.user);
        } else {
            res = await get.post(page, search, sort);
        }

        if (res.success) {
            setCurrPost(res.success.posts);
            setPageCount(res.success.count);
        } else {

        }

    }

    let genList = () => {
        if (!currPost) {
            return <div>
                Loading
            </div>
        }

        let list = currPost.map((x) => {
            return <Post
                key={x._id}
                post={x}>
            </Post>
        })

        return list;

    }

    useEffect(() => {
        setCurrPost(null);
        getPost();
    }, [page, search, sort]);

    return <div className="postlist">

        <Search search={[search, setSearch]} setSort={setSort}></Search>
        {genList()}
        <PageCounter total={pageCount} page={[page, setPage]} ></PageCounter>

    </div >

}

export default PostListV2;