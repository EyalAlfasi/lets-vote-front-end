import React, { useEffect } from 'react'
import { pollsService } from '../services/pollsService'

export const EditPollPage = ({ match }) => {
    // useEffect(() => {
    //     (async function () {
    //         try {
    //             const { id } = match.params
    //             if (id) {
    //                 const poll = await pollsService.getById(id)
    //                 console.log(poll);
    //                 setPoll(poll)
    //             } else {

    //             }
    //         }
    //         catch (err) {
    //             console.error('Can\'t fetch poll', err)
    //         }
    //     })()
    // }, [match.params])

    return (
        <div>

        </div>
    )
}
