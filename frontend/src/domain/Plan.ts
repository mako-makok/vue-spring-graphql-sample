import { format } from '@/utils/date'

export type Plan = {
  id: number
  calendarId: number
  title: string
  description: string
  place: string
  date: Date
  startTime: string
  endTime: string
}

export type PlansByDate = {
  [key: string]: Plan[]
}

export const groupByDate = (plans: Plan[]): PlansByDate => {
  return plans.reduce((acc: { [key: string]: Plan[] }, plan: Plan) => {
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
}
