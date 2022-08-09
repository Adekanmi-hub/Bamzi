import Sidebar from '../Components/Dashboard/Sidebar'
import Section1 from '../Components/Dashboard/Section1'
import Section2 from '../Components/Dashboard/Section2'
import Section3 from '../Components/Dashboard/Section3'
import Section4 from '../Components/Dashboard/Section4'
import classes from '../Styles/Dashboard.module.css'

const Dashboard = () => {
    return (
        <div className={classes.dashboard}>
            <Sidebar />
            <div className={classes.dashboard2}>
                <div className={classes.sect}>
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                </div>
            </div>
        </div>
    )
}
export default Dashboard