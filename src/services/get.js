import URL from './url';

let post = async () => {

    let res = await fetch(`${URL}/api/post`)
    let posts = await res.json();
    return posts;

}


let currentUser = async (token) => {

    // console.log('tken', token);
    let res = await fetch(`${URL}/api/user/current`, {
        method: 'get',
        headers: {
            'authorization': token,
        }
    })

    return await res.json();

}




const module = { post, currentUser };
export default module;