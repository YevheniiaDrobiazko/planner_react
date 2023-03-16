import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LanguageType, TaskType, ThemeType } from './types'

interface AppState {
  settings: {
    theme: ThemeType
    language: LanguageType
  }
  tasks: TaskType[]
}

const initialState: AppState = {
  settings: {
    theme: 'dark',
    language: 'en'
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
    }
  },
})

export const { 
  changeTheme,
  changeLanguage
} = appSlice.actions

export const rootReducer = appSlice.reducer;