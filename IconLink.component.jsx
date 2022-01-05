import React from 'react'
import { Link } from 'react-router-dom'

const IconLink = ({
  border,
  SvgComponent,
  background,
  bgTransparent,
  to = '/',
  textContent,
  staticImg,
}) => {
  let wrapperStyles =
    'group flex flex-col justify-center items-center transition-colors '

  let iconStyles = 'w-8 h-8 fill-current '

  let textStyles = `group-hover:text-gray-900 dark:group-hover:text-gray-100 ${
    bgTransparent
      ? 'text-gray-900 dark:text-gray-50'
      : 'text-gray-100 dark:text-gray-900'
  }`

  let staticWrapperStyles = 'w-12 h-12 flex justify-center items-center'

  let staticImgStyles = 'w-11/12'

  if (background) {
    wrapperStyles += `w-28 h-28 hover:bg-blue-300  dark:hover:bg-black ${
      bgTransparent ? 'bg-transparent' : 'bg-black dark:bg-blue-200'
    }`
    iconStyles +=
      'text-gray-200 group-hover:text-green-800 dark:text-green-800 dark:group-hover:text-gray-200'
  } else {
    wrapperStyles += 'w-8 h-8 bg-transparent'
    iconStyles += 'text-black group-hover:text-green-800 dark:text-gray-50'
  }

  return (
    <Link
      to={{
        pathname: to,
      }}
      target={to.startsWith('http') ? '_blank' : ''}
    >
      {/* Wrapper -- background prop sets background ON, border prop sets shape, change colors in CSS */}
      {/* Set bgTransparent to have transparent background with hover effect */}
      <div
        className={`${wrapperStyles} ${
          border === 'circle'
            ? 'rounded-full'
            : border === 'sharp'
            ? 'rounded-none'
            : 'rounded'
        }`}
      >
        {/* Image -- static IMG or dynamic SVG */}
        {!staticImg ? (
          <SvgComponent className={iconStyles} />
        ) : (
          <div className={staticWrapperStyles}>
            <img src={staticImg} className={staticImgStyles} alt="" />
          </div>
        )}
        {textContent && <p className={textStyles}>{textContent}</p>}
      </div>
    </Link>
  )
}

export default IconLink
