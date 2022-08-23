import React from 'react'
import classes from '../../Styles/Products.module.css'
import { BiStar } from 'react-icons/bi'

export const Rating = () => {
    return (
        <div>
            <div className={classes.ratingcont}>
                <p className={classes.rating}>Rating</p>
                <div className={classes.starmain1}>
                    <div className={classes.starcont1}>
                        <div className={classes.star1}><BiStar size={20}/></div>
                        <div className={classes.star1}><BiStar size={20}/></div>
                        <div className={classes.star1}><BiStar size={20}/></div>
                        <div className={classes.star1}><BiStar size={20}/></div>
                        <div className={classes.star1}><BiStar size={20}/></div>
                    </div>
                    <p className={classes.startxt1}>8500</p>
                </div>
                <div className={classes.starmain1}>
                    <div className={classes.starcont1}>
                        <div className={classes.star1}><BiStar size={20}/></div>
                        <div className={classes.star1}><BiStar size={20}/></div>
                        <div className={classes.star1}><BiStar size={20}/></div>
                        <div className={classes.star1}><BiStar size={20}/></div>
                        <div className={classes.star2}><BiStar size={20}/></div>
                    </div>
                    <p className={classes.startxt2}>3250</p>
                </div>
                <div className={classes.starmain1}>
                    <div className={classes.starcont1}>
                        <div className={classes.star1}><BiStar size={20}/></div>
                        <div className={classes.star1}><BiStar size={20}/></div>
                        <div className={classes.star1}><BiStar size={20}/></div>
                        <div className={classes.star2}><BiStar size={20}/></div>
                        <div className={classes.star2}><BiStar size={20}/></div>
                    </div>
                    <p className={classes.startxt3}>1120</p>
                </div>
                <div className={classes.starmain1}>
                    <div className={classes.starcont1}>
                        <div className={classes.star1}><BiStar size={20}/></div>
                        <div className={classes.star1}><BiStar size={20}/></div>
                        <div className={classes.star2}><BiStar size={20}/></div>
                        <div className={classes.star2}><BiStar size={20}/></div>
                        <div className={classes.star2}><BiStar size={20}/></div>
                    </div>
                    <p className={classes.startxt4}>3320</p>
                </div>
                <div className={classes.starmain1}>
                    <div className={classes.starcont1}>
                        <div className={classes.star1}><BiStar size={20}/></div>
                        <div className={classes.star2}><BiStar size={20}/></div>
                        <div className={classes.star2}><BiStar size={20}/></div>
                        <div className={classes.star2}><BiStar size={20}/></div>
                        <div className={classes.star2}><BiStar size={20}/></div>
                    </div>
                    <p className={classes.startxt5}>5452</p>
                </div>

            </div>
        </div>
    )
}

export default Rating