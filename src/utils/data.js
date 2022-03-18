export const data = [
  {
    _id: "1",
    image: require("../assets/apple-watch-img01.png"),
    title: "Apple Watch Series 4",
    price: 149,
    brand: "Apple",
    category: "Fashion",
    rating: 4.4,
    intro: "Redesigned from scratch and completely revised.",
  },
  {
    _id: "2",
    image: require("../assets/hp-desktop-img01.jpg"),
    title: "HP Maxi Desktop",
    price: 1399,
    brand: "HP",
    category: "Computing",
    rating: 3.4,
    intro: "High end desktop with 32GB RAM.",
  },
  {
    _id: "3",
    image: require("../assets/apple-pods-img01.png"),
    title: "Apple Pods wireless 2.0",
    price: 189,
    brand: "Apple",
    category: "Phone Accessories",
    rating: 5.0,
    intro: "Noise cancellation at it's best.",
  },
  {
    _id: "4",
    image: require("../assets/apple-phone-img01.png"),
    title: "iPhone X 200GB iOS 14",
    price: 399,
    brand: "Apple",
    category: "Phone & Tablets",
    rating: 4.4,
    intro: "Latest installment of the iPhone family.",
  },
  {
    _id: "5",
    image: require("../assets/apple-watch-img01.png"),
    title: "Apple Watch Series 3",
    brand: "Apple",
    category: "Fashion",
    price: 129,
    rating: 4.1,
    intro: "Never miss a beat when it comes to your health.",
  },
  {
    _id: "6",
    image: require("../assets/xiaomi-laptop-img01.jpg"),
    title: "Xiaomi Notebook Pro",
    brand: "Xiaomi",
    category: "Computing",
    price: 399,
    rating: 4.4,
    intro: "Latest installment of the Xiaomi Notebook family.",
  },
  {
    _id: "7",
    image: require("../assets/apple-phone-img01.png"),
    title: "iPhone XIV",
    brand: "Apple",
    category: "Phone & Tablets",
    price: 399,
    rating: 4.4,
    intro: "Latest installment of the iPhone family.",
  },
  {
    _id: "8",
    image: require("../assets/apple-phone-img01.png"),
    title: "iPhone XIV",
    brand: "Apple",
    category: "Phone & Tablets",
    price: 399,
    rating: 4.4,
    intro: "Latest installment of the iPhone family.",
  },
]

export const radio = [
  {
    id: 0,
    name: "price-range",
    label: "under $10",
    value: "under $10",
  },
  {
    id: 1,
    name: "price-range",
    label: "$10 - $100",
    value: "$10 - $100",
  },
  {
    id: 2,
    name: "price-range",
    label: "$100 - $500",
    value: "$100 - $500",
  },
  {
    id: 3,
    name: "price-range",
    label: "more than $500",
    value: "more than $500",
  },
  {
    id: 4,
    name: "price-range",
    label: "All",
    value: "",
  },
]

export const checkboxBrandData = [
  {
    id: 0,
    name: "apple",
    label: "Apple",
    value: "Apple",
  },
  {
    id: 1,
    name: "canon",
    label: "Canon",
    value: "Canon",
  },
  {
    id: 2,
    name: "hp",
    label: "HP",
    value: "HP",
  },
  {
    id: 3,
    name: "lg",
    label: "LG",
    value: "LG",
  },
  {
    id: 4,
    name: "samsung",
    label: "Samsung",
    value: "Samsung",
  },
  {
    id: 5,
    name: "sony",
    label: "Sony",
    value: "Sony",
  },
  {
    id: 6,
    name: "xiaomi",
    label: "Xiaomi",
    value: "Xiaomi",
  },
]

export const checkboxCategoryData = [
  {
    id: 0,
    name: "home-and-office",
    label: "Home & Office",
    value: "Home & Office",
  },
  {
    id: 1,
    name: "phones-and-tablets",
    label: "Phones & Tablets",
    value: "Phones & Tablets",
  },
  {
    id: 2,
    name: "phone-accesories",
    label: "Phone Accessories",
    value: "Phone Accessories",
  },
  {
    id: 3,
    name: "computing",
    label: "Computing",
    value: "Computing",
  },
  {
    id: 4,
    name: "electronics",
    label: "Electronics",
    value: "Electronics",
  },
  {
    id: 5,
    name: "fashion",
    label: "Fashion",
    value: "Fashion",
  },
  {
    id: 6,
    name: "gaming",
    label: "Gaming",
    value: "Gaming",
  },
]

export const orders = [
  {
    id: 1,
    product: {
      img: require("../assets/apple-watch-img01.png"),
      title: "Sanda Smart Watch Waterproof IP65 Pedometer",
      price: 399.99,
      qty: 1,
      color: "red",
      size: "XL",
    },
    statusMsg: "Shipping in Progress",
    date: "3/12/2020",
  },
  {
    id: 2,
    product: {
      img: require("../assets/apple-watch-img02.png"),
      title: "Sanda Smart Watch Waterproof IP65 Pedometer",
      price: 399.99,
      qty: 1,
      color: "blue",
      size: "XL",
    },
    statusMsg: "Shipping in Progress",
    date: "3/12/2020",
  },
]

export const salesData = [
  {
    _id: 1,
    product: {
      img: require("../assets/apple-watch-img01.png"),
      title: "iPhone wrist band + free Pouch",
    },
    options: {
      color: "red",
      size: "XL",
    },
    shipping: {
      customer: "Omolola Daniel",
      address: "",
    },
    qty: 4,
    price: 150,
    status: "Pending",
    date: "3/12/2020",
  },
  {
    _id: 2,
    product: {
      img: require("../assets/apple-phone-img01.png"),
      title: "iPhone X 6GB RAM",
    },
    options: {
      ram: 6,
      size: "XL",
    },
    shipping: {
      customer: "Sarah Adebayo",
      address: "",
    },
    qty: 1,
    price: 1500,
    status: "Pending",
    date: "3/12/2020",
  },
  {
    _id: 3,
    product: {
      img: require("../assets/apple-watch-img02.png"),
      title: "iPhone wrist band + free Pouch",
    },
    options: {
      color: "blue",
      size: "XL",
    },
    shipping: {
      customer: "Omolola Daniel",
      address: "",
    },
    qty: 4,
    price: 150,
    status: "Pending",
    date: "3/12/2020",
  },
  {
    _id: 4,
    product: {
      img: require("../assets/apple-watch-img03.png"),
      title: "iPhone wrist band + free Pouch",
    },
    options: {
      color: "red",
      size: "XL",
    },
    shipping: {
      customer: "Omolola Daniel",
      address: "",
    },
    qty: 4,
    price: 150,
    status: "Error",
    date: "3/12/2020",
  },
]

export const salesHistoryData = [
  {
    _id: 1,
    product: {
      title: "Wrist watch and free pouch + warranty",
    },
    transaction_id: "S230Pn00956881",
    price: 1500,
    status: "Delivered",
    buyers_info: "Omolola Daniel",
    qty: 4,
    date: "3/12/2020",
  },
  {
    _id: 2,
    product: {
      title: "Wrist watch and free pouch + warranty",
    },
    transaction_id: "S230Pn00956881",
    price: -1500,
    status: "Refunded",
    buyers_info: "Omolola Daniel",
    qty: 4,
    date: "3/12/2020",
  },
  {
    _id: 3,
    product: {
      title: "Wrist watch and free pouch + warranty",
    },
    transaction_id: "S230Pn00956881",
    price: 1500,
    status: "Delivered",
    buyers_info: "Omolola Daniel",
    qty: 4,
    date: "3/12/2020",
  },
  {
    _id: 4,
    product: {
      title: "Wrist watch and free pouch + warranty",
    },
    transaction_id: "S230Pn00956881",
    price: 1500,
    status: "Delivered",
    buyers_info: "Omolola Daniel",
    qty: 4,
    date: "3/12/2020",
  },
]

export const tickets = [
  {
    _id: 1,
    number: 4231852,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    _id: 2,
    number: 5641310,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    _id: 3,
    number: 856086,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
]

export const latestSales = [
  {
    _id: 1,
    product: {
      name: "iPhone X 6GB RAM",
      image: require("../assets/apple-phone-img01.png"),
      quantity: 6,
      price: 1500,
    },
    timeOfSale: "30mins ago",
  },
  {
    _id: 2,
    product: {
      name: "iWatch X + Free Pouch and Extra Case",
      image: require("../assets/apple-watch-img01.png"),
      quantity: 1,
      price: 1500,
    },
    timeOfSale: "2hrs ago",
  },
]

export const colors = [
  {
    value: "black",
    label: "Black",
  },
  {
    value: "blue",
    label: "Blue",
  },
  {
    value: "brown",
    label: "Brown",
  },
  {
    value: "green",
    label: "Green",
  },
  {
    value: "grey",
    label: "Grey",
  },
  {
    value: "orange",
    label: "Orange",
  },
  {
    value: "pink",
    label: "Pink",
  },
  {
    value: "purple",
    label: "Purple",
  },
  {
    value: "red",
    label: "Red",
  },
  {
    value: "white",
    label: "White",
  },
  {
    value: "yellow",
    label: "Yellow",
  },
]

export const ram = [
  {
    value: "1GB",
    label: "1GB",
  },
  {
    value: "2GB",
    label: "2GB",
  },
  {
    value: "4GB",
    label: "4GB",
  },
  {
    value: "8GB",
    label: "8GB",
  },
  {
    value: "16GB",
    label: "16GB",
  },
  {
    value: "32GB",
    label: "32GB",
  },
  {
    value: "64",
    label: "64GB",
  },
]

export const sizes = [
  {
    value: "S",
    label: "S",
  },
  {
    value: "M",
    label: "M",
  },
  {
    value: "L",
    label: "L",
  },
  {
    value: "XL",
    label: "XL",
  },
  {
    value: "XXL",
    label: "XXL",
  },
]
