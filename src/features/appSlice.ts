import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ChangeSidebarContentProps, LanguageType, SidebarViewType, TaskType, ThemeType } from './types'

interface AppState {
  date: string,
  settings: {
    theme: ThemeType
    language: LanguageType
  },
  tabs: {
    toDo: boolean,
    done: boolean
  },
  sidebarView: SidebarViewType,
  sidebarContent: keyof SidebarViewType,
  modalVisible: boolean,
  tasks: TaskType[]
}

const initialState: AppState = {
  date: '',
  settings: {
    theme: 'dark',
    language: 'en'
  },
  tabs: {
    toDo: true,
    done: false
  },
  sidebarView: {
    settings: false,
    search: false,
    list: false,
    notification: false
  },
  sidebarContent: 'settings',
  modalVisible: false,
  tasks: []
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeType>) => {
      state.settings.theme = action.payload;
    },
    changeLanguage: (state, action: PayloadAction<LanguageType>) => {
      state.settings.language = action.payload;
    },
    closeSidebar: (state) => {
      const initialContent = {
        settings: false,
        search: false,
        list: false,
        notification: false
      }
      state.sidebarView = initialContent
    },
    changeSidebarContent: (state, action: PayloadAction<ChangeSidebarContentProps>) => {
      const initialContent = {
        settings: false,
        search: false,
        list: false,
        notification: false
      }
      initialContent[action.payload.key] = action.payload.visibility;
      state.sidebarView = initialContent
      if(action.payload.visibility) {
        state.sidebarContent = action.payload.key
      }
    },
    openModal: (state) => {
      state.modalVisible = true;
    },
    closeModal: (state) => {
      state.modalVisible = false;
    },
    changeDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload
    },
    changeTasks: (state, action: PayloadAction<TaskType[]>) => {
      state.tasks = action.payload
    },
    activeToDoTab: (state) => {
      state.tabs = {
        toDo: true,
        done: false
      }
    },
    activeDoneTab: (state) => {
      state.tabs = {
        toDo: false,
        done: true
      }
    }
  },
})

export const { 
  changeTheme,
  changeLanguage,
  closeSidebar,
  changeSidebarContent,
  openModal,
  closeModal,
  changeDate,
  changeTasks,
  activeToDoTab,
  activeDoneTab
} = appSlice.actions

export const rootReducer = appSlice.reducer;