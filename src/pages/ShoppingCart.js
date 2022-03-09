import Header from "../components/header"
import RightComponents from "../components/RightComponents"
import LeftComponents from "../components/LeftComponents"
const ShoppingCart = () => {
  return (
    <div className="font-poppins">
      <Header pryNav="user" secNav="user" />
      <div className="lg:flex my-16">
        <LeftComponents />
        <RightComponents />
      </div>
    </div>
  )
}

export default ShoppingCart
