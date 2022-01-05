import React from 'react'

const IconListItem = ({
  imgSrc,
  altText,
  textContent,
  orientation,
  count,
  countBubble,
}) => {
  const groupStyles = `flex w-full ${
    orientation === 'right' ? 'flex-row-reverse' : 'flex-row'
  }`
  const iconStyles = 'w-6 h-6'
  const textStyles = `text-md flex items-center justify-center ${
    orientation === 'right' ? 'mr-3 flex-row-reverse' : 'ml-3'
  }`
  const bubbleStyles = `p-1 rounded text-xs bg-gray-600 text-gray-50 dark:bg-gray-300 dark:text-gray-700 dark:font-semibold ${
    orientation === 'right' ? 'mr-4' : 'ml-4'
  }`

  return (
    <div className={groupStyles}>
      <img className={iconStyles} src={imgSrc} alt={altText} />
      <p className={textStyles}>
        {count && count + ' '}
        {textContent}
        {countBubble && <span className={bubbleStyles}>{countBubble}</span>}
      </p>
    </div>
  )
}

export default IconListItem
