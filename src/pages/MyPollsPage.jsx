import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { PollItemPreview } from '../components/my-polls-page/PollItemPreview.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getPolls } from '../store/reducers/pollReducer.js';


const useStyles = makeStyles((theme) => ({
    createPollBtn: {
        backgroundColor: "#00ffc2",
        marginBottom: "1rem",
        color: "#333",
        fontWeight: "700"
    },
}));

export const MyPollsPage = () => {

    const classes = useStyles();
    const polls = useSelector(state => state.pollReducer.polls)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPolls())
    }, [])

    return (
        <div className="my-polls-page-wrapper main-layout">
            <div className="my-polls-page">
                <h2 className="my-polls-title">My polls</h2>
                <h2 className="my-polls-description">All of the polls you created</h2>
                <div className="polls-list">
                    {polls && polls.map(poll => (
                        <PollItemPreview key={poll.id} poll={poll} />
                    ))}
                </div>
            </div>
        </div>
    )
}
