import Head from '../Components/Prelaunch/Head'
import Section1 from '../Components/Prelaunch/Section1'
import Section2 from '../Components/Prelaunch/Section2'
import classes from '../Styles/Prelaunch.module.css'

import styled from 'styled-components'
const StyledBody = styled.div`
background: #E9F0FF;
background - size: cover;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
`;

const Prelaunch = () => {
    return (
        <StyledBody>
            <div>
                <div className={classes.container1}>
                    <Head />

                    <div className={classes.flexcont}>
                        <div className={classes.main}>
                            < Section1 />
                            <Section2 />
                        </div>

                        <div className={classes.imgast}>
                            <img src={(require('../Asset/assets.png'))} width="350px" height="300px" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </StyledBody>
    )
}

export default Prelaunch