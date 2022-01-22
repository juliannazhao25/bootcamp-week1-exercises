import React from 'react'
import { StyledInput } from './styles'

const FormInput = ({ value, setValue, action }) => (
  <div>
    <StyledInput
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyPress={action}
    />
  </div>
)

export default FormInput
