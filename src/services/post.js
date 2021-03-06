import URL from './url';
const signUp = async (username, password) => {

    let data = { username, password };

    let res = await fetch(`${URL}/api/users`, {
        method: 'post',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            "Content-type": "application/json",
        }
    });

    return await res.json();

}

let login = async (username, password) => {

    let data = {
        username,
        password
    };

    let res = await fetch(`${URL}/api/auth/login`, {
        method: 'post',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            "Content-type": "application/json",
        }
    });

    return await res.json();
    // return data;

}

let uploadPost = async (post, token) => {
    // console.log(post);
    let res = await fetch(`${URL}/api/posts`, {
        method: 'post',
        body: JSON.stringify(post),
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'authorization': token,
        }
    })

    return await res.json();

}

let updateVotes = async (pid, dec, token) => {

    let data = {
        id: pid,
        dec: dec
    }

    let res = await fetch(`${URL}/api/posts/${pid}/votes`, {
        method: 'post',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'authorization': token,
        }
    })

    return await res.json();

}

let uploadComment = async (id, text, token) => {

    let data = {
        id: id,
        text: text
    }

    let res = await fetch(`${URL}/api/posts/${id}/comments`, {
        method: 'post',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'authorization': token,
        }
    })

    return await res.json();

}



export default { signUp, login, uploadPost, updateVotes, uploadComment };