import React from "react";

const AuthContent = (props) => {
    return (
      <div className="xl:w-1/2 lg:w-2/5 mt-10 lg:mt-0 px-4 flex flex-col lg:place-content-center space-y-2 md:px-24 lg:px-10">
        {props.children}
      </div>
    )
}

export default AuthContent