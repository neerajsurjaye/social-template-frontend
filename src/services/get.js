import URL from './url';

let post = async (page, search, sort, user) => {

    // console.log({ page, search });

    let url = `${URL}/api/posts?page=${page}&search=${search}&sort=${sort}`;
    // console.log(url);

    if (user) {
        url = `${URL}/api/posts?page=${page}&search=${search}&sort=${sort}&user=${user}`;
    }

    let res = await fetch(url);
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

let getPostById = async (id) => {

    let res = await fetch(`${URL}/api/posts/${id}`);
    return await res.json();

}


let getAllComments = async (id) => {

    let res = await fetch(`${URL}/api/posts/${id}/comments`);
    return await res.json();

}

let userById = async (id) => {
    let res = await fetch(`${URL}/api/users/${id}`);
    return await res.json();
}

let postByFollow = async (search, sort, page, token) => {

    // console.log(search, sort);
    let res = await fetch(`${URL}/api/posts/feed?search=${search}&sort=${sort}&page=${page}`, {
        headers: {
            authorization: token
        }
    });
    return await res.json();

}

let singleTag = async (id, sort, page) => {
    // console.log(id, sort);
    let res = await fetch(`${URL}/api/posts/tag?id=${id}&sort=${sort}&page=${page}`);
    return await res.json();
}

let reccomended = async (sort, page, token) => {

    let res = await fetch(`${URL}/api/posts/recc?sort=${sort}&page=${page}`, {
        headers: {
            authorization: token
        }
    });
    return await res.json();
}

let follows = async (id, token) => {
    let res = await fetch(`${URL}/api/users/follow/${id}`, {
        headers: {
            authorization: token
        }
    });
    return await res.json();
}

const module = { post, currentUser, getPostById, getAllComments, userById, postByFollow, singleTag, reccomended, follows };
export default module;