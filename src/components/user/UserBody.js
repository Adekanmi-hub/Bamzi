import React from "react"

const UserBody = props => {
  return (
    <div className="flex md:flex-row flex-col lg:px-16 lg:py-12 md:px-8 md:py-6">
      {props.children}
    </div>
  )
}

export default UserBody
