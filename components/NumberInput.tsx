'use client'
import React from 'react'
interface InputProps {
    title: string,
    value?:number,

    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

function CustomInput({
    title,
    value,
    onChange,
}: InputProps) {
    return (
        <div className='flex items-center gap-2'>
            <p className='font-medium uppercase'>{title} :</p>
            <input
                type='number'
                value={value}
                className='border border-slate-200 rounded w-24 text-orange-400 px-2 font-bold'
                onChange={onChange} // Pass the onChange prop to the input field
            />
        </div>
    )
}

export default CustomInput