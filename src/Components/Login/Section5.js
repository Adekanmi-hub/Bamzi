import React from 'react'
import classes from '../../Styles/Login.module.css'


export const Section5 = () => {
    return (
        <div className={classes.sec5}>
            <div className={classes.sec5cont}>
                <div className={classes.sec5header}>
                    <h1 className={classes.sec5head}>Find your <span class={classes.sec5span}>favorite</span> online store on the go
                        anytime anywhere.</h1>
                    <button className={classes.sec5btn}>Go Shopping</button>
                </div>
                <img className={classes.sec5img} src={require('../../Asset/D1-image6.png')} alt="" />
            </div>
        </div>
    )
}

export default Section5