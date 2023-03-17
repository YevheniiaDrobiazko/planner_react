import { useDispatch } from "react-redux"
import { SidebarViewType } from "../features/types"
import { changeSidebarContent } from "../features/appSlice"
import { useSelector } from "react-redux"
import { RootState } from "../store"

type useSidebarHook = {
  isSidebarVisible: (sidebarView: SidebarViewType) => boolean
  changeContent: (key: keyof SidebarViewType) => void
}

export const useSidebar = (): useSidebarHook => {
  const sidebarView = useSelector((state: RootState) => state.app.sidebarView)
  const dispatch = useDispatch()
  
  const isSidebarVisible = (sidebarView: SidebarViewType) => {
    let sidebarKey: keyof SidebarViewType
    const sidebarValues = []
    for(sidebarKey in sidebarView) {
      sidebarValues.push(sidebarView[sidebarKey])
    }
    return sidebarValues.includes(true)
  }

  const changeContent = (key: keyof SidebarViewType) => {
    dispatch(changeSidebarContent({
      key: key,
      visibility: !sidebarView[key]
    }))
  }

  return {
    isSidebarVisible,
    changeContent
  };
}