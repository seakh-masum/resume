import React from 'react'

const SubHeading = ({ title, subTitle }) => {
  return (
    <h2 className='text-xs uppercase  text-neutral-600 dark:text-white/80'>{title} {subTitle && <span className='text-neutral-400'>({subTitle})</span>} </h2>
  )
}

export default SubHeading;