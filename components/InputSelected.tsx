'use client'
import React, { useEffect, useRef, useState } from 'react'

interface InputProps {
    id:string,
    title:string,
    onChecked: (check:boolean)=>void,
}
export default function InputCheckbox({id,title,onChecked}:InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

  return (
     <div className='flex gap-2 w-full'>
                            <input 
                                ref={inputRef}
                                type="checkbox"
                                name={id}
                                onChange={e => {
                                    onChecked(e.target.checked)
                                }}
                                
                                />
                                <p 
                                className=' w-full'
                                onClick={()=>{
                                    if(inputRef.current){
                                        inputRef.current.click()
                                    }
                                }}>{title}</p>
                        </div>
   
  )
}

