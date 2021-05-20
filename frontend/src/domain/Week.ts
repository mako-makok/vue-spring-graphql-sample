import { format } from '@/utils/date'
import { Day } from './Day'
import { PlansByDate } from './Plan'

export type Week = {
  year: number
  month: number
  days: Day[]
}

export const week = (year: number, month: number, dates: Date[], plansByDate: PlansByDate): Week => ({
  year,
  month,
  days: dates.map((date) => ({ plans: plansByDate[format(date)], date })),
})

export const NUMBER_OF_DAYS_PER_WEEK = 7
