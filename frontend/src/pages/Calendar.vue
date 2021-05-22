<template>
  <NavigationBar>
    <p class="mx-8">{{ currentYear }}年</p>
    <MonthSwitcher />
  </NavigationBar>
  <div class="flex">
    <div class="flex flex-col border-r px-8 py-4">
      <CalendarList />
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex flex-none items-stretch">
        <div v-for="day in dayOfWeek" :key="day" class="text-center border-r pt-2 flex-1">
          {{ day }}
        </div>
      </div>
      <div class="flex h-36" v-for="week in calendar.weeks" :key="week">
        <PlanForDay class="flex-1" v-for="day in week.days" :key="day" :day="day" @click="modalStateChange" />
      </div>
    </div>
  </div>
  <PlanDetail :is-active="state.isModalActive" @modal-state-changed="modalStateChange" />
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'
import PlanForDay from '@/components/PlanForDay.vue'
import PlanDetail from '@/components/PlanDetail.vue'
import MonthSwitcher from '@/components/MonthSwitcher.vue'
import CalendarList from '@/components/CalendarList.vue'
import { useStore } from '@/store'
import { createCalendar, periodDate } from '@/domain/Calendar'
import { DayOfWeek } from '@/domain/DayOfWeek'
import { Plan } from '@/domain/Plan'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

type State = {
  isModalActive: boolean
}
export default defineComponent({
  name: 'Calendar',
  components: {
    NavigationBar,
    PlanForDay,
    MonthSwitcher,
    CalendarList,
    PlanDetail,
  },
  setup() {
    const state = reactive<State>({
      isModalActive: false,
    })

    const { result } = useQuery(gql`
      {
        accounts {
          id
        }
      }
    `)

    console.log(result)

    const modalStateChange = () => (state.isModalActive = !state.isModalActive)

    const store = useStore()

    return {
      state,
      dayOfWeek: (Object.keys(DayOfWeek) as (keyof typeof DayOfWeek)[]).map((key) => DayOfWeek[key].jpName),
      modalStateChange,
      currentYear: computed(() => store.state.currentYear),
      calendar: computed(() => {
        const { currentYear, currentMonth } = store.state
        const { startDate, endDate } = periodDate(currentYear, currentMonth)
        const getPlan = (from: Date, to: Date): Plan[] => [
          {
            id: 1,
            calendarId: 1,
            title: 'foo',
            description: 'bar',
            place: 'foobar',
            date: new Date(),
            startTime: '',
            endTime: '',
          },
        ]
        const plans = getPlan(startDate, endDate)
        const calendar = createCalendar(currentYear, currentMonth, startDate, endDate, plans)
        return calendar
      }),
    }
  },
})
</script>
