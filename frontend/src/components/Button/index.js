import React from 'react'
import PropTypes from 'prop-types'
import * as MaterialDesign from 'react-icons/md'

import { Container } from './styles'

export default function Button({
  color,
  icon,
  children,
  width,
  type,
  onClick,
}) {
  const Icon = MaterialDesign[icon]

  return (
    <Container color={color} width={width} type={type} onClick={onClick}>
      {icon && <Icon size={20} color="#FFF" />}
      {children && <span>{children}</span>}
    </Container>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.string.isRequired,
  width: PropTypes.number,
  type: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  color: '#3b9eff',
  icon: '',
  width: 50,
  type: 'button',
  onClick: () => {},
}
