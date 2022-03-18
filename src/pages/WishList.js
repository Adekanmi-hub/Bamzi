import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../components/header"
import LeftCompo from "../components/LeftCompo"
import RightCompo from "../components/RightCompo"

const WishList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/bamzi/wishlist/")
      setProducts(res.data.response)
    }

    fetchData()
  }, [])

  return (
    <div>
      <Header pryNav="user" secNav="user" />
      <div className="lg:flex bodyGray">
        <LeftCompo products={products} />
        <RightCompo />
      </div>
    </div>
  )
}

export default WishList
