import React from 'react'
import { useGetPercentage } from '../../custom-hooks/useGetPercentage'
import CheckIcon from '@material-ui/icons/Check';

export const PollAnswerPreview = ({ answer, onPickAnswer, totalVotes, isPicked }) => {

    const percentage  = useGetPercentage(answer.votes, totalVotes)

    return (
        <li className={`poll-answer-preview ${isPicked ? 'picked' : ''} flex align-center`} onClick={() => onPickAnswer(answer.id)}>
            {/* <div className="progress-fill" style={{ width: `${percentage }%` }}></div> */}
            {/* <span className="percentage">{percentage }%</span> */}
            <span className={`custom-checkbox ${isPicked ? 'picked' : ''}`}>
                {isPicked && <CheckIcon />}
            </span>
            <span className="answer">{answer.text}</span>
        </li>
    )
}
