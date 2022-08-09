import React from 'react'
import classes from '../../Styles/Dashboard.module.css'

import { MdNotificationsActive } from 'react-icons/md'
import { GiPlainCircle } from 'react-icons/gi'

export const Section3 = () => {
    const testing = () => {
        console.log('testing 123')
    }
    return (
        <div className={classes.sect3}>
            <div className={classes.sect3cont}>
                <div className={classes.sect3cont1}>

                    <div className={classes.sect3cont2}>
                        <h1 className={classes.sect3head1}>Latest Sales (28)</h1>
                        <div className={classes.sect3content1}>

                            <div className={classes.sect3cont2main}>
                                <img className={classes.sect3img1} src={require('../../Asset/D4-image3.png')} alt='' />
                                <div className={classes.sect3content2}>
                                    <div className={classes.iphone2}>
                                        <p className={classes.sect3txt1}>iPhone X 6 Gb Ram</p>
                                        <p className={classes.sect3span1}>30min ago</p>
                                    </div>
                                    <p className={classes.sect3txt2}>QTY <span className={classes.sect3span2}>6</span></p>
                                    <p className={classes.sect3amount1}>$1500</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.sect3cont3}>
                        <div className={classes.sect3content3}>
                            <img className={classes.sect3img2} src={require('../../Asset/D4-image3.png')} alt='' />
                            <div className={classes.sect3content4}>
                                <div className={classes.iphone2}>
                                    <p className={classes.sect3txt3}>iWatch Series 6 + free pouch and Extra case</p>
                                    <p className={classes.sect3span3}>2hours ago</p>
                                </div>
                                <p className={classes.sect3txt4}>QTY <span className={classes.sect3span4}>1</span></p>
                                <p className={classes.sect3amount2}>$1500</p>
                            </div>
                        </div>
                    </div>
                    <button className={classes.sect3btn} onClick={() => testing()}>View Sales</button>
                </div>

                <div className={classes.sect3cont4}>
                    <div className={classes.sect3notify}>
                        <GiPlainCircle className={classes.sect3circle} size={45} />
                        <MdNotificationsActive className={classes.sect3not} size={30} />
                    </div>
                    <h2 className={classes.sect3txt5}>Error In Order</h2>
                    <p className={classes.sect3txt6}>You have an urgent package to take care of. Please check this and revert to them.</p>
                </div>

                <div className={classes.sect3cont5}>
                    <div className={classes.sect3content5}>
                        <div className={classes.sect3cont5main}>
                            <p className={classes.sect3text1}>Congratulations Ayo!</p>
                            <p className={classes.sect3text2}>Best seller of the month</p>
                            <h1 className={classes.sect3head2}>$89k</h1>
                            <p className={classes.sect3text3}>You have done 57.6% more sales today.</p>
                            <img className={classes.sect3img3} src={require('../../Asset/M5-image.png')} alt='' />
                            <button className={classes.sectbtn1}>View Sales</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section3