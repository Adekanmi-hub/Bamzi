import React from 'react'
import classes from '../../Styles/Description.module.css'

export const Footer = () => {
    return (
        <div>
            <footer>
                <section className={classes.sec6}>
                    <div className={classes.sec6cont}>
                        <div className={classes.sec6sub}>
                            <div className={classes.sec6head}>
                                <h1 className={classes.sec6hd1}>Contact Us!</h1>
                                <p className={classes.sec6hd2}>Please input your email here to get our newsletter.</p>
                            </div>
                            <div className={classes.sec6head2}>
                                <form className={classes.form2} action="">
                                    <input className={classes.inputdesc} type="Email" placeholder="Email here" />
                                    <button className={classes.sec6btn}>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <div className={classes.foot}>
                    <div className={classes.footerbody}>
                        <div className={classes.footcont}>
                            <div className={classes.footimg}>
                                <img className={classes.footlogo} src={require('../../Asset/BAMZI.png')} alt="" />
                                <img className={classes.footlogo1} src={require('../../Asset/Group 11432.png')} alt="" />
                            </div>
                            <div className={classes.flex}>
                                <div className={classes.flexlist}>
                                    <p className={classes.flextxt}>Links</p>
                                    <ol className={classes.ol}>
                                        <li className={classes.li}>Home</li>
                                        <li className={classes.li}>Pricing</li>
                                        <li className={classes.li}>Download</li>
                                        <li className={classes.li}>About</li>
                                        <li className={classes.li}>Service</li>
                                    </ol>
                                </div>
                                <div className={classes.flexlist1}>
                                    <p className={classes.flextxt1}>Support</p>
                                    <ol className={classes.ol1}>
                                        <li className={classes.li1}>FAQ</li>
                                        <li className={classes.li1}>How it</li>
                                        <li className={classes.li1}>Features</li>
                                        <li className={classes.li1}>Contact</li>
                                        <li className={classes.li1}>Reporting</li>
                                    </ol>
                                </div>
                                <div className={classes.flexlist2}>
                                    <p className={classes.flextxt2}>Contact Us</p>
                                    <ol className={classes.ol2}>
                                        <li className={classes.li2}>+880 12345678</li>
                                        <li className={classes.li2}>youremail@gmail.co</li>
                                        <li className={classes.li2}>Rangpur City</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className={classes.lastline}>
                            <div className={classes.lastline1}>
                                <a className={classes.line1} href="/" style={{ color: "#5555ac" }}>Copyright & Designed By @DevKanmi </a>
                            </div>
                            <div className={classes.lastline2}>
                                <span className={classes.line2}><a className={classes.lastlink} href="/" style={{ color: "#5555ac" }}>Terms of
                                    use</a><span className={classes.line3}><a className={classes.lastlink1} href="/"
                                        style={{ color: "#5555ac" }}>|</a></span><a className={classes.lastlink2} href="/"
                                            style={{ color: "#5555ac" }}>Privacy
                                        Policy</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer