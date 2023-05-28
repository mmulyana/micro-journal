export interface journal {
  id: string
  title: string
  type: TypeJournal
  description?: string | string[]
}

export enum TypeJournal {
  Note = 'NOTE',
  Ideas = 'IDEAS',
  Wisdom = 'WISDOM',
}
