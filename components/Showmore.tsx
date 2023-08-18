"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Showmoreprops } from '@/types'
import { CustomButton } from '.'
import { updateParams } from '@/utils'

const Showmore = ({pageNumber,isNext}:Showmoreprops) => {
    const router=useRouter()
    
    const handleNavigaton=()=>{
        const newLimit=(pageNumber+1)*10;
       const newPathName=updateParams("limit",`${newLimit}`)

       router.push(newPathName)
    }

  return (
    <div className='w-full flex-center gap-5 mt-10'>
        { !isNext && (
            <CustomButton
            title='Show more'
            btnType='button' 
            containerStyles='bg-primary-blue rounded-full 
            text-white'
            handleClick={handleNavigaton}/>
        )

        }
    </div>
  )
}

export default Showmore