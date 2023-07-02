import React from 'react';
import OpenTabIcon from '../icons/OpenTabIcon';
import SubHeading from '../ui/SubHeading';
import ChipList from '../ui/ChipList';
import List from '../ui/List';

const SkillDetails = ({ data }) => {
  return (
    <div className='flex flex-col gap-7'>
      <section className=''>
        <span className='flex flex-row gap-2 items-center'>
          <h1 className='text-3xl text-black/90 dark:text-white/90'>{data?.name}</h1>
          <a href={data.link}
            target='_blank'
            rel='noreferrer'>
            <OpenTabIcon />
          </a>
        </span>
        <p className='text-neutral-500'>{data?.description}</p>
      </section>

      <section className='flex flex-row items-start'>
        <div className='basis-1/2'>
          <SubHeading title='My Level' />
          <ChipList data={[data?.level]} />
        </div>

        <div className='basis-1/2'>
          <SubHeading title='Hands on Experience' />
          <p className='text-lg text-black dark:text-white mt-2'>{data.experience} years</p>
        </div>
      </section>

      {data?.features?.length > 0 &&
        <section>
          <SubHeading title='Features' subTitle='I Known' />
          <List data={data?.features} />
        </section>
      }

      {data?.features?.length > 0 &&
        <section>
          <SubHeading title='Features' subTitle='I Known' />
          <List data={data?.features} />
        </section>
      }

      {data?.features?.length > 0 &&
        <section>
          <SubHeading title='Features' subTitle='I Known' />
          <List data={data?.features} />
        </section>
      }


      {data?.projects?.length > 0 &&
        <section>
          <SubHeading title='Projects' subTitle='Using the Skill' />
          <ChipList data={data?.projects} />
        </section>
      }
    </div >
  )
}

export default SkillDetails;