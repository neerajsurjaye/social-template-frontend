import URL from './url';

let post = async () => {

    let posts = await fetch(`${URL}/api/post`)
    posts = await posts.json();
    return posts;

}

const module = { post }
export default module;