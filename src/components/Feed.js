import { useState } from "react";
import PostListV2 from "./PostListV2";

let Feed = () => {

    let [currPost, setCurrPost] = useState();

    return <div className="feed">
        feed
        <PostListV2 props={currPost}></PostListV2>
    </div>
}

export default Feed;
