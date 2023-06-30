import React from 'react'
import OpenTabIcon from '../icons/OpenTabIcon';
import SubHeading from './ui/SubHeading';
import ChipList from './ui/ChipList';

const ProjectDetails = ({ data }) => {
  return (
    <div className='flex flex-col gap-7'>

      <section className=''>
        <span className='flex flex-row gap-2 items-center'>
          <h1 className='text-3xl text-black/90 dark:text-white/90'>{data?.title}</h1>
          <a href={data.link}
            target='_blank'
            rel='noreferrer'>
            <OpenTabIcon />
          </a>
        </span>
        <p className='text-neutral-500'>{data?.startDate} - {data?.endDate}</p>
      </section>
      <section>
        <SubHeading title='Description' />
        <p className='text-sm text-black/90 dark:text-white mt-2 font-medium'>{data?.desc}</p>
      </section>

      {data?.skills?.length > 0 &&
        <section>
          <SubHeading title='Skills' />
          <ChipList data={data?.skills} />
        </section>
      }

      <section>
        <SubHeading title='Role' />
        <p className='text-sm text-black/90 dark:text-white mt-2'>{data?.role}</p>
      </section>

      {data?.features?.length > 0 &&
        < section >
          <SubHeading title='Features' subTitle='I developed' />

          <ul className='flex flex-row gap-2 flex-wrap mt-2'>
            {
              data?.features?.map(((item, idx) =>
                <li key={idx} className='text-black/90 dark:text-white text-sm'>{item}</li>
              ))
            }
          </ul>
        </section>
      }
    </div >
  )
}

export default ProjectDetails;