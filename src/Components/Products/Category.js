import React from 'react'
import classes from '../../Styles/Products.module.css'

export const Category = () => {
    return (
        <div>
            <div className={classes.slidercont}>
                <div className={classes.sliderrange}>
                    <p className={classes.slider}>Slider</p>
                    <p className={classes.slidertxt}>1.99-4098</p>
                </div>
                <input type={'range'} className={classes.range} />
            </div>

            <div className={classes.categorycont}>
                <p className={classes.categorytxt}>Category</p>

                <div className={classes.cellphonescont}>
                    <input className={classes.cellphonesinput} type={'checkbox'} itemID='Cell Phones' />
                    <div className={classes.cellphonesmain}>
                        <label className={classes.cellphones} htmlFor='Cell Phones'>Cell Phones</label>
                        <span className={classes.cellphonesamount}>1920</span><br />
                    </div>
                </div>

                <div className={classes.computerscont}>
                    <input className={classes.computersinput} type={'checkbox'} itemID='Computers & Tablets ' />
                    <div className={classes.computersmain}>
                        <label className={classes.computers} htmlFor='Computers & Tablets'>Computers & Tablets</label>
                        <span className={classes.computersamount}>1820</span><br />
                    </div>
                </div>

                <div className={classes.accessoriescont}>
                    <input className={classes.accessoriesinput} type={'checkbox'} itemID='Cell Phone Accessories' />
                    <div className={classes.accessoriesmain}>
                        <label className={classes.accessories} htmlFor='Cell Phone Accessories'>Cell Phone Accessories</label>
                        <span className={classes.accessoriesamount}>462</span><br />
                    </div>
                </div>

                <div className={classes.appliancescont}>
                    <input className={classes.appliancesinput} type={'checkbox'} itemID='Appliances' />
                    <div className={classes.appliancesmain}>
                        <label className={classes.appliances} htmlFor='Appliances'>Appliances</label>
                        <span className={classes.appliancesamount}>6556</span><br />
                    </div>
                </div>

                <div className={classes.audiocont}>
                    <input className={classes.audioinput} type={'checkbox'} itemID='Audio' />
                    <div className={classes.audiomain}>
                        <label className={classes.audio} htmlFor='Audio'>Audio</label>
                        <span className={classes.audioamount}>120</span><br />
                    </div>
                </div>

                <div className={classes.iphonecont}>
                    <input className={classes.iphoneinput} type={'checkbox'} itemID='iPhone Accessories' />
                    <div className={classes.iphonemain}>
                        <label className={classes.iphone} htmlFor='iPhone Accessories'>iPhone Accessories</label>
                        <span className={classes.iphoneamount}>353</span><br />
                    </div>
                </div>

                <div className={classes.camerascont}>
                    <input className={classes.camerasinput} type={'checkbox'} itemID='Cameras & Camcorders' />
                    <div className={classes.camerasmain}>
                        <label className={classes.cameras} htmlFor='Cameras & Camcorders'>Cameras & Camcorders</label>
                        <span className={classes.camerasamount}>45</span><br />
                    </div>
                </div>

                <div className={classes.casescont}>
                    <input className={classes.casesinput} type={'checkbox'} itemID='iPhone Cases & Clips' />
                    <div className={classes.casesmain}>
                        <label className={classes.cases} htmlFor='iPhone Cases & Clips'>iPhone Cases & Clips</label>
                        <span className={classes.casesamount}>458</span><br />
                    </div>
                </div>

                <div className={classes.tvcont}>
                    <input className={classes.tvinput} type={'checkbox'} itemID='TV & Home Theater' />
                    <div className={classes.tvmain}>
                        <label className={classes.tv} htmlFor='TV & Home Theater'>TV & Home Theater</label>
                        <span className={classes.tvamount}>55</span><br />
                    </div>
                </div>

                <div className={classes.kitchencont}>
                    <input className={classes.kitcheninput} type={'checkbox'} itemID='Small Kitchen Appliances' />
                    <div className={classes.kitchenmain}>
                        <label className={classes.kitchen} htmlFor='Small Kitchen Appliances'>Small Kitchen Appliances</label>
                        <span className={classes.kitchenamount}>10</span><br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category