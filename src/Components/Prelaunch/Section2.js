import React from 'react'
import classes from '../../Styles/Prelaunch.module.css'

export const Section2 = () => {
    return (
        <div>
            <div>
                <form action="" className={classes.form}>
                    <input type="text" className={classes.formname} name="fname" placeholder="Full Name" /><br />
                    <div>
                        <input type="email" className={classes.formemail} name="email" placeholder="Email here" />
                        <input type="text" className={classes.formind} name="industry" placeholder="Industry" />
                    </div>
                    <br />

                    <div className={classes.buttoncont}>
                        <button className={classes.buyer}><img src={(require('../../Asset/Icon ionic-ios-cart.png'))} width="18px" height="18px" alt="" />Buyer</button>
                        <button className={classes.seller}><img src={(require('../../Asset/Icon metro-shop.png'))} width="18px" height="18px" alt="" />Seller</button><br /><br />
                    </div>

                    <button className={classes.formres}>Book your reservation</button>
                </form>
            </div>
        </div>
    )
};

export default Section2