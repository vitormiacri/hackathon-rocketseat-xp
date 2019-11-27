import React from 'react'
import PropTypes from 'prop-types'
import * as MaterialDesign from 'react-icons/md'

import { Container } from './styles'

export default function Card({ icon, description, width, height }) {
  const Icon = MaterialDesign[icon]

  return (
    <Container width={width} height={height}>
      {icon && <Icon size={40} color="#F28305" />}
      <span>{description}</span>
    </Container>
  )
}

Card.propTypes = {
  icon: PropTypes.string,
  description: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

Card.defaultProps = {
  description: '',
  icon: '',
  height: 180,
  width: 180,
}
