'use client'
import React, { useEffect, useState } from 'react'
import TextInput from './TextInput'
import SaveButton from './SaveButton'

export default function DreamScene() {
    const [form,setForm] = useState({
        risk:3,
        rr:2,
        budget:100,
        winrate:80,
        totaltrade:100
    })
    const [result,setResult] = useState(0)
    useEffect(()=>{

        let lossCash = 30;
        let rangeDollar = 2016.73 - 2011.94;
        let lotResult = (lossCash*0.01)/rangeDollar;
        console.log(lotResult);
    },[])
    return (
        <div className='flex flex-col gap-4 w-fit'>
            <TextInput title={'RISK percentage'} value={form.risk.toString()}  onChange={(e) => {
                    setForm({...form,risk:parseFloat(e.target.value)})
            }} />
            <TextInput title={'risk reward ratio'} value={form.rr.toString()}  onChange={(e) => {
                setForm({...form,rr:parseFloat(e.target.value)})
            }} />
            <TextInput title={'budget'}  value={form.budget.toString()} onChange={(e) => {
                setForm({...form,budget:parseFloat(e.target.value)})
            }} />
            <TextInput title={'win rate'}  value={form.winrate.toString()} onChange={(e)=>{
setForm({...form,winrate:parseFloat(e.target.value)})
            }} />
            <TextInput title={'total trade'} value={form.totaltrade.toString()} onChange={(e)=>{
setForm({...form,totaltrade:parseFloat(e.target.value)})
            }} />
           <SaveButton label='Calculate' onClick={()=>{
                let result = form.budget
                let _win = 0
                let _loss = 0
                for (let i = 0; i < form.totaltrade; i++) {
                    const randPercentage = Math.floor(Math.random() * 100) + 1;

                    const totalRisk =  (form.budget*form.risk)/100
                    
                    if(randPercentage <= form.winrate){
                        
                            result += totalRisk * form.rr
                            _win+=1
                    }
                    else{
                        result -= totalRisk
                        _loss +=1
                    }

                
                }
                console.log('win loss', _win, _loss)
                setResult(result)
           }}/>
           <p>{result}</p>
        </div>
    )
}
