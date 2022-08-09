import React from 'react'
import classes from '../../Styles/Dashboard.module.css'

import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { ImHeart } from 'react-icons/im'
import { MdPeople } from 'react-icons/md'

export const Section2 = () => {
    return (
        <div className={classes.sect2}>
            <div className={classes.sect2cont}>
                <h1 className={classes.sect2head}>Quick Stats</h1>
                <div className={classes.sect2cont1}>
                    <div className={classes.sect2cont2}>
                        <p className={classes.sect2sale}>Total Sales</p>
                        <p className={classes.sect2amount}>28,345</p>
                    </div>
                    <div className={classes.sect2cont3}>
                        <div className={classes.sect2circle1}><BsFillQuestionCircleFill size={13} /></div>
                        <p className={classes.sect2goods}>Bad goods</p>
                        <p className={classes.sect2error}>28 errors</p>
                    </div>
                    <div className={classes.sect2cont4}>
                        <span className={classes.sect2circle2}><BsFillQuestionCircleFill size={13} /></span>
                        <p className={classes.sect2pend}>Pending Sales</p>
                        <p className={classes.sect2no}>120</p>
                    </div>
                    <div className={classes.sect2cont5}>
                        <span className={classes.sect2circle3}><BsFillQuestionCircleFill size={13} /></span>
                        <p className={classes.sect2wish}>Wishlist Store</p>
                        <span className={classes.sect2no1}>500</span>
                        <span className={classes.sect2heart}><ImHeart size={40} /></span>
                    </div>
                    <div className={classes.sect2cont6}>
                        <span className={classes.sect2circle4}><BsFillQuestionCircleFill size={13} /></span>
                        <p className={classes.sect2customer}>Customers</p>
                        <span className={classes.sect2no2}>829</span>
                        <span className={classes.sect2ppl}><MdPeople size={30} /></span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Section2