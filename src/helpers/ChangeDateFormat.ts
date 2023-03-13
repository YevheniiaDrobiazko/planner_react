const changeDateFormat: (date: Date | null) => string = (date) => 
  date !== null 
    ? date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate()
    : ''

export default changeDateFormat;