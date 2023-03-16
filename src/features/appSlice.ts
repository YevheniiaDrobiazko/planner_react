import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ChangeSidebarContentProps, LanguageType, SidebarViewType, TaskType, ThemeType } from './types'

interface AppState {
  settings: {
    theme: ThemeType
    language: LanguageType
  },
  sidebarView: SidebarViewType,
  tasks: TaskType[]
}

const initialState: AppState = {
  settings: {
    theme: 'dark',
    language: 'en'
  },
  sidebarView: {
    settings: false,
    search: false,
    list: false,
    notification: false
  },
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
    },
  },
})

export const { 
  changeTheme,
  changeLanguage,
  closeSidebar,
  changeSidebarContent
} = appSlice.actions

export const rootReducer = appSlice.reducer;