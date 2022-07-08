import './notify.css'

const showAlert = (message: string, type = 'default') => {
  if (!message) {
    return
  }

  const alertElement = document.createElement('div')
  alertElement.classList.add('ld-alert', 'fade-in', `ld-alert-${type}`)
  alertElement.innerText = message

  let alertWrapper = document.getElementById('ld-alert-wrapper')
  if (!alertWrapper) {
    alertWrapper = document.createElement('div')
    alertWrapper.id = 'ld-alert-wrapper'
    document.body.appendChild(alertWrapper)
  }

  alertWrapper.appendChild(alertElement)

  const clearDom = () => {
    alertElement.remove()

    const alerts = document.querySelectorAll('.ld-alert')

    if (alertWrapper && alerts.length === 0) {
      alertWrapper.remove()
    }
  }

  setTimeout(() => clearDom(), 3000)
}

export default {
  default(message: string) {
    showAlert(message, 'default')
  },
  success(message: string) {
    showAlert(message, 'success')
  },
  error(message: string) {
    showAlert(message, 'error')
  }
}
