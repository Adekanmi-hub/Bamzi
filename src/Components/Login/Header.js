import React from 'react'
import classes from '../../Styles/Login.module.css'

const Header = () => {
    return (
        <div>
            <header>
                <div className={classes.headercont}>
                    <div className={classes.headcont}>
                        <img className={classes.logo} src={require('../../Asset/BAMZI.png')} alt="" />
                        <span className={classes.headnav1}>
                            <a className={classes.headlink1} href="/" style={{ color: "#000033" }}>Products</a>
                            <a className={classes.headlink1} href="/" style={{ color: "#000033" }}>Stores</a>
                            <a className={classes.headlink1} href="/" style={{ color: "#000033" }}>Pricing</a>
                            <a className={classes.headlink1} href="/" style={{ color: "#000033" }}>Features</a>
                        </span>
                        <span className={classes.headnav2}>
                            <a className={classes.headlink2} href="/" alt="" style={{ color: "#000033" }}>cart</a>
                            <img className={classes.headcart} src={require("../../Asset/Icon ionic-ios-cart.png")} alt="" />
                        </span>
                        <button className={classes.headbtn}>Login</button>
                    </div>

                    <div className={classes.headcnt}>
                        <div className={classes.headercnt}>
                            <h1 className={classes.headertxt}>One step to a Digital Store</h1>
                            <p className={classes.headertxt1}>
                                Every project deserves a digital presence. Create your store with Bamzi and have a wider
                                reach
                                of
                                market audience. Its simple and flexible to use.
                            </p>
                            <div className={classes.headerbtn}>
                                <button className={classes.headerbtn1}>Get Started</button>
                                <button className={classes.headerbtn2}>Go Shopping</button>
                            </div>
                        </div>
                        <div className={classes.headerimg}>
                            <img className={classes.headerimg1} src={require('../../Asset/Shapes.png')} alt="" />
                            <img className={classes.headerimg2} src={require('../../Asset/Mask.png')} alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header