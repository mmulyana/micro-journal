import { ChangeEvent, FormEvent } from 'react'

type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  handleChange: (e: ChangeEvent<HTMLInputElement>) => any
  value: string
  autoFocus?: boolean
}

export default function Form({
  handleSubmit,
  handleChange,
  value,
  autoFocus,
}: Props) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='type here'
          value={value}
          onChange={handleChange}
          autoFocus={autoFocus}
        />
        <button type='submit' hidden></button>
      </form>
    </div>
  )
}
