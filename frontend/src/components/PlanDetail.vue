<template>
  <Modal v-if="modalState.isActive">
    <template v-slot:header>
      <div class="flex justify-end">
        <button class="py-2 px-4" @click="close">
          <CancelIcon />
        </button>
      </div>
    </template>
    <template v-slot:modal-content>
      <div class="flex flex-col">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="タイトルと日時を追加"
          v-model="state.title"
        />
        <div class="flex">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="開始"
            v-model="state.startTime"
          />
          <div class="py-2 px-3">-</div>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="終了"
            v-model="state.endTime"
          />
        </div>
      </div>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="場所を追加"
        v-model="state.place"
      />
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="説明"
        v-model="state.description"
      />
    </template>
    <template v-slot:footer>
      <div class="flex justify-end">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="save">保存</button>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext } from 'vue'
import Modal from '@/components/base/Modal.vue'
import CancelIcon from '@/components/icon/CancelIcon.vue'
import { ModalProps, useModal, modalProps } from '@/hooks/modal/useModal'

type Props = ModalProps
type State = {
  title: string
  description: string
  place: string
  startTime: string
  endTime: string
}
export default defineComponent({
  name: 'PlanDetail',
  components: {
    Modal,
    CancelIcon,
  },
  props: {
    ...modalProps,
  },
  emits: ['modal-state-changed'],
  setup(props: Props, context: SetupContext) {
    const { modalState, close } = useModal(props, context)
    const state = reactive<State>({
      title: '',
      description: '',
      place: '',
      startTime: '',
      endTime: '',
    })

    const save = () => {
      close()
    }

    return {
      modalState,
      state,
      close,
      save,
    }
  },
})
</script>
