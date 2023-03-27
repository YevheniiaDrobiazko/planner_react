import { useTranslation } from "react-i18next"

type useDateHook = {
  getDay: (date: Date) => string
  getMonthName: (date: Date) => string
  getYear: (date: Date) => string
  changeDateFormat: (date: Date) => string
  selectedDateFormat: (date: Date) => string
  isPastTime: (date: Date) => boolean
}

export const useDate = (): useDateHook => {
  const {t} = useTranslation()
  const oneDayInMs = 86400000

  const monthNames = [
    t('MONTH.JAN'),
    t('MONTH.FAB'),
    t('MONTH.MAR'),
    t('MONTH.APR'),
    t('MONTH.MAY'),
    t('MONTH.JUN'),
    t('MONTH.JUL'),
    t('MONTH.AUG'),
    t('MONTH.SEP'),
    t('MONTH.OCT'),
    t('MONTH.NOV'),
    t('MONTH.DEC')
  ]

  const today = new Date()
  const getDay = (date: Date) => String(date.getDate()).padStart(2, '0')
  const getMonth = (date: Date) => String(date.getMonth() + 1).padStart(2, '0')
  const getMonthName = (date: Date) => monthNames[date.getMonth()]
  const getYear = (date: Date) => String(date.getFullYear());
  
  const changeDateFormat: (date: Date) => string = (date) => {
    return `${getYear(date)}.${getMonth(date)}.${getDay(date)}`
  }

  const selectedDateFormat: (date: Date) => string = (date) => {
    return `${getDay(date)} ${getMonthName(date)} ${getYear(date)}`
  }

  const isPastTime = (date: Date) => date.getTime() + oneDayInMs < today.getTime()
    ? true
    : false

  
  
  return {
    getDay,
    getMonthName,
    getYear,
    changeDateFormat,
    selectedDateFormat,
    isPastTime
  };
}