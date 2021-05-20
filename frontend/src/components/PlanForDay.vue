<template>
  <div class="flex flex-col">
    <div class="text-center border-r pt-2 flex-1">{{ day.date.getDate() }}</div>
    <div class="border-r border-b"></div>
  </div>
</template>

<script lang="ts">
import { Day } from '@/domain/Day'
import { defineComponent, PropType } from 'vue'

type Props = {
  day: Day
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
    return {
      ...props,
    }
  },
})
</script>
