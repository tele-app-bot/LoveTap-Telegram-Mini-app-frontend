'use client'
import { ArrowLeft } from '@/icons'

import Image from 'next/image'
import { useState } from 'react'
import { LEADERS } from '@/mock'
import { useRouter } from 'next/navigation'
import NextBgImage from 'next-bg-image'
import backgroundImage from '../../../public/images/profile-bg.png'

export const Leaders = () => {
  const [activeTagIdx, setActiveTabIdx] = useState(0)

  const router = useRouter()

  const renderPlaces = (index: number): string => {
    if (index === 0) {
      return '/images/first-leader.png'
    } else if (index === 1) {
      return '/images/second-leader.png'
    } else if (index === 2) {
      return '/images/thrid-leader.png'
    }
    return ''
  }

  return (
    <>
      <NextBgImage
        src={backgroundImage}
        className={` w-full min-h-screen relative `}
      >
        <div className='px-[18px]   pt-[16px] flex justify-between'>
          <button className='text-[#FCFCFC]'>
            <ArrowLeft />
          </button>
          <h1 className='text-[19px] text-[#FCFCFC] font-bold leading-[22.99px] text-center'>
            Leaderboard
          </h1>
          <div />
        </div>
        <div className=' z-[99] px-[18px] pt-[26px]'>
          <div className='flex relative w-full justify-between'>
            <div
              onClick={() => setActiveTabIdx(0)}
              className='w-1/3 text-[#FCFCFC] flex justify-center text-base font-medium leading-[19.2px] tracking-[-0.40799999237060547px] text-center'
            >
              Today
            </div>
            <div
              onClick={() => setActiveTabIdx(1)}
              className='w-1/3 text-[#FCFCFC] flex justify-center text-base font-medium leading-[19.2px] tracking-[-0.40799999237060547px] text-center'
            >
              Week
            </div>
            <div
              onClick={() => setActiveTabIdx(2)}
              className='w-1/3 text-[#FCFCFC] flex justify-center text-base font-medium leading-[19.2px] tracking-[-0.40799999237060547px] text-center'
            >
              Month
            </div>
            <div
              style={{
                left: `calc(${
                  activeTagIdx * 33 + (activeTagIdx === 3 - 1 ? 0 : 1)
                }%)`,
              }}
              className='w-1/3 transition-all duration-300 h-[45px] -translate-y-1/2 top-1/2 bg-[#ffffff1a] absolute  rounded-[30px]'
            />
          </div>
        </div>
        <div className='px-[18px] flex flex-col gap-y-2 pt-[37px]'>
          {LEADERS.map((user, index) => (
            <div
              onClick={() => router.push('/user/1')}
              key={index}
              className=' flex  justify-between items-center border rounded-[12px] border-solid border-[#FFFFFF42] py-2 px-4'
            >
              <div className='flex items-center'>
                <div className=' w-[23px] h-[23px] text-sm mr-[9px] text-white font-medium leading-[16.8px] tracking-[-0.40799999237060547px] text-center'>
                  {index < 3 ? (
                    <Image
                      src={renderPlaces(index)}
                      width={23}
                      height={23}
                      alt='first'
                    />
                  ) : (
                    index + 1
                  )}
                </div>
                <div className='flex items-center gap-x-3'>
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={32}
                    height={32}
                    className=' rounded-full'
                  />
                  <p className='text-sm font-medium text-[#FFFFFF] leading-[16.8px] tracking-[-0.40799999237060547px] text-left'>
                    {user.name}
                  </p>
                </div>
              </div>
              <p className='text-sm font-normal leading-[16.8px] tracking-[-0.40799999237060547px] text-right text-[#FFFFFF]'>
                {user.point} pts
              </p>
            </div>
          ))}
        </div>
      </NextBgImage>

      {/* <Image
        src="/images/tournoment-assent-image.png"
        width={92}
        height={165}
        alt="img"
        className="absolute z-5 right-0 top-[17px]"
      /> */}
    </>
  )
}
