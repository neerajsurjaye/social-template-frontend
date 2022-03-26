import URL from './url';

let detelePost = async (id, token) => {
    // console.log("Post delete");

    let res = await fetch(`${URL}/api/posts/${id}`, {
        method: 'delete',
        headers: {
            'authorization': token
        }
    })
    return res.json();

}

export default { detelePost }