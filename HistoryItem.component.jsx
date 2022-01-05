import React from 'react'
import { Link } from 'react-router-dom/'

import images from '../../assets/img-index'
// asset dependencies -- star, X, history

const HistoryItem = ({ linkTo = '/' }) => {
  const {
    svg: { History, Star, XIcon },
  } = images
  const wrapperStyles =
    'rounded-lg  p-6 flex items-center bg-gray-100 group-hover:bg-green-400 transition-colors'
  const linkStyles = 'group'
  const svgStyles = 'fill-current text-gray-800 w-6 h-6'

  const groupOne = 'flex space-x-3 items-center mr-auto'
  const groupTwo = 'flex space-x-1 items-center'

  return (
    <Link className={linkStyles} to={linkTo}>
      <div className={wrapperStyles}>
        <div className={groupOne}>
          <History className={svgStyles} />
          <h1>History Item</h1>
        </div>

        <div className={groupTwo}>
          <Star className={svgStyles} />
          <XIcon className={svgStyles} />
        </div>
      </div>
    </Link>
  )
}

export default HistoryItem
