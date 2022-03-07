import Header from "../components/header";
import LeftCompo from "../components/pages/LeftCompo";
import RightCompo from "../components/pages/RightCompo";

const WishList = () => {
  return (
    <div>
      <Header items />
      <div className="lg:flex bodyGray">
        <LeftCompo />
        <RightCompo />
      </div>
    </div>
  )
}

export default WishList;
