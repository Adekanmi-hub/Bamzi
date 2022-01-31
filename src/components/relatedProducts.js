import React from "react"

import Card from "./card"

export default function RelatedProducts() {
  const related = [
    {
      _id: "1",
      image: require("../assets/apple-pods-img01.png"),
      title: "Apple Pods Series Redtooth 5",
      price: 239,
      rating: 4.1,
      intro: "Redesigned from scratch and completely revised.",
    },
    {
      _id: "2",
      image: require("../assets/apple-phone-img01.png"),
      title: "iPhone XIV",
      price: 399,
      rating: 4.4,
      intro: "Latest installment of the iPhone family.",
    },
  ]

  return (
    <div className="container mt-5 px-8 lg:px-16">
      <h5 className="font-semibold text-lg mb-4">Related Products</h5>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center">
        {related.map(item => (
          <div key={item._id}>
            <Card product={item} btnColor="bg-primary" />
          </div>
        ))}
      </div>
    </div>
  )
}
