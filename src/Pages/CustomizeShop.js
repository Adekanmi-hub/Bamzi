import React from 'react'
import Section1 from '../Components/Customize Shop/Section1'
import Section2 from '../Components/Customize Shop/Section2'
import Sidebar from '../Components/Customize Shop/Sidebar'
import classes from '../Styles/CustomizeShop.module.css'

export const CustomizeShop = () => {
    return (
        <div className={classes.dashboard}>
            <Sidebar />
            <div className={classes.dashboard2}>
                <div className={classes.sect}>
                    <Section1 />
                    <Section2 />
                </div>
            </div>
        </div>
    )
}

export default CustomizeShop