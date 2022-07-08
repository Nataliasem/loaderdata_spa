import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const $toast = useToast({
  position: 'top-right'
})

export default {
  default(message: string) {
    $toast.default(message)
  },
  info(message: string) {
    $toast.info(message)
  },
  success(message: string) {
    $toast.success(message)
  },
  warning(message: string) {
    $toast.warning(message)
  },
  error(message: string) {
    $toast.error(message)
  }
}
