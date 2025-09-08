import React from 'react'
import logo from './../assets/logo.svg'
import { ArrowBigLeft, ArrowDown, ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react'

const Header = () => {
    console.log(window.innerWidth)
  return (
    <div className='w-full bg-[#703d92] h-[6vh] px-3 items-center text-white flex justify-between'>
        {window.innerWidth <= 768 && 
        <div>
            <ArrowLeft/>
        </div>
        }
        <div className='items-center h-[100%] w-[calc(100%/3)] gap-[8px] flex justify-center'>
        <div className='flex gap-[6px] h-fit w-[100%] justify-center'>
            <h1 className='text-xl'>Home</h1>
            <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#fbb44a'}} viewBox="0 0 260 260" fill="none" width="26" height="26"><path fill="currentColor" d="M94.91 66.314c0-1.078.875-1.953 1.954-1.953h18.878c1.079 0 1.953.875 1.953 1.953v14.973a1.953 1.953 0 0 1-1.953 1.953H96.863a1.953 1.953 0 0 1-1.953-1.953V66.314ZM133.97 66.314c0-1.078.875-1.953 1.953-1.953h18.879c1.079 0 1.953.875 1.953 1.953v14.973a1.953 1.953 0 0 1-1.953 1.953h-18.879a1.953 1.953 0 0 1-1.953-1.953V66.314Z"></path><path fill="currentColor" d="M94.91 115.616v77.765l22.785 8.992v-86.757h16.275v77.765l22.785 8.992v-86.757h15.14c12.491 0 22.618-10.234 22.618-22.858V79.985h-22.618v12.773H80.422c-12.492 0-22.618 10.234-22.618 22.858v15.798h22.618v-15.798h14.489Z"></path><path fill="currentColor" fill-rule="evenodd" d="M130.122 20.75c-60.368 0-109.305 48.937-109.305 109.305 0 60.367 48.937 109.305 109.305 109.305 60.367 0 109.305-48.938 109.305-109.305 0-60.368-48.938-109.305-109.305-109.305ZM.943 130.055C.943 58.711 58.778.875 130.122.875c71.343 0 129.178 57.836 129.178 129.18 0 71.343-57.835 129.178-129.178 129.178C58.778 259.233.943 201.398.943 130.055Z" clip-rule="evenodd"></path></svg>
        </div>    
        </div>
        {window.innerWidth <= 568 && 
        <div>
            <ChevronDown/>
        </div>
        }
    </div>
  )
}

export default Header