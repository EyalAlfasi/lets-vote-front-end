import React from 'react'

export const EditPollAnswerPreview = ({ answer, idx, onChange }) => {
    return (
        <>
            <label htmlFor={`poll-question-${idx}`}> Poll answer</label>
            <div>
                <input
                    className="custom-input"
                    type="text"
                    placeholder={`Eg. Answer ${idx}`}
                    id={`poll-question-${idx}`}
                    value={answer.text}
                    onChange={onChange}
                />
            </div>
        </>
    )
}
