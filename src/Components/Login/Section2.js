import React from 'react'
import classes from '../../Styles/Login.module.css'

export const Section2 = () => {
    return (
        <div className={classes.sec2}>
            <h1 className={classes.sec2head}>Why use Bamzi</h1>
            <div className={classes.sec2main}>
                <div className={classes.sec2flex1}>
                    <img className={classes.sec2img1} src={require('../../Asset/day78-wallet.png')} alt="" />
                    <h3 className={classes.sec2hd}>Make More Money</h3>
                    <p className={classes.sec2txt}>save time, avoid losing work and information, delegate, and track tasks
                        to stay on
                        schedule.
                    </p>
                </div>
                <div className={classes.sec2flex2}>
                    <img className={classes.sec2img2} src={require('../../Asset/day77-pocket-knief.png')} alt="" />
                    <h3 className={classes.sec2hd1}>Flexible Digital Store</h3>
                    <p className={classes.sec2txt}>save time, avoid losing work and information, delegate, and track tasks
                        to stay on
                        schedule.
                    </p>
                </div>
                <div className={classes.sec2flex3}>
                    <img className={classes.sec2img3} src={require('../../Asset/day80-tea.png')} alt="" />
                    <h3 className={classes.sec2hd1}>Sell products with convenience</h3>
                    <p className={classes.sec2txt}>save time, avoid losing work and information, delegate, and track tasks
                        to stay on
                        schedule.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section2