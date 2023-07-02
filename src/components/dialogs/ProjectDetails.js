import React from 'react'
import SubHeading from '../ui/SubHeading';
import ChipList from '../ui/ChipList';
import List from '../ui/List';
import DialogTitle from '../ui/DialogTitle';

const ProjectDetails = ({ data }) => {
  return (
    <div className='flex flex-col gap-7'>
      <section>
        <DialogTitle title={data?.title} link={data?.link} />
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
          <List data={data?.features} />
        </section>
      }
    </div >
  )
}

export default ProjectDetails;