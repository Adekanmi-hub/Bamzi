import React from 'react'
import classes from '../../Styles/Description.module.css'

export const Section3 = () => {
    return (
        <div className={classes.section3}>
            <div className={classes.relatedproducts}>
                <p className={classes.sect3product}>Related Products</p>
                <img className={classes.sect3img3} src={require('../../Asset/Card-1 Apple Watch.png')} alt='' />
                <img className={classes.sect3img3} src={require('../../Asset/Card-1 Apple Watch.png')} alt='' />
            </div>
        </div>
    )
}

export default Section3