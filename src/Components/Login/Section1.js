import React from 'react'
import classes from '../../Styles/Login.module.css'
import { MdArrowRightAlt } from 'react-icons/md'

export const Section1 = () => {
    return (
        <div>
            <div className={classes.sec1}>
                <div className={classes.sec1img}>
                    <img className={classes.sec1img1} src={require('../../Asset/style.png')} alt="" />
                    <img className={classes.sec1img2} src={require('../../Asset/Group 11581.png')} alt="" />
                </div>
                <div className={classes.sec1txt}>
                    <h2 className={classes.sec1head}>Get your store online</h2>
                    <p className={classes.sec1txt1}>Every product deserves a digital presence. Create your store with Bamzi and
                        have a wider
                        reach of
                        market audience. Its simple and flexible to use.</p>
                    <p className={classes.sec1txt1}>Every product deserves a digital presence. Create your store with Bamzi and
                        have a wider
                        reach of
                        market audience. Its simple and flexible to use.</p>
                    <button className={classes.sec1btn}>Get Started</button>
                    <span className={classes.arrow}><MdArrowRightAlt size={60} /></span>
                </div>
            </div>
        </div>
    )
}

export default Section1
