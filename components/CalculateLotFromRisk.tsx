'use client'
import React, { useEffect, useState } from 'react'
import TextInput from './TextInput'
import SaveButton from './SaveButton'

export default function CalculateRiskFromCash() {
    const [form,setForm] = useState({
        lostCash:30,
        entry:2000,
        stop:1990,
        lotResult:0.01,
    })
    const [result,setResult] = useState(0)
   
    return (
        <div className='flex flex-col gap-4 w-fit'>
            <TextInput title={'RISK your cash'} value={form.lostCash.toString()}  onChange={(e) => {
                    setForm({...form,lostCash:parseFloat(e.target.value)})
            }} />
            <TextInput title={'entry'} value={form.entry.toString()}  onChange={(e) => {
                setForm({...form,entry:parseFloat(e.target.value)})
            }} />
              <TextInput title={'stoploss'} value={form.stop.toString()}  onChange={(e) => {
                setForm({...form,stop:parseFloat(e.target.value)})
            }} />
           <SaveButton label='Calculate' onClick={()=>{
                let lossCash = form.lostCash;
                let rangeDollar = Math.abs(form.entry - form.stop);
                let lotResult = (lossCash*0.01)/rangeDollar;
                setResult(lotResult)
           }}/>
           <p> your lot size: {result}</p>
        </div>
    )
}
