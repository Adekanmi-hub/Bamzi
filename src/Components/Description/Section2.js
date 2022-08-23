import React, { useState } from 'react'
import classes from '../../Styles/Description.module.css'


export const Section2 = () => {
    const [tab, setTab] = useState("description")

    return (
        <div className={classes.Section2}>
            <div className={classes.aboutcont}>
                <div className={classes.sect2about}>
                    <span className={classes.description} onClick={() => setTab("description")}>Description</span>
                    <span className={classes.reviews} onClick={() => setTab("review")}>Reviews</span>
                </div>
            </div>

            {tab === "description" && (
                <div>
                    <div className={classes.subsect2}>
                        <div className={classes.subimgcont1}>
                            <div className={classes.groupcont1}>
                                <img className={classes.group1} src={require('../../Asset/Group 11551.png')} alt='' />
                            </div>
                            <div className={classes.groupcont2}>
                                <img className={classes.group2} src={require('../../Asset/Group 11551.png')} alt='' />
                            </div>
                        </div>
                        <div className={classes.descriptioncont1}>
                            <div className={classes.subtxtcont1}>
                                <p className={classes.subtxt1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                            </div>
                            <div className={classes.subimgcont2}>
                                <img className={classes.appleseries} src={require('../../Asset/AppleWatchLifestyle.jpg')} alt='' />
                                <img className={classes.applewatchads} src={require('../../Asset/AppleWatchAds.jpg')} alt='' />
                            </div>
                            <div className={classes.subtxtcont2}>
                                <p className={classes.subtxt2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.section3}>
                        <p className={classes.sect3txt}>Use the wireless 4.0 in real time</p>
                        <div className={classes.sect3desc}>
                            <img className={classes.sect3img1} src={require('../../Asset/AppleWatchSeries.png')} alt='' />
                            <div className={classes.tablecont}>
                                <p className={classes.addinfo}>Additional Information</p>
                                <table>
                                    <tr>
                                        <th className={classes.tablecol1}>Brand</th>
                                        <th className={classes.tablecol2}>iWatch</th>
                                    </tr>
                                    <tr>
                                        <td className={classes.tablecol1}>Model</td>
                                        <td className={classes.tablecol2}>Series 7</td>
                                    </tr>
                                    <tr>
                                        <td className={classes.tablecol1}>Case Size</td>
                                        <td className={classes.tablecol2}>41mm, 45mm</td>
                                    </tr>
                                    <tr>
                                        <td className={classes.tablecol1}>Processror</td>
                                        <td className={classes.tablecol2}>64-bit dual-core processor</td>
                                    </tr>
                                    <tr>
                                        <td className={classes.tablecol1}>Optical Heart Sensor</td>
                                        <td className={classes.tablecol2}>Third-generation</td>
                                    </tr>
                                    <tr>
                                        <td className={classes.tablecol1}>Speaker</td>
                                        <td className={classes.tablecol2}>50% louder than series 3</td>
                                    </tr>
                                    <tr>
                                        <td className={classes.tablecol1}>Case Thickness</td>
                                        <td className={classes.tablecol2}>10.7mm</td>
                                    </tr>
                                    <tr>
                                        <td className={classes.tablecol1}>Capacity</td>
                                        <td className={classes.tablecol2}>32GB</td>
                                    </tr>
                                    <tr>
                                        <td className={classes.tablecol1}>Bluetooth</td>
                                        <td className={classes.tablecol2}>BT 5.0</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            )}

            {tab === "review" && (<div></div>)}

        </div>
    )
}

export default Section2