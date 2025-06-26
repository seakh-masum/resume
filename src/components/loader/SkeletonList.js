import React from 'react'
import SkeletonLine from './SkeletonLine'

const SkeletonList = () => {
  return (
    <div className='flex flex-col gap-3'>
      <SkeletonLine width='72' />
      <SkeletonLine width='56' />
      <SkeletonLine width='64' />
      <SkeletonLine width='72' />
      <SkeletonLine width='56' />
    </div>
  )
}

export default SkeletonList