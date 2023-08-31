import React, {Fragment} from 'react';
import Card from './ui/Card';
import Button from './ui/Button'
import classes from './ErrorModal.module.css'




const ErrorModal = (props) => {
    return (
        <Fragment>
             <div className={classes.backdrop} onClick={props.onClick}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <main className={classes.content}>
                    <p>{props.message}</p>
                </main>
                <footer className={classes.actions}>
                    <Button onClick={props.onClick}>OK</Button>
                </footer>
            </Card>
        </Fragment>
    );
};

export default ErrorModal