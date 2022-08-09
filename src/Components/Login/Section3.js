import React from 'react'
import classes from '../../Styles/Login.module.css'

export const Section3 = () => {
    return (
        <div className={classes.sec3}>
            <div>
                <img className={classes.sec3img} src={require('../../Asset/D1-image2.png')} alt="" />
            </div>
            <div className={classes.sec3cont}>
                <h2 className={classes.sec3head}>EASY STORE WITH BAMZI !!!</h2>
                <p className={classes.sec3txt}>Get the best from us with flexible customization.</p>
                <p className={classes.sec3txt1}>Easy to setup and mobille responsive.</p>
                <p className={classes.sec3txt1}>We make your customers closer to you</p>
                <button className={classes.sec3btn}>Learn more</button>
            </div>
        </div>
    )
}

export default Section3