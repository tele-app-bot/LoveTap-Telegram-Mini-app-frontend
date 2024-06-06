/* eslint-disable @next/next/no-img-element */
'use client'
import { ArrowLeft } from '@/icons'
import styles from './invite-friend.module.css'
import { UserItem } from './components'
import { INVITE_FRIEND } from '@/mock'
import { useRouter } from 'next/navigation'
import NextBgImage from 'next-bg-image'
import backgroundImage from '../../../public/images/profile-bg.png'
import Image from 'next/image'
export const InviteFriend = () => {
  const router = useRouter()

  return (
    <NextBgImage
      src={backgroundImage}
      className={` pb-[70px] w-full min-h-screen`}
    >
      <div className='px-[18px]   pt-[16px] flex justify-between'>
        <button
          onClick={() => router.push('/profile')}
          className='text-[#FCFCFC]'
        >
          <ArrowLeft />
        </button>
        <h1 className='text-[19px] text-[#FCFCFC] font-bold leading-[22.99px] text-center'>
          Invite a friend
        </h1>
        <div />
      </div>
      <p className=' text-[#FCFCFC] mt-6 text-base font-normal leading-[19.2px] tracking-[-0.40799999237060547px] text-center'>
        Earn points for inviting friends to play
      </p>
      <div className='flex justify-center pt-2'>
        <h1 className='  flex text-[19px] text-[#FCFCFC] font-bold leading-[22.99px] text-center'>
          LOVE
          <div
            className={`px-[14px] ml-[4px] text-sm font-medium leading-[22px] tracking-[-0.40799999237060547px] text-right text-[#FCFCFC] rotate-[-5deg] rounded-[20px] ${styles.tap} `}
          >
            Tap
          </div>
        </h1>
      </div>
      <div className='flex justify-center pt-10'>
        <div className='max-w-[229px] min-h-[72px]'>
          <Image
            alt='img'
            src={'/images/coins.png'}
            className='max-w-[229px]'
            width={229}
            height={72}
          />
        </div>
      </div>
      <div className='flex px-[18px] pt-[38px] flex-col gap-y-4'>
        {INVITE_FRIEND.map((user, index) => (
          <UserItem user={user} key={index} />
        ))}
      </div>
    </NextBgImage>
  )
}
