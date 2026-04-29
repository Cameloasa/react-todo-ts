//src/components/alerts/SuccesAlert.tsx
import type React from 'react'
import Alert from 'react-bootstrap/Alert'

interface SuccessAlertProps {
  children: React.ReactNode
  heading?: string
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ children, heading }) => {
  return (
    <Alert variant="success">
      {heading && <Alert.Heading>{heading}</Alert.Heading>}
      {children}
    </Alert>
  )
}

export default SuccessAlert
