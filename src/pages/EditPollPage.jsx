import React, { useEffect, useReducer } from 'react'
import { pollsService } from '../services/pollsService'
import { v4 as uuidv4 } from 'uuid';
import { EditPollAnswerPreview } from '../components/edit-poll-page/EditPollAnswerPreview';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


const initialState = {
    question: '',
    answers: [{
        id: uuidv4(),
        text: "",
        votes: 0
    },
    {
        id: uuidv4(),
        text: "",
        votes: 0
    },
    {
        id: uuidv4(),
        text: "",
        votes: 0
    }]
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_INITIAL_POLL':
            return { ...action.poll }
        case 'UPDATE_QUESTION_TEXT':
            console.log(action.text)
            return { ...state, question: action.text }
        case 'ADD_ANSWER':
            return {
                ...state,
                answers: [...state.answers, {
                    id: uuidv4(),
                    text: "",
                    votes: 0
                }]
            }
        case 'REMOVE_ANSWER':
            return {
                ...state,
                answers: state.answers.filter(answer => {
                    return answer.id !== action.answerId
                })
            }
        case 'UPDATE_ANSWER_TEXT':
            return {
                ...state,
                answers: state.answers.map(answer => {
                    if (answer.id === action.answerId) {
                        return { ...answer, text: action.text }
                    }
                    else return answer
                })
            }
        default: throw new Error('Unexpected action');
    }
};

const useStyles = makeStyles((theme) => ({
    addAnswerBtn: {
        backgroundColor: '#4199FF',
        color: '#f9f9f9',
        fontWeight: 700,
        marginTop: "2rem",
        padding: theme.spacing(2),
        fontSize: "1rem",

        width: "100%",
        [theme.breakpoints.up('sm')]: {
            width: "unset",
        },
        "&:hover": {
            backgroundColor: '#357dd0',
        }
    },
}));


export const EditPollPage = ({ match }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const classes = useStyles()

    useEffect(() => {
        const { id } = match.params
        if (id) {
            (async function () {
                try {
                    const poll = await pollsService.getById(id)
                    dispatch({ type: 'SET_INITIAL_POLL', poll })
                }
                catch (err) {
                    console.error('Can\'t fetch poll', err)
                }
            })()
        }
    }, [match.params])
    console.log(state);
    return (
        <div className="main-layout edit-poll-page-wrapper">
            <h2 className="new-poll-title">Create a new poll</h2>
            <h4 className="new-poll-description">Write a question and some answers :)</h4>
            <div className="inputs-list-container">
                <label htmlFor="poll-question">Poll question</label>
                <div>
                    <textarea
                        rows={5}
                        style={{ resize: "none" }}
                        className="custom-input"
                        type="text"
                        placeholder='Eg. "What is your favorite ice cream?"'
                        id="poll-question"
                        value={state.question}
                        onChange={(ev) => dispatch({
                            type: 'UPDATE_QUESTION_TEXT',
                            text: ev.target.value
                        })}
                    />
                </div>
                {state.answers.map((answer, idx) => {
                    return <EditPollAnswerPreview
                        key={answer.id}
                        answer={answer}
                        idx={idx + 1}
                        onChange={(ev) => dispatch({
                            type: 'UPDATE_ANSWER_TEXT',
                            answerId: answer.id,
                            text: ev.target.value,
                        })}
                    />
                })}
                <Button
                    className={classes.addAnswerBtn}
                    endIcon={<AddIcon />}
                    onClick={() => dispatch({ type: "ADD_ANSWER" })}
                >
                    Add another answer
                </Button>
            </div>
        </div>
    )
}
