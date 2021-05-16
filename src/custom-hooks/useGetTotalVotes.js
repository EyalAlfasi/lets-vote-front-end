import { useMemo } from 'react'

export const useGetTotalVotes = (poll,) => {

    return useMemo(() => {
        if (poll) {
            return poll.answers.reduce((sum, answer) => {
                return sum + answer.votes
            }, 0)
        }
    }, [poll])
}
