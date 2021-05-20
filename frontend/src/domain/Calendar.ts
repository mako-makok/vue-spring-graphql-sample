import { getTermOfDay } from '@/utils/date'
import { groupByDate } from '@/domain/Plan'
import { DayOfWeek } from './DayOfWeek'
import { Plan } from './Plan'
import { Week, week, NUMBER_OF_DAYS_PER_WEEK } from './Week'

export type Calendar = {
  year: number
  month: number
  weeks: Week[]
}

export const createCalendar = (
  year: number,
  month: number,
  startDate: Date,
  endDate: Date,
  plans: Plan[]
): Calendar => {
  const plansByDate = groupByDate(plans)

  const termOfDay = getTermOfDay(startDate, endDate)
  const datesArray: Date[][] = [...Array(termOfDay)].reduce((acc, _, i) => {
    const date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i)
    if (acc.length === 0 || acc[acc.length - 1].length === NUMBER_OF_DAYS_PER_WEEK) {
      return [...acc, [date]]
    }

    const returnValue: Date[][] = [...acc]
    const endArray = returnValue[returnValue.length - 1]
    returnValue[returnValue.length - 1] = [...endArray, date]
    return returnValue
  }, [])
  const weeks = datesArray.map((dates) => week(year, month, dates, plansByDate))

  return {
    year,
    month,
    weeks,
  }
}

export const periodDate = (year: number, month: number): { startDate: Date; endDate: Date } => {
  const startDate = new Date(year, month, 1)
  const startDay = startDate.getDay()
  if (startDay !== DayOfWeek.SUNDAY.value) startDate.setDate(startDate.getDate() - startDay + 1)

  const endDate = new Date(year, month + 1, 0)
  const endDay = endDate.getDay()
  if (endDay !== DayOfWeek.SATURDAY.value) endDate.setDate(endDate.getDate() + 6 - endDay)

  return {
    startDate,
    endDate,
  }
}
