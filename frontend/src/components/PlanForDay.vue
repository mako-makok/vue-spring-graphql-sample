<template>
  <div class="flex flex-col">
    <div class="text-center border-r pt-2 flex-1">{{ day.date.getDate() }}</div>
    <div class="border-r border-b"></div>
  </div>
</template>

<script lang="ts">
import { Day } from '@/domain/Day'
import { defineComponent, PropType, reactive } from 'vue'

type Plan = { name: string }
type Props = {
  day: Day
}
type State = {
  date: {
    year: number
    month: number
    date: number
  }
  plans: Plan[]
}
export default defineComponent({
  name: 'PlanForDay',
  props: {
    day: {
      type: Object as PropType<Props['day']>,
      required: true,
    },
  },
  setup(props: Props) {
    // const state = reactive<State>({
    //   date: {
    //     year: props.day.date.getFullYear(),
    //     month: props.day.date.getMonth(),
    //     date: props.day.date.getDate(),
    //   },
    //   plans: props.plans,
    // })
    return {
      ...props,
    }
  },
})
</script>
