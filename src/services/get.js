import URL from './url';

let post = async () => {

    let res = await fetch(`${URL}/api/posts`)
    let posts = await res.json();
    return posts;

}


let currentUser = async (token) => {

    // console.log('tken', token);
    let res = await fetch(`${URL}/api/users/current`, {
        method: 'get',
        mode: 'cors',
        headers: {
            'authorization': token,
        }
    })

    return await res.json();

}




const module = { post, currentUser };
export default module;