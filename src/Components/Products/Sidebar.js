import React from 'react'
import classes from '../../Styles/Products.module.css'

import { FiHome } from 'react-icons/fi'
import { BiRadioCircle } from 'react-icons/bi'
import { FiShoppingCart } from 'react-icons/fi'
import { IoCubeOutline } from 'react-icons/io5'
import { BiCategory } from 'react-icons/bi'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BsCreditCard } from 'react-icons/bs'
import { BsQuestionCircle } from 'react-icons/bs'
import { IoPersonOutline } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebarbg}>
                <div className={classes.sidebarcont}>
                    {/* <img className={classes.img1} src={require('../../Asset/BAMZI.png')} alt="" /> */}
                    <h1 className={classes.bamzi}><span className={classes.bam}>BAM</span><span className={classes.zi}>ZI</span></h1>


                    <div className={classes.section1}>
                        <span className={classes.home}><FiHome /></span>
                        <span className={classes.dash}>Dashboard</span>
                    </div>
                    <div className={classes.section2}>
                        <span className={classes.circle}><BiRadioCircle /></span>
                        <span className={classes.analytics}>Analytics</span>
                    </div>
                    <div className={classes.section3}>
                        <span className={classes.circle}><BiRadioCircle /></span>
                        <span className={classes.marketing}>Marketing</span>
                    </div>


                    <h2 className={classes.product}>PRODUCTS</h2>
                    <div className={classes.section4}>
                        <span className={classes.cart}><FiShoppingCart /></span>
                        <span className={classes.sales}>Sales</span>
                        <span className={classes.arrow1}><IoIosArrowForward /></span>
                    </div>
                    <div className={classes.section5}>
                        <span className={classes.cube}><IoCubeOutline /></span>
                        <span className={classes.products}>All Products</span>
                    </div>
                    <div className={classes.section6}>
                        <span className={classes.icategory}><BiCategory /></span>
                        <span className={classes.category}>Categories</span>
                        <span className={classes.arrow2}><IoIosArrowForward /></span>
                    </div>


                    <h2 className={classes.transaction}>Transactions</h2>
                    <div className={classes.section7}>
                        <span className={classes.calendar}><FaRegCalendarAlt /></span>
                        <span className={classes.history}>History</span>
                    </div>
                    <div className={classes.section8}>
                        <span className={classes.card}><BsCreditCard /></span>
                        <span className={classes.billing}>Billings</span>
                    </div>


                    <h2 className={classes.setting}>Settings</h2>
                    <div className={classes.section9}>
                        <span className={classes.person}><IoPersonOutline /></span>
                        <span className={classes.account}>Account</span>
                        <span className={classes.arrow3}><IoIosArrowForward /></span>
                    </div>
                    <div className={classes.section10}>
                        <span className={classes.cube}><IoCubeOutline /></span>
                        <span className={classes.shop}>Customize Shop</span>
                    </div>
                    <div className={classes.section11}>
                        <span className={classes.question}><BsQuestionCircle /></span>
                        <span className={classes.help}>Help</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar