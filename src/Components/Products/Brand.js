import React from 'react'
import classes from '../../Styles/Products.module.css'


export const Brand = () => {
    return (
        <div className={classes.brandcont}>
            <p className={classes.brandtxt}>Brand</p>

            <div>
                <div className={classes.insignicont}>
                    <input type={'checkbox'} itemID='Insigni' />
                    <div className={classes.insignimain}>
                        <label className={classes.insigni} htmlFor='Insigni'>Insigni</label>
                        <span className={classes.insigniamount}>220</span><br />
                    </div>
                </div>
                <div className={classes.samsungcont}>
                    <input className={classes.samsunginput} type={'checkbox'} itemID='Samsung' />
                    <div className={classes.samsungmain}>
                        <label className={classes.samsung} htmlFor='Samsung'>Samsung</label>
                        <span className={classes.samsungamount}>120</span><br />
                    </div>
                </div>
                <div className={classes.applecont}>
                    <input type={'checkbox'} itemID='Apple' />
                    <div className={classes.applemain}>
                        <label className={classes.apple} htmlFor='Apple'>Apple</label>
                        <span className={classes.appleamount}>320</span><br />
                    </div>
                </div>
                <div className={classes.hpcont}>
                    <input type={'checkbox'} itemID='HP' />
                    <div className={classes.hpmain}>
                        <label className={classes.hp} htmlFor='HP'>HP</label>
                        <span className={classes.hpamount}>32</span><br />
                    </div>
                </div>
                <div className={classes.sonycont}>
                    <input type={'checkbox'} itemID='Sony' />
                    <div className={classes.sonymain}>
                        <label className={classes.sony} htmlFor='Sony'>Sony</label>
                        <span className={classes.sonyamount}>520</span><br />
                    </div>
                </div>
                <div className={classes.metracont}>
                    <input type={'checkbox'} itemID='Metra' />
                    <div className={classes.metramain}>
                        <label className={classes.metra} htmlFor='Metra'>Metra</label>
                        <span className={classes.metraamount}>55</span><br />
                    </div>
                </div>
                <div className={classes.dynecont}>
                    <input type={'checkbox'} itemID='Dyne' />
                    <div className={classes.dynemain}>
                        <label className={classes.dyne} htmlFor='Dyne'>Dyne</label>
                        <span className={classes.dyneamount}>120</span><br />
                    </div>
                </div>
                <div className={classes.lgcont}>
                    <input type={'checkbox'} itemID='LG' />
                    <div className={classes.lgmain}>
                        <label className={classes.lg} htmlFor='LG'>LG</label>
                        <span className={classes.lgamount}>99</span><br />
                    </div>
                </div>
                <div className={classes.canoncont}>
                    <input type={'checkbox'} itemID='Canon' />
                    <div className={classes.canonmain}>
                        <label className={classes.canon} htmlFor='Canon'>Canon</label>
                        <span className={classes.canonamount}>98</span><br />
                    </div>
                </div>
                <div className={classes.lenovocont}>
                    <input type={'checkbox'} itemID='Lenovo' />
                    <div className={classes.lenovomain}>
                        <label className={classes.lenovo} htmlFor='Lenovo'>Lenovo</label>
                        <span className={classes.lenovoamount}>670</span>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Brand