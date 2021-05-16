import { httpService } from './httpService'


//RENAME BEFORE USING
export const pollsService = {
    query,
    getById,
    remove,
    save
}


async function query() {

    try {
        return httpService.get('poll')
    } catch (err) {
        throw new Error('couldn\'t find polls')
    }
}

async function getById(pollId) {
    try {
        return httpService.get(`poll/${pollId}`)
    } catch (err) {
        throw new Error('couldn\'t find poll')
    }
}

async function remove(pollId) {
    try {
        return httpService.delete(`poll/${pollId}`)
    } catch (err) {
        throw new Error('couldn\'t delete poll')
    }
}

async function save(poll) {
    try {
        return poll.id ? httpService.put(`poll/${poll.id}`, poll) : httpService.post('poll', poll)
    } catch (err) {
        throw new Error(`couldn\'t ${poll.id ? 'update' : 'add'} poll`)
    }
}