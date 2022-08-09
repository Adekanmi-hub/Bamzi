import React from 'react'
import classes from '../../Styles/Login.module.css'

export const Subhead = () => {
    return (
        <div>
            <div className={classes.subhead}>
                <img className={classes.subsec1} src={require('../../Asset/Phones.jpg')} alt="" />
                <img className={classes.subsec2} src={require('../../Asset/fashion.jpg')} alt="" />
                <img className={classes.subsec3} src={require('../../Asset/Cars.jpg')} alt="" />
                <img className={classes.subsec4} src={require('../../Asset/food.jpg')} alt="" />
            </div>
            <div className={classes.orders}>
                <p className={classes.order1}>Phones</p>
                <p className={classes.order2}>Fashion</p>
                <p className={classes.order3}>Cars</p>
                <p className={classes.order4}>Foods</p>
            </div>
        </div>
    )
}

export default Subhead