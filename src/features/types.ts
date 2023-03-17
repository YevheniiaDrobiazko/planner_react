export type ThemeType = 'dark' | 'light'
export type LanguageType = 'ua' | 'en'

export interface TaskType {
  id: number
  date: string
  text: string
} 

export interface SidebarViewType {
  settings: boolean,
  search: boolean,
  list: boolean,
  notification: boolean
}

export interface ChangeSidebarContentProps {
  key: keyof SidebarViewType, 
  visibility: boolean
}