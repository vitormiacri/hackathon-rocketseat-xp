import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

export default function Form({
  initialData,
  schema,
  onSubmit,
  children,
  ...rest
}) {
  return (
    <Container
      initialData={initialData}
      schema={schema}
      onSubmit={onSubmit}
      {...rest}
    >
      {children}
    </Container>
  )
}

Form.propTypes = {
  initialData: PropTypes.object,
  schema: PropTypes.object,
  onSubmit: PropTypes.func,
  children: PropTypes.array,
}
