import { useState } from "react";
import post from '../services/post';
const PostForm = () => {

    let [title, setTitle] = useState("");
    let [text, setText] = useState("");
    let [tag, setTag] = useState("");

    let updateTitle = (e) => {
        let currTitle = e.target.value;
        setTitle(currTitle);
    }

    let updateText = (e) => {
        setText(e.target.value);
    }

    let updateTag = (e) => {
        setTag(e.target.value);
    }

    let uploadPost = async () => {
        // console.log({ title, tag, text });
        let currPost = {};

        currPost.title = title;
        currPost.text = text;

        let currTag = tag.split(' ');
        currTag = currTag.join('+');

        currPost.tag = currTag;
        let token = localStorage.getItem('Auth');

        let res = await post.uploadPost(currPost, token);

        console.log(res);

    }


    return <div className="post-form">
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" className="inp" id="title" value={title} onChange={updateTitle} />
            <label htmlFor="title">Text</label>
            <textarea type="text" className="inp" id="text" value={text} onChange={updateText} />
            <label htmlFor="tag">Tag</label>
            <input type="text" className="inp" id="tag" value={tag} onChange={updateTag} />
            <input type="button" className="btn" value="submit" onClick={uploadPost} />

        </form>
    </div>

}

export default PostForm;