import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import { useGetTotalVotes } from '../../custom-hooks/useGetTotalVotes';


export const PollItemPreview = ({ poll }) => {
    const totalVotes = useGetTotalVotes(poll)

    return (
        <Link key={poll.id} className="poll-item-preview" to={`/poll/${poll.id}`}>
            <span className="votes">{totalVotes} votes</span>
            {/* <span className="poll-tag">SPORT</span> */}
            <h3>{poll.question}</h3>
            <span>Created {moment(poll.createdAt).fromNow()}</span>
        </Link>
    )
}
