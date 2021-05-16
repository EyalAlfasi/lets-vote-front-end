import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { pollsService } from '../services/pollsService.js'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { PollItemPreview } from '../components/my-polls-page/PollItemPreview.jsx';


const useStyles = makeStyles((theme) => ({
    createPollBtn: {
        backgroundColor: "#00ffc2",
        marginBottom: "1rem",
        color: "#333",
        fontWeight: "700"
    },
}));

export const MyPollsPage = () => {

    const [polls, setPolls] = useState(null)
    const classes = useStyles();

    useEffect(() => {
        (async function () {
            try {
                const myPolls = await pollsService.query();
                console.log(myPolls);
                setPolls(myPolls)
            }
            catch (err) {
                console.error('Can\'t fetch polls', err)
            }
        })()
    }, [])

    return (
        <div className="my-polls-page-wrapper main-layout">
            <div className="my-polls-page">
                <h2 className="my-polls-title">My polls</h2>
                <h2 className="my-polls-description">All of the polls you created</h2>
                <div className="polls-list">
                    {polls && polls.map(poll => (
                        <PollItemPreview poll={poll} />
                    ))}
                </div>
            </div>
        </div>
    )
}
