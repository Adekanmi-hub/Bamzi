import Header from "../components/header"
import LeftCompo from "../components/LeftCompo"
import RightCompo from "../components/RightCompo"

const WishList = () => {
  return (
    <div>
      <Header pryNav="user" secNav="user" />
      <div className="lg:flex bodyGray">
        <LeftCompo />
        <RightCompo />
      </div>
    </div>
  )
}

export default WishList
