import React from "react";

const AuthBody = (props) => {
    return (
      <div className="lg:px-16">
        <div className="mt-6 py-4 lg:py-0 lg:-ml-24 xl:-ml-48 xl:pl-32 lg:px-0 lg:pl-32 lg:bg-exclusion bg-contain bg-no-repeat bg-left flex flex-col-reverse lg:flex-row lg:h-[85vh] lg:space-x-4">
          {props.children}
        </div>
      </div>
    )
}

export default AuthBody