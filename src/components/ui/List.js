import React from 'react'

const List = ({ data }) => {
  return (
    <ul className='flex flex-col gap-2 mt-2 ml-6'>
      {
        data?.map(((item, idx) =>
          <li key={idx} className='text-neutral-700 dark:text-neutral-200 text-sm list-disc'>{item}</li>
        ))
      }
    </ul>
  )
}

export default List