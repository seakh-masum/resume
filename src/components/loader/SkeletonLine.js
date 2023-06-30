import React from 'react'

const SkeletonLine = ({ width }) => {
  return (
    <div className={`bg-neutral-200 dark:bg-neutral-800 h-4 rounded-xl animate-pulse w-${width}`}></div>
  )
}

export default SkeletonLine