'use client';
import React, { useEffect, useState } from 'react';
import AddItem from './AddItem';
import TextInput from '@/components/TextInput';
import CustomInput from '@/components/NumberInput';
export default function Page() {
    const [list,setList] = useState<FormJourney[]>([])
    const [profit,setProfit] = useState(0)
    const [win,setWin] = useState(0)
    const [loss,setLoss] = useState(0)
    const [risk,setRisk] = useState(3)

    const [budget,setBudget]= useState(1000)
    const [leverage,setLeverage]= useState(100)

    const [currentBudget,setCurrentBudget]= useState(0)
    useEffect(()=>{
        let _win = 0
        let _loss = 0
        let currentMoney = 0
        const profit = list.reduce((prev, curr) => {

            if (curr.win) {
                _win +=1;
                
              return prev + Math.abs(curr.range * curr.lotSize! *leverage *2);
            }
            _loss +=1
            return prev - Math.abs(curr.range * curr.lotSize! *leverage); // Return prev if curr.win is falsy
          }, 0); 
          setBudget(budget + profit)
          setProfit(profit)
          setWin(_win)
          setLoss(_loss)
    },[list])
    return (
        <div className='p-12'>
            <div className='flex my-4 rounded-full bg-white w-fit py-2 justify-center'>
                <button className='text-slate-800 font-bold px-2 mx-auto' onClick={()=>{
                    if(list.length > 0){

                        const stringifiedList = JSON.stringify(list);
                        localStorage.setItem('list', stringifiedList);
                    }

                }}>save</button>
                <button className='text-slate-800 font-bold px-2' onClick={()=>{
                    const storedList = localStorage.getItem('list');
                    if (storedList){
                        const parsedList = JSON.parse(storedList);
                        setList(parsedList);
                    }

                }}>load</button>
                <button className='text-slate-800 font-bold px-2' onClick={()=>{
                    localStorage.removeItem('list')
                    setList([])

                }}>clear</button>
            </div>
            <div className='flex gap-4'>
                    <CustomInput title={'RISK %'} value={risk} onChange={(e)=>{
                            setRisk(parseFloat(e.target.value))
                    } } />
                    <CustomInput title={'BUDGET'} value={budget} onChange={(e)=>{   
                            setBudget(parseFloat(e.target.value))
                    } } />
                    <CustomInput title={' 1 lot'} value={leverage} onChange={(e)=>{   
                            setLeverage(parseFloat(e.target.value))
                    } } />
                    <p className='text-xs font-medium'>1 lot size use {leverage} usd per 1 usd movement</p>

            </div>
            <div className='flex my-4'>
            <div className='w-1/2 flex flex-col items-center justify-center'> 
                <div className='flex rounded-lg bg-white w-fit p-2'>
                    <div className='text-xl text-slate-800 font-bold mx-auto px-4 flex flex-col justify-center items-center'>
                        <p>WIN</p>
                        <p className='text-2xl'>{win}</p>
                    </div>
                    <div className='text-xl text-slate-800 font-bold mx-auto px-4 flex flex-col justify-center items-center'>
                        <p>LOSS</p>
                        <p className='text-2xl'>{loss}</p>
                    </div>
                </div>
                <div className=' text-xl p-2 px-4 my-2 font-bold bg-white rounded-full flex items-center justify-center'>
                    {
                        profit > 0 ? <p className='text-green-800'>{ profit.toFixed(2)}</p>
                        :<p className='text-rose-800'>{ profit.toFixed(2)}</p>
                    }
                </div>
                <div className=' text-xl p-2 px-4 my-2 font-bold bg-white rounded-full flex items-center justify-center'>
                    {
                        budget > 0 ? <p className='text-green-800'>{ budget.toFixed(2)}</p>
                        :<p className='text-rose-800'>{ budget.toFixed(2)}</p>
                    }
                </div>
            </div>
            <AddItem onSave={(form)=>{
                const re = (budget*risk)/100
                const lot = re/(form.range*leverage)
                
                setList([{...form,lotSize:lot,amount:form.win ? re*form.rr:re},...list])
            }} />
            </div>

           
            <div className='h-6 flex flex-col gap-4' />
            {
                list.map((form,index)=>{
                    return <div key={index} className='flex gap-4 bg-white text-slate-800 rounded-full px-4 w-fit py-1 my-2'>
                            <p className='font-bold uppercase'>
                                {form.symbol}
                            </p>
                            <div>
                                entry <span className='font-bold'>{form.entry}</span>
                            </div>
                            <div>
                                stop  <span className='font-bold'>{form.stop}</span>
                            </div>
                            <div 
                            onClick={()=>{
                                const listTemp = [...list]
                                const item = {
                                    ...listTemp[index],
                                    win :!listTemp[index].win
                                }
                                listTemp[index] = item
                                console.log(item.win)
                                setList([...listTemp])
                            }}
                            className='rounded-full bg-slate-800 px-2 text-white flex items-center cursor-pointer'>
                                <p className={form.win ? 'font-bold text-orange-400 text-sm':'text-xs text-white'}>WIN</p>
                                <div className='h-3 bg-white rounded w-1 my-1 mx-2'></div>
                                <p className={form.win ? 'text-xs text-white':'font-bold text-orange-400 text-sm'}>LOSS</p>
                            </div>

                            <div className='flex items-center'>
                                {
                                    form.win ? <div className='text-green-600 font-bold italic text-xs'>
                                        <p>profit : {Math.abs(form.amount!)}</p> 
                                    </div>:
                                    <div className='text-rose-600 font-bold italic text-xs'>
                                        <p>loss : {Math.abs(form.amount!)}</p>
                                    </div>
                                }
                            </div>

                            <div>{form.lotSize!.toFixed(2)}</div>
                    </div>
                })
            }
           
        </div>
    );
}
