'use client'
import React, { useEffect, useState } from 'react'

interface InputProps {
    formQuestion:FormQuestion,
    onChangeForm: (form:FormAnswer)=>void,
}
export default function InputTextField({formQuestion,onChangeForm}:InputProps) {
    const [form,setForm] = useState<FormAnswer>({
        id:formQuestion.id,
        choices:[],
        answer:'',
    })
    useEffect(()=>{
        onChangeForm(form)
    },[form])
  return (
    <div className='p-2 flex flex-col gap-2'>
         <p>{formQuestion.question}</p>
         
         <div className='flex flex-col gap-4'>
       
            <textarea onChange={(e)=>{
                setForm({...form,answer: e.target.value})
            }} className='p-2 rounded-md text-slate-800' placeholder='your opinion...' />
         </div>
    </div>
  )
}
