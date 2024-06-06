'use client'
/* eslint-disable react/no-unescaped-entities */
import styles from './alert.module.css'
import { Button } from '@/common'
import { Props } from './types'

export const AlertModal = ({ open, close }: Props) => {
  const continueHandle = () => {
    close()
  }

  return (
    <>
      <div
        onClick={close}
        className={` ${
          !open ? 'hidden' : ''
        }  w-full fixed top-0 flex justify-center items-center left-0 z-[9999] h-screen ${
          styles.modal_overview
        } `}
      />
      <div
        className={` ${!open ? 'hidden' : ''}  ${
          styles.modal_bg
        } w-[339px]  fixed  rounded-[20px] -translate-y-1/2  top-1/2 -translate-x-1/2 left-1/2 z-[999999] h-auto py-6`}
      >
        <h1 className='text-[22px] mt-4 font-bold leading-[30.8px] text-center text-[#FCFCFC]'>
          You must select TOP PICK
        </h1>
        <div className='px-[18px] mt-8'>
          <Button onClick={continueHandle}>Continue</Button>
        </div>
      </div>
    </>
  )
}
