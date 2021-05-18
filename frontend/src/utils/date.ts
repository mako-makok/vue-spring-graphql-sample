export const format = (date: Date): string => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

export const getTermOfDay = (date1: Date, date2: Date): number => {
  const millisecondsOfDay = 24 * 60 * 60 * 1000
  const time1 = date1.getTime()
  const time2 = date2.getTime()
  const diff = time1 > time2 ? time1 - time2 : time2 - time1
  return Math.floor(diff / millisecondsOfDay) + 2
}
