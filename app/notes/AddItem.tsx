import CustomInput from '@/components/NumberInput';
import SaveButton from '@/components/SaveButton';
import TextInput from '@/components/TextInput';
import React, { useEffect, useState } from 'react'
interface InputProps {

    onSave: (form: FormJourney) => void,
}
export default function AddItem({onSave}:InputProps) {
    const [rr, setRR] = useState(2);
    const [form, setForm] = useState({
        entry: 0,
        stoploss: 0,
        symbol: 'GOLD'
    });
    const [result, setResult] = useState({
        range: 0,
        takeprofit: 0,
        win:false,
    });
    const onFormChange = () => {
        const range = form.entry - form.stoploss;
        console.log(range)
        setResult({
            ...result,
            range: range,
            takeprofit: form.entry + range * rr
        });
    };
    useEffect(() => {
        onFormChange();
    }, [form]);
  return (
    <div>
        <h1 className='font-bold text-xl mb-4'>ADD TRADE JOURNEY.</h1>
            <form onSubmit={(e)=>{
                e.preventDefault()
                onSave({
                    symbol: form.symbol,
                    entry: form.entry,
                    stop: form.stoploss,
                    range: result.range,
                    rr: rr,
                    takeprofit: result.takeprofit,
                    win: result.win,
                });
            }}>
                <TextInput title={'Symbol'} value={form.symbol} onChange={e => {
                    const value = (e.target.value);
                    setForm({ ...form, symbol: value });
                }} />
                <div className='h-2' />
                <div className='flex flex-wrap gap-4'>
                    <CustomInput title={'Entry'} onChange={e => {
                        const value = parseFloat(e.target.value);
                        setForm({ ...form, entry: value });
                    }} />
                    <CustomInput title={'Stop'} onChange={e => {
                        const value = parseFloat(e.target.value);
                        setForm({ ...form, stoploss: value });
                    }} />

                </div>
                <div className='p-2'>
                    <p> range <span className='text-lg font-bold text-orange-400'>{result.range.toFixed(3)}</span>
                    </p>
                    <p> with risk reward ratio <span className='text-lg font-bold text-orange-400'>{rr}</span></p>
                    <p>take profit = <span className='text-lg font-bold text-orange-400'>{result.takeprofit.toFixed(3)}</span></p>
                </div>
                <div className='flex gap-2'>
                    <input type='checkbox' checked={result.win} onChange={e=>{
                     
                            setResult({...result,win:e.target.checked})
                        
                        
                    }} />
                    <p>win</p>
                </div>
                <div className='w-60 h-1 bg-white rounded-full mb-6'></div>
                <SaveButton onClick={(e) => {
                   
                }} label={'save'} />
            </form>
    </div>
  )
}
