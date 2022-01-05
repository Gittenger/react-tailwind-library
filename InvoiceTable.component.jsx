import React, { useEffect } from 'react'
import { Link } from 'react-router-dom/'

const InvoiceTable = ({ tableData }) => {
  const wrapperStyles = 'grid grid-cols-3 col-span-full'
  const linkStyles =
    'underline text-blue-600 hover:text-blue-400 visited:text-purple-600'
  const textStyles = `capitalize`
  const costStyles = 'mx-auto'
  const statusStyles = 'justify-self-end text-right capitalize'

  useEffect(() => {
    console.log(tableData)
  })

  return (
    <div className="grid grid-cols-3">
      {tableData.map(({ textContent, linkTo, cost, status }, i) => (
        <div className={wrapperStyles}>
          <p className={textStyles}>
            {linkTo ? (
              <Link to={linkTo} className={linkStyles}>
                {textContent}
              </Link>
            ) : (
              textContent
            )}
          </p>

          <p className={costStyles}>{cost}</p>

          <p
            className={`${statusStyles} + ${
              status.code === 'warn'
                ? 'text-red-700'
                : status.code === 'pending'
                ? 'text-gray-700 italic'
                : status.code === 'paid'
                ? 'text-green-600'
                : 'text-gray-700'
            }`}
          >
            {status.text}
          </p>
        </div>
      ))}
    </div>
  )
}

export default InvoiceTable
