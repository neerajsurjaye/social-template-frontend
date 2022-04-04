import { useState } from "react";
import post from '../services/post';
import GoBack from "./GoBack";
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

    let uploadPost = async (e) => {
        // console.log({ title, tag, text });
        e.preventDefault();

        // console.log(e.reportValidity());
        if (!title || !text) {

            console.log("title text cannot be emtpy");
            return;
        }

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
        <GoBack></GoBack>
        <form className="post-form-form">
            <h2>Add new Post</h2>
            <div className="form-row">
                <label htmlFor="title">Title</label>
                <input type="text" className="inp" id="title" value={title} onChange={updateTitle} required='required' />
            </div>
            <div className="form-row">
                <label htmlFor="title">Text</label>
                <textarea type="text" className="inp" id="text" value={text} onChange={updateText} required='required' />
            </div>
            <div className="form-row">
                <label htmlFor="tag">Tag</label>
                <input type="text" placeholder="Add space seprated tags eg : 'tag1 tag2 tag3'" className="inp" id="tag" value={tag} onChange={updateTag} />
            </div>
            <div className="form-row">
                <button className="btn primary" onClick={uploadPost} >Submit</button>
            </div>

        </form >
    </div >

}

export default PostForm;