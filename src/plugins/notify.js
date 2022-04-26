import { useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const options = {
    hideProgressBar: true,
    showCloseButtonOnHover: true,
    timeout: 2000
}

const toast = useToast()

export default {
    info(message) {
        toast.info(message, options)
    },
    success(message) {
        toast.success(message, options)
    },
    warning(message) {
        toast.warning(message, options)
    },
    error(message) {
        toast.error(message, options)
    }
}
