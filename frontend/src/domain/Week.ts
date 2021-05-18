import { format } from '@/utils/date'
import { Day } from './Day'
import { Plan } from './Plan'

export class Week {
  public year: number
  public month: number
  public days: Day[]

  public static readonly NUMBER_OF_DAYS_PER_WEEK = 7

  constructor(year: number, month: number, dates: Date[], plans: { [key: string]: Plan[] }) {
    this.year = year
    this.month = month
    this.days = dates.map((date) => ({ plans: plans[format(date)], date }))
  }

  // public get paddedWeekIfNotEnoughDay(): Week {
  //   if (this.dates.length === Week.NUMBER_OF_DAYS_PER_WEEK) {
  //     return this
  //   }

  //   const numberOfNotEnoughDay = Week.NUMBER_OF_DAYS_PER_WEEK - this.dates.length
  //   const endDate = this.dates[this.dates.length - 1]
  //   // 週の最後が日曜の場合、前月の曜日で埋める
  //   if (endDate.getDay() === DayOfWeek.SUNDAY.value) {
  //     const remainingDates = [...Array(numberOfNotEnoughDay)].map(
  //       (_, i) => new Date(this.year, this.month, i + 1 - numberOfNotEnoughDay)
  //     )
  //     return new Week(this.year, this.month, [...remainingDates, ...this.dates])
  //   }

  //   // 週の最後が日曜でない場合、翌月の曜日で埋める
  //   const remainingDates = [...Array(numberOfNotEnoughDay)].map(
  //     (_, i) => new Date(this.year, this.month, endDate.getDate() + 1 + i)
  //   )
  //   return new Week(this.year, this.month, [...this.dates, ...remainingDates])
  // }
}
