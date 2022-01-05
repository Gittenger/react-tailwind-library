import React from 'react'

const VideoSkeleton = ({}) => {
  const wrapper = 'lg:w-96 md:w-80 w-72'
  const bigBox = 'w-full md:h-48 h-36 bg-gray-200'
  const bottomBox = 'pt-2 flex flex-row justify-start items-center'
  const circleBox = 'grid place-content-center py-2 pr-2'
  const circle = 'rounded-full bg-gray-200 w-10 h-10'
  const rectanglesBox = 'flex flex-col items-start flex-grow space-y-2'
  const lineOne = 'w-11/12 h-5 bg-gray-200 mb-auto'
  const lineTwo = 'w-2/3 h-5 bg-gray-200'

  return (
    <div className={wrapper}>
      <div className={bigBox}></div>
      <div className={bottomBox}>
        <div className={circleBox}>
          <div className={circle}></div>
        </div>
        <div className={rectanglesBox}>
          <div className={lineOne}></div>
          <div className={lineTwo}></div>
        </div>
      </div>
    </div>
  )
}

export default VideoSkeleton
