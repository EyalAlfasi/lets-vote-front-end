import React from 'react'
import { useGetPercentage } from '../../custom-hooks/useGetPercentage'

export const PollAnswerPreview = ({ answer, totalVotes }) => {

    const percentage = useGetPercentage(answer.votes, totalVotes)

    return (
        <li className={`poll-stats-answer-preview `} >
            <div className="top-section flex align-center space-between">
                <span className="answer">{answer.text}</span>
                <span className="percentage">{percentage}%</span>
            </div>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
            </div>
            <span className="votes">{totalVotes} Votes</span>
        </li>
    )
}
