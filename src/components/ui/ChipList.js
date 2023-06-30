import React from 'react'

const ChipList = ({ data }) => {
  return (
    <ul className='flex flex-row gap-2 flex-wrap mt-2'>
      {
        data.map(((item, idx) =>
          <li key={idx} className='bg-neutral-800 dark:bg-white px-6 py-2 rounded-3xl text-sm text-white dark:text-black'>{item}</li>
        ))
      }
    </ul>
  )
}

export default ChipList;