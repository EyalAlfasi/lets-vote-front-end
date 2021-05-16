import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    createPollBtn: {
        backgroundColor: '#00ca72',
        color: '#f9f9f9',
        fontWeight: 700,
        "&:hover": {
            backgroundColor: '#17eb8f',
        }
    },
    loginBtn: {
        fontWeight: 700,
        color: "#525252de",
    },
    signupBtn: {
        fontWeight: 700,
        backgroundColor: '#0085ff',
        color: '#f9f9f9',
        "&:hover": {
            backgroundColor: '#61aef7',
        }
    }
}));

export const AppHeader = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const classes = useStyles();

    return (
        <header className={`app-header-container flex`}>
            <div className="logo"><Link to="/"> <span>let's</span><span>vote</span> </Link></div>
            <div>
                <Link to="/poll/edit">
                    <Button className={classes.createPollBtn}>Create poll</Button>
                </Link>
            </div>
            <nav className="flex align-center">
                <div className={`hamburger ${isNavOpen ? 'open' : ''}`} onClick={() => setIsNavOpen(!isNavOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <Button href="/login" className={classes.loginBtn}>Login</Button>
                    <Button href="/signup" className={classes.signupBtn}>Sign up</Button>
                </div>
            </nav>
        </header >
    )
}
