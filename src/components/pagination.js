import React from "react"

const Pagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  paginate,
  minPageNumberLimit,
  maxPageNumberLimit,
  prevPage,
  nextPage,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="mt-10 flex items-center justify-center">
      <button
        className="p-2.5 border-2 border-primary"
        onClick={prevPage}
        disabled={currentPage === pageNumbers[0] ? true : false}
      >
        Prev
      </button>
      {pageNumbers.map(number => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li
              key={number}
              id={number}
              className="py-2.5 px-4 list-none border-2 border-primary cursor-pointer active:bg-primary active:text-white"
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          )
        } else {
          return null
        }
      })}
      <button
        className="p-2.5 border-2 border-primary"
        onClick={nextPage}
        disabled={currentPage === pageNumbers.length}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
