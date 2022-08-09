import React from 'react'
import classes from '../../Styles/Login.module.css'

export const Section4 = () => {
    return (
        <div className={classes.sec4}>
            <div>
                <h3 className={classes.sec4head}>Featured Products</h3>
            </div>
            <div className={classes.sec4cont1}>
                <p className={classes.cont1}>Trending Item</p>
                <button className={classes.sec4btn}>New Arrivals</button>
                <p className={classes.cont2}>Best Sale</p>
            </div>
            <div className={classes.sec4cont2}>
                <div className={classes.sec4subcont1}>
                    <p className={classes.cont3}>NOT PROVIDED</p>
                    <img className={classes.sec4img1} src={require('../../Asset/Card-1 Apple Watch.png')} alt="" />
                    <img className={classes.sec4img1} src={require('../../Asset/Card-1 Apple Watch.png')} alt="" />
                </div>
                <div className={classes.sec4subcont2}>
                    <img className={classes.sec4img2} src={require('../../Asset/mark-your-calendar.jpg')} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section4