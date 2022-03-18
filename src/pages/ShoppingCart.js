import Header from "../components/header"
import RightComponents from "../components/RightComponents"
import LeftComponents from "../components/LeftComponents"
import { useEffect, useState } from "react"
import axios from "axios"

const ShoppingCart = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/bamzi/cart/")
      console.log(res)
      setProducts(res.data.response)
    }

    fetchData()
  }, [])

  return (
    <div className="font-poppins">
      <Header pryNav="user" secNav="user" />
      <div className="lg:flex my-16">
        <LeftComponents products={products} />
        <RightComponents />
      </div>
    </div>
  )
}

export default ShoppingCart
