<template>
  <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
    <div class="flex flex-col bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
      <div class="flex flex-col px-6 py-5 bg-gray-50">
        <header>
          <slot name="header" />
        </header>
        <slot name="modal-content" />
        <footer>
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Modal',
})
</script>
