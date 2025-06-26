import React from 'react'
import SubHeading from '../ui/SubHeading';
import ChipList from '../ui/ChipList';
import List from '../ui/List';
import DialogTitle from '../ui/DialogTitle';
import { timestampToDate } from '../../helper/GlobalService';

const ProjectDetails = ({ data }) => {
  return (
    <div className='flex flex-col gap-7'>
      <section>
        <DialogTitle title={data?.name} link={data?.link} />
        <p className='text-neutral-500'>{timestampToDate(data?.startDate)} - {timestampToDate(data?.endDate)}</p>
      </section>
      <section>
        <SubHeading title='Description' />
        <p className='text-sm text-black/90 dark:text-white mt-2 font-medium'>{data?.description}</p>
      </section>

      {data?.usedSkills?.length > 0 &&
        <section>
          <SubHeading title='Skills' />
          <ChipList data={data?.usedSkills} />
        </section>
      }

      <section>
        <SubHeading title='Role' />
        <p className='text-sm text-black/90 dark:text-white mt-2'>{data?.role}</p>
      </section>

      {data?.tasks?.length > 0 &&
        < section >
          <SubHeading title='Task(s)' subTitle='I developed' />
          <List data={data?.tasks} />
        </section>
      }
    </div >
  )
}

export default ProjectDetails;