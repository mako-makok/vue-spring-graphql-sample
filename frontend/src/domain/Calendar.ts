import { format, getTermOfDay } from '@/utils/date'
import { DayOfWeek } from './DayOfWeek'
import { Plan } from './Plan'
import { Week } from './Week'

export class Calendar {
  public readonly year: number
  public readonly month: number
  public readonly weeks: Week[]

  constructor(year: number, month: number, startDate: Date, endDate: Date, plans: Plan[]) {
    this.year = year
    this.month = month
    const plansByDate: { [key: string]: Plan[] } = plans.reduce((acc: { [key: string]: Plan[] }, plan: Plan) => {
      const key = format(plan.date)
      if (key in acc) {
        const returnValue = { ...acc }
        returnValue[key] = [...returnValue[key], plan]
        return returnValue
      }
      return {
        ...acc,
        [key]: [plan],
      }
    }, {})

    const termOfDay = getTermOfDay(startDate, endDate)
    const datesArray: Date[][] = [...Array(termOfDay)].reduce((acc, _, i) => {
      const date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i)
      if (acc.length === 0 || acc[acc.length - 1].length === Week.NUMBER_OF_DAYS_PER_WEEK) {
        return [...acc, [date]]
      }

      const returnValue: Date[][] = [...acc]
      const endArray = returnValue[returnValue.length - 1]
      returnValue[returnValue.length - 1] = [...endArray, date]
      return returnValue
    }, [])
    this.weeks = datesArray.map((dates) => new Week(year, month, dates, plansByDate))
  }

  static periodDate(year: number, month: number): { startDate: Date; endDate: Date } {
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
}
