'use client'
import React, { useEffect, useRef, useState } from 'react'

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
    const inputRef = useRef<HTMLInputElement>(null);

    const handlePClick = () => {
        if (inputRef.current) {
            inputRef.current.click(); // Trigger the click event on the input
        }
    };
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
                                                    onChangeForm({ ...form, choices: list });
                                                }
                                            } else {
                                                const list = form.choices.filter((item, i) => i !== index);
                                                onChangeForm({ ...form, choices: list });
                                            }
                                        }}
                                        
                                />
                                <p onClick={handlePClick}>{value}</p> {/* Click handler for the <p> tag */}
                        </div>
            })
         }
         <div className='flex flex-col gap-4'>
            <p>{'ข้อเสนอเเนะ หรือ เพิ่มเติม'}</p>
            <textarea onChange={(e)=>{
                onChangeForm({...form,answer: e.target.value})
            }} className='p-2 rounded-md text-slate-800' placeholder='your opinion...' />
         </div>
    </div>
  )
}
