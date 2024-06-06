import Image from 'next/image'
import styles from './second-step.module.css'
import { DollorIcon } from '@/icons'
import { userStore } from "../../../../stores/store"
export const SecondStep = () => {
  const point = userStore((state) => state.point);
  return (
    <div className='h-full'>
      <div className='flex justify-center pt-8'>
        <h1 className='flex text-[19px] text-[#FCFCFC] font-bold leading-[22.99px] text-center'>
          Welcome to LOVE
          <div
            className={`px-[14px] ml-[4px] text-sm font-medium leading-[22px] tracking-[-0.40799999237060547px] text-right text-[#FCFCFC] rotate-[-5deg] rounded-[20px] ${styles.tap} `}
          >
            Tap
          </div>
        </h1>
      </div>
      <div className='px-[100px]'>
        <div className='py-[6px] my-6 gap-x-[6px] rounded-[8px] flex justify-center  items-center  bg-[#ffffff2e] w-full'>
          <p className='text-[14px] font-normal text-[#FCFCFC] leading-[19.2px] tracking-[-0.40799999237060547px] text-left'>
            Your total points:{' '}
            <span className='font-[700] text-[15px]'>{point}</span>
          </p>
          <div className='w-[20px] h-[20px] flex justify-center items-center rounded-full bg-[#FFBD3D]'>
            <DollorIcon className='w-[6px] h-[11px]' />
          </div>
        </div>
      </div>
      <div className='pt-[3px] flex justify-center '>
        <div className='w-[374px] h-[284px] '>
          <Image
            src={'/images/step-2-img.png'}
            width={374}
            height={284}
            alt='img'
          />
        </div>
      </div>
      <div className='px-[18px] w-full'>
        <div className='py-[21px] px-[13px]  border-[1.5px] border-solid border-[#FFFFFF80] rounded-[20px] mt-6'>
          <p className=' text-[#FCFCFC] text-base font-normal leading-[22px] tracking-[-0.40799999237060547px] text-left'>
            Get points for voting and get points when you win a bet. Also get
            points for inviting friends to play, joining the Telegram group,
            following on Twitter, etc.
          </p>
        </div>
      </div>
    </div>
  )
}
