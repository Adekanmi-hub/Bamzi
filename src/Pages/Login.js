import classes from '../Styles/Login.module.css'
import Header from '../Components/Login/Header'
import Subhead from '../Components/Login/Subhead'
import Section1 from '../Components/Login/Section1'
import Section2 from '../Components/Login/Section2'
import Section3 from '../Components/Login/Section3'
import Section4 from '../Components/Login/Section4'
import Section5 from '../Components/Login/Section5'
import Footer from '../Components/Login/Footer'


const Login = () => {
    return (
        <div>
            <Header />
            <section>
                <Subhead />
                <Section1 />
                <Section2 />
                <Section3 />
                <hr className={classes.hor} />
                <Section4 />
                <Section5 />
            </section>
            <Footer />
        </div >
    )
}
export default Login