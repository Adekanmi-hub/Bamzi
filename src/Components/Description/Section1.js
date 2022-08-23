import React, { useState } from 'react'
import classes from '../../Styles/Description.module.css'


import { TbArrowsMaximize } from "react-icons/tb"
import { CgShapeCircle } from "react-icons/cg"
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md"
import { RiArrowRightSLine } from "react-icons/ri"
import { IoIosCart } from 'react-icons/io'
import { FaStoreAlt } from "react-icons/fa";
import { VscCircleFilled } from 'react-icons/vsc'


export const Section1 = () => {
    const [counter, setCounter] = useState(0)
    const increaseQty = () => {
        setCounter((prevState) => prevState + 1)
    }
    const decreaseQty = () => {
        if (counter === 0) {
            setCounter(0)
        }
        else {
            setCounter((prevState) => prevState - 1)
        }
    }

    return (
        <div className={classes.section1}>
            <div className={classes.section1container}>
                <div className={classes.sect1images}>
                    <img className={classes.sect1img1} src={require('../../Asset/D1-image5.png')} alt='' />
                    <img className={classes.sect1img2} src={require('../../Asset/D4-image3.png')} alt='' />
                    <img className={classes.sect1img3} src={require('../../Asset/D4-image2.png')} alt='' />
                </div>
                <div className={classes.sect1img4cont}>
                    <img className={classes.sect1img4} src={require('../../Asset/D1-image5.png')} alt='' />
                </div>
                <div className={classes.sect1row}>

                    <div className={classes.sect1arrow}>
                        <TbArrowsMaximize />
                    </div>
                    <div className={classes.sect1circle}>
                        <span className={classes.sect1circle1}></span>
                        <span className={classes.sect1circle2}></span>
                        <span className={classes.sect1circle3}></span>
                    </div>
                    <div className={classes.sect1arrow1}>
                        <span className={classes.sect1arrowback}><MdOutlineArrowBackIos /></span>
                        <span className={classes.sect1arrowforward}><MdOutlineArrowForwardIos /></span>
                    </div>
                </div>
            </div>

            <div className={classes.sect1row2}>
                <div className={classes.row2head}>
                    <span className={classes.row2txt1}>Electronics</span>
                    <span className={classes.row2arrow1}><RiArrowRightSLine /></span>
                    <span className={classes.row2txt2}>Apple</span>
                    <span className={classes.row2arrow2}><RiArrowRightSLine /></span>
                    <span className={classes.row2txt3}>Bands</span>
                </div>
                <div className={classes.row2stock}>
                    <p className={classes.stocktxt}>In Stock</p>
                </div>
                <p className={classes.row2item}>Apple Watch 2.0 Ipv4</p>
                <p className={classes.row2price}>$399</p>
                <div className={classes.row2img}>
                    <img className={classes.row2img1} src={require('../../Asset/D1-image5.png')} alt='' />
                    <img className={classes.row2img2} src={require('../../Asset/BlueiWatch.jpg')} alt='' />
                    <img className={classes.row2img3} src={require('../../Asset/RediWatch.jpg')} alt='' />
                </div>
                <div className={classes.sect1row3}>
                    <p className={classes.colortxt}>Color</p>
                    <span className={classes.colors}>
                        <div className={classes.redcont}>
                            <img className={classes.red} src={require('../../Asset/Red.png')} alt='' />
                        </div>
                        <div className={classes.colorcont}>
                            <img className={classes.skyblue} src={require('../../Asset/Skyblue.png')} alt='' />
                        </div>
                        <div className={classes.colorcont}>
                            <img className={classes.goldenyellow} src={require('../../Asset/GoldenYellow.jpg')} alt='' />
                        </div>
                        <div className={classes.colorcont}>
                            <img className={classes.darkblue} src={require('../../Asset/Darkblue.png')} alt='' />
                        </div>
                        <div className={classes.colorcont}>
                            <img className={classes.teal} src={require('../../Asset/Teal.png')} alt='' />
                        </div>
                    </span>
                    <span className={classes.sizecont}>
                        <p className={classes.size}>Size</p>
                        <p className={classes.sizexl}>XL</p>
                        <p className={classes.sizexxl}>XXL</p>
                        <p className={classes.sizem}>M</p>
                    </span>

                </div>
                <div className={classes.qtycont}>
                    <p className={classes.qty}>QTY</p>
                    <div className={classes.qtycounter}>
                        <span className={classes.count} onClick={() => decreaseQty()} >-</span>
                        <span className={classes.counttxt}>{counter}</span>
                        <span className={classes.count} onClick={() => increaseQty()} >+</span>
                    </div>

                </div>

                <button className={classes.cartbutton}><span className={classes.cart}><IoIosCart size={28} /></span><span className={classes.carttxt1}>Add to Cart</span></button>

                <div className={classes.storecont}>
                    <span className={classes.sect1store}><FaStoreAlt size={28} /></span>
                    <p className={classes.sect1evax}>Evax Bex Electronics Store</p>
                </div>
            </div>
        </div>
    )
}

export default Section1