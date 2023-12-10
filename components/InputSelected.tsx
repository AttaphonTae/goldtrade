'use client'
import React, { useEffect, useState } from 'react'

interface InputProps {
    formQuestion:FormQuestion,
    onChangeForm: (form:FormAnswer)=>void,
}
export default function InputCheckbox({formQuestion,onChangeForm}:InputProps) {
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
         {
            formQuestion.choices.map((value, index) =>{
                return <div className='flex gap-2'  key={formQuestion.question+'-radio-'+index}>
                            <input 
                                        type="checkbox"
                                        name={formQuestion.id}
                                        onChange={e => {
                                            if (e.target.checked) {
                                                console.log('add');
                                                if (!form.choices.includes(index)) {
                                                    const list = [...form.choices, index];
                                                    setForm({ ...form, choices: list });
                                                }
                                            } else {
                                                const list = form.choices.filter((item, i) => i !== index);
                                                setForm({ ...form, choices: list });
                                            }
                                        }}
                                        
                                />
                                <p>{value}</p>
                        </div>
            })
         }
         <div className='flex flex-col gap-4'>
            <p>{'ข้อเสนอเเนะ หรือ เพิ่มเติม'}</p>
            <textarea onChange={(e)=>{
                setForm({...form,answer: e.target.value})
            }} className='p-2 rounded-md text-slate-800' placeholder='your opinion...' />
         </div>
    </div>
  )
}
