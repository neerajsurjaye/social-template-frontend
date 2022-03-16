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



export default { signUp, login };