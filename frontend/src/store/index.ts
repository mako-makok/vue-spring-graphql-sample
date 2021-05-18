import { InjectionKey } from '@vue/runtime-core'
import { createStore, Store, useStore as _useStore } from 'vuex'

type MonthValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

type State = {
  currentYear: number
  currentMonth: MonthValue
}

const Mutation = {
  SET_YEAR: 'SET_YEAR',
  SET_MONTH: 'SET_MONTH',
} as const
type Mutation = typeof Mutation[keyof typeof Mutation]

export const Action = {
  PLUS_YEAR: 'PLUS_YEAR',
  MINUS_YEAR: 'MINUS_YEAR',
  PLUS_MONTH: 'PLUS_MONTH',
  MINUS_MONTH: 'MINUS_MONTH',
} as const
type Action = typeof Action[keyof typeof Action]

export const key: InjectionKey<Store<State>> = Symbol()

const now = new Date()
const MIN_MONTH = 0
const MAX_MONTH = 11
export const store = createStore<State>({
  state: {
    currentYear: now.getFullYear(),
    currentMonth: now.getMonth() as MonthValue,
  },
  mutations: {
    [Mutation.SET_YEAR](state: State, year: number) {
      state.currentYear = year
    },
    [Mutation.SET_MONTH](state, month: MonthValue) {
      state.currentMonth = month
    },
  },
  actions: {
    [Action.PLUS_YEAR]({ commit, state }) {
      commit(Mutation.SET_YEAR, state.currentYear + 1)
    },
    [Action.MINUS_YEAR]({ commit, state }) {
      commit(Mutation.SET_YEAR, state.currentYear - 1)
    },
    [Action.PLUS_MONTH]({ commit, state }) {
      const nextMonth = state.currentMonth + 1
      if (nextMonth > MAX_MONTH) {
        commit(Mutation.SET_MONTH, MIN_MONTH)
        commit(Mutation.SET_YEAR, state.currentYear + 1)
        return
      }
      commit(Mutation.SET_MONTH, nextMonth)
    },
    [Action.MINUS_MONTH]({ commit, state }) {
      const prevMonth = state.currentMonth - 1
      if (prevMonth < MIN_MONTH) {
        commit(Mutation.SET_MONTH, MAX_MONTH)
        commit(Mutation.SET_YEAR, state.currentYear - 1)
        return
      }
      commit(Mutation.SET_MONTH, prevMonth)
    },
  },
  modules: {},
})

export const useStore = (): Store<State> => _useStore(key)
