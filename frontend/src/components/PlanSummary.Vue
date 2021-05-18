<template>
  <a
    class="inline-block rounded-lg text-white bg-blue-400 hover:bg-blue-500 duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 opacity-90 hover:opacity-100"
  >
    {{ planName }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type Props = {
  planName: string
}
export default defineComponent({
  name: 'PlanSummary',
  props: {
    planName: {
      type: String,
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
