import React, { useEffect, useState } from 'react'
import { PollAnswerPreview } from '../components/poll-stats-page/PollAnswerPreview'
import { useGetTotalVotes } from '../custom-hooks/useGetTotalVotes'
import { pollsService } from '../services/pollsService'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { CustomLoaderOverlay } from '../components/basic-reusable/CustomLoaderOverlay';
import CheckIcon from '@material-ui/icons/Check';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    submitBtn: {
        backgroundColor: '#0085ff',
        color: '#f9f9f9',
        fontWeight: 700,
        "&:hover": {
            backgroundColor: '#61aef7',
        }
    },
}));

export const PollStatsPage = ({ match }) => {
    const [poll, setPoll] = useState(null)
    const totalVotes = useGetTotalVotes(poll)
    const [isLoading, setisLoading] = useState(true)
    const [isVotedSuccessfully, setIsVotedSuccessfully] = useState(false)
    const [selectedAnswerId, setSelectedAnswerId] = useState(null)
    const classes = useStyles();

    useEffect(() => {
        (async function () {
            try {
                const { id } = match.params
                const poll = await pollsService.getById(id)
                console.log(poll);
                setPoll(poll)
                setisLoading(() => false)
            }
            catch (err) {
                console.error('Can\'t fetch poll', err)
            }
        })()
    }, [match.params])

    const onVote = async () => {
        setisLoading(() => true)
        setPoll((prevPoll) => {
            return {
                ...prevPoll,
                answers: prevPoll.answers.map(answer => {
                    if (answer.id === selectedAnswerId) {
                        answer.votes++
                    }
                    return answer
                })
            }
        })
        try {
            const savedPoll = await pollsService.save(poll)
            if (savedPoll) {
                setTimeout(() => {
                    setisLoading(() => false)
                    setIsVotedSuccessfully(true)
                }, 2000);
                console.log('Vote successfull');
            }
        }
        catch (err) {
            console.error('Can\'t update poll votes', err)
        }
    }


    if (!poll) return 'loading...'
    return (
        <div className="voteable-poll-preview-wrapper main-layout relative">
            {isLoading && <CustomLoaderOverlay />}
            <h2 className="poll-title">{poll.question}</h2>
            <h4 className="poll-asked-by">Poll created by <span>Eyal Alfasi</span></h4>
            {!isVotedSuccessfully && <ul>
                {poll.answers.map(answer => (
                    <PollAnswerPreview
                        key={answer.id}
                        totalVotes={totalVotes}
                        onPickAnswer={setSelectedAnswerId}
                        isPicked={selectedAnswerId === answer.id}
                        answer={answer}
                    />
                ))}
            </ul>}
            {isVotedSuccessfully && <div className="voted-successfully-box">
                <h2>Voted Successfully!</h2>
                <span className="voted-successfully-icon">
                    <CheckIcon />
                </span>
            </div>}
            <div className="flex align-center space-between">
                <Link to={`/poll/${poll.id}`}>
                    <Button
                        className={classes.submitBtn}
                        onClick={onVote}
                    >
                        Submit a vote
                </Button>
                </Link>
            </div>
        </div>
    )
}
