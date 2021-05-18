<template>
  <header className="flex items-center p-2 border-b border-gray-200 bg-white-400 h-14">
    <a className="text-gray-800  font-bold text-2xl no-underline">calendar app</a>
    <slot></slot>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavigationBar',
})
</script>
