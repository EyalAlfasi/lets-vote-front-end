export const GET_POLLS = 'GET_POLLS'
export const SET_POLLS = 'SET_POLLS'
export const ADD_POLL = 'ADD_POLL'
export const REMOVE_POLL = 'REMOVE_POLL'

export const getPolls = () => ({
    type: GET_POLLS
})

export const setPolls = (polls) => ({
    type: SET_POLLS,
    polls
})

const initialState = {
    polls: []
}
export const pollReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POLLS:
            const { polls } = action
            return { ...state, polls }
        default:
            return state
    }
}