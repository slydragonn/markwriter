import { useState, useEffect } from 'react'

type Alert = {
  isVisible: boolean
  setVisible: () => void
}

type Message = {
  value: string
  set: (message: string) => void
}

const useAlert = (): [Alert, Message] => {
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  useEffect(() => {
    const hideAlert = setTimeout(() => {
      if (showAlert) setShowAlert(() => false)
    }, 2500)

    return () => clearTimeout(hideAlert)
  }, [showAlert])

  const alert: Alert = {
    isVisible: showAlert,
    setVisible: () => setShowAlert(() => true)
  }

  const message: Message = {
    value: alertMessage,
    set: (message: string) => setAlertMessage(message)
  }

  return [alert, message]
}

export default useAlert
