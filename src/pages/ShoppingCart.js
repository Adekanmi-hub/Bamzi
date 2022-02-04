import Header from "../components/pages/Header";
import RightComponents from "../components/pages/RightComponents";
import LeftComponents from "../components/pages/LeftComponents";
const ShoppingCart = () => {
    return ( 
        <div className="font-poppins">
            <Header />
            <div className="lg:flex">
            <LeftComponents />
            <RightComponents />
            </div>
        </div>
     );
}
 
export default ShoppingCart;