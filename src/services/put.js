import URL from './url';

let follow = async (id, token) => {

    let res = await fetch(`${URL}/api/users/follow/${id}`, {
        method: 'put',
        headers: {
            authorization: token
        }
    })
    return await res.json();

}

export default { follow };