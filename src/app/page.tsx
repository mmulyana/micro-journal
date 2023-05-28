'use client'

import Form from '@/component/form'
import { journal } from '@/models/journal'
import { FormEvent, useState } from 'react'
import { nanoid } from 'nanoid'

export enum TypeJournal {
  Note = 'NOTE',
  Ideas = 'IDEAS',
  Wisdom = 'WISDOM',
}

export default function Home() {
  const [data, setData] = useState<journal[]>([])
  const [value, setValue] = useState<string>('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    const newData: journal = {
      id: nanoid(),
      title: value,
      type: TypeJournal.Note,
    }

    setData((prev) => [...prev, newData])
  }

  return (
    <>
      <ul>
        {data.map((data, index) => (
          <li key={index}>{data.title}</li>
        ))}
        <Form
          handleChange={(e) => setValue(e.target.value)}
          handleSubmit={handleSubmit}
          value={value}
          autoFocus
        />
      </ul>
    </>
  )
}
