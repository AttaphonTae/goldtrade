'use client'
import InputRadio from '@/components/InputRadio'
import InputCheckbox from '@/components/InputSelected'
import InputTextField from '@/components/InputText'
import React from 'react'

export default function page() {
    const formList:FormQuestion[] = [
        {
            id:'1',question:'qouestion one',type:'answer',choices:[],note:''
        },
        {
            id:'2',question:'qouestion two',type:'select-one',choices:['choice 1','choice 2','choice 3'],note:''
        },
        {
            id:'3',question:'qouestion three',type:'select-many',choices:['one','two','three','four'],note:''
        },
        {
            id:'4',question:'qouestion one',type:'answer',choices:[],note:''
        }
    ]
    const GenerateList = (form:FormQuestion) =>{
        if(form.type === 'answer'){
            return <InputTextField
                        onChangeForm={form=>{
                            console.log(form)
                        }}
                        formQuestion = {form}
                    />
        }
        else if(form.type === 'select-one'){
            return <InputRadio
            onChangeForm={form=>{
                console.log(form)
            }}
            formQuestion = {form} />
        }
        else if(form.type === 'select-many'){
            return <InputCheckbox
            onChangeForm={form=>{
                console.log(form)
            }}
            formQuestion = {form} />
        }
    }
  return (
    <div className='flex flex-col p-4'>
        {
            formList.map(quest =>{
                return <div key={quest.id}>
                    {GenerateList(quest) }

                    <div className='bg-white w-full h-1 rounded-full my-4'/>
                </div>
            })
        }
         
         
    </div>
  )
}
