import { reactive, SetupContext, watch } from 'vue'

export const modalProps = {
  isActive: {
    type: Boolean,
    required: true,
  },
}

export type ModalProps = {
  isActive: boolean
}

type ModalState = {
  isActive: boolean
}

type UseModal = (
  props: ModalProps,
  context: SetupContext
) => {
  modalState: ReturnType<typeof reactive>
  close: () => void
}
export const useModal: UseModal = (props, context) => {
  const modalState = reactive<ModalState>({
    isActive: props.isActive,
  })

  const close = () => {
    modalState.isActive = false
    context.emit('modal-state-changed', modalState.isActive)
  }

  watch(
    () => props.isActive,
    () => (modalState.isActive = props.isActive)
  )

  return {
    modalState,
    close,
  }
}
