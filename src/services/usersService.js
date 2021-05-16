import { httpService } from './httpService'


//RENAME BEFORE USING
export const usersService = {
    query,
    getById,
    remove,
    save
}


async function query() {

    try {
        return httpService.get('user')
    } catch (err) {
        throw new Error('couldn\'t find users')
    }
}

async function getById(userId) {
    try {
        return httpService.get(`user/${userId}`)
    } catch (err) {
        throw new Error('couldn\'t find user')
    }
}

async function remove(userId) {
    try {
        return httpService.delete(`user/${userId}`)
    } catch (err) {
        throw new Error('couldn\'t delete user')
    }
}

async function save(user) {
    try {
        return user.id ? httpService.put(`user/${user.id}`, user) : httpService.post('user', user)
    } catch (err) {
        throw new Error(`couldn\'t ${user.id ? 'update' : 'add'} user`)
    }
}

// async function login(userCredentials) {
//     try {
//         return httpService.get('user', userCredentials)
//     } catch (err) {
//         throw new Error(`Incorrect username/password`)
//     }
// }