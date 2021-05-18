<template>
  <div>マイカレンダー</div>
  <ul>
    <li v-for="calendar in calendars" :key="calendar">
      <label class="inline-flex items-center mt-3">
        <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
        <span class="ml-2 text-gray-700">{{ calendar }}</span>
      </label>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CalendarList',
  setup() {
    const calendars = ['テスト', 'オレ', 'トモダチ']
    return {
      calendars,
    }
  },
})
</script>
