import React from 'react'
import PropTypes from 'prop-types'
import * as MaterialDesign from 'react-icons/md'

import { Container } from './styles'

export default function Button({
  color,
  border,
  icon,
  children,
  width,
  type,
  onClick,
}) {
  const Icon = MaterialDesign[icon]

  return (
    <Container color={color} border={border} width={width} type={type} onClick={onClick}>
      {icon && <Icon size={20} color="#FFF" />}
      {children && <span>{children}</span>}
    </Container>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  border: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  color: '#3b9eff',
  border: 'none',
  icon: '',
  width: '100%',
  type: 'button',
  onClick: () => {},
}
