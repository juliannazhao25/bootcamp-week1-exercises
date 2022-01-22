import React from 'react'
import { NoButton } from '../../styles'

const FormButton = ({ text, action }) => (
  <NoButton onClick={action}>
    {text}
  </NoButton>
)

export default FormButton
