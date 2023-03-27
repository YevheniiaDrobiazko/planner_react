export type ThemeType = 'dark' | 'light'
export type LanguageType = 'ua' | 'en'
export type ButtonSpaceType = 'header' | 'sidebar'
export type TaskSpaceType = 'calendar' | 'modal'
export type TaskStatus = 'toDo' | 'done'

export interface TaskType {
  id: number
  date: string
  text: string
  status: TaskStatus
} 

export interface UpdateTaskType {
  id: number
  text: string
}

export interface UpdateTaskStatusType {
  id: number
  status: TaskStatus
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