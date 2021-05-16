import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    btn: {
        color: props => props.color || theme.palette.primary.main,
        backgroundColor: props => props.backgroundColor || theme.palette.secondary.main
    },
}));

export const CustomButton = ({ variant, color, backgroundColor, onClick, children }) => {

    const classes = useStyles(color, backgroundColor);

    return (
        <Button className={classes.btn} variant={variant || 'contained'} onClick={onClick || null}>
            {children}
        </Button>
    )
}
