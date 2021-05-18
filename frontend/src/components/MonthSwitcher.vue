<template>
  <div class="flex">
    <button @click="minusMonth">
      <PrevIcon />
    </button>
    {{ currentMonth }}月
    <button @click="plusMonth">
      <NextIcon />
    </button>
  </div>
</template>

<script lang="ts">
import { Action, useStore } from '@/store'
import { computed, defineComponent } from 'vue'
import NextIcon from '@/components/icon/NextIcon.vue'
import PrevIcon from '@/components/icon/PrevIcon.vue'

export default defineComponent({
  name: 'MonthSwitcher',
  components: {
    NextIcon,
    PrevIcon,
  },
  setup() {
    const store = useStore()

    const minusMonth = () => {
      store.dispatch(Action.MINUS_MONTH)
    }

    const plusMonth = () => {
      store.dispatch(Action.PLUS_MONTH)
    }
    return {
      currentYear: computed(() => store.state.currentMonth),
      currentMonth: computed(() => store.state.currentMonth + 1),
      minusMonth,
      plusMonth,
    }
  },
})
</script>
