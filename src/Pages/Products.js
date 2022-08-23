import React from 'react'
import Bottom from '../Components/Products/Bottom';
import Brand from '../Components/Products/Brand';
import Category from '../Components/Products/Category';
import Items from '../Components/Products/Items';
import Multirange from '../Components/Products/Multirange';
import Rating from '../Components/Products/Rating';
import Section1 from '../Components/Products/Section1';
import Section2 from '../Components/Products/Section2';
import Sidebar from '../Components/Products/Sidebar';
import classes from '../Styles/Products.module.css';

export const Products = () => {
    return (
        <div>
            <div className={classes.dashboard}>
                <Sidebar />
                <div className={classes.dashboard2}>
                    <div className={classes.sect}>
                        <Section1 />
                        <Section2 />
                        <div className={classes.main}>
                            <div className={classes.main2}>
                                <div className={classes.maincontainer}>
                                    <div className={classes.subcontainer}>
                                        <Multirange />
                                        <Category />
                                        <Brand />
                                        <Rating />
                                    </div>
                                </div>
                                <button className={classes.categorybtn}>CLEAR ALL FILTERS</button>
                            </div>
                            <Items />
                        </div>
                        <Bottom />
                    </div>
                </div>
            </div >
        </div >
    )
};

export default Products