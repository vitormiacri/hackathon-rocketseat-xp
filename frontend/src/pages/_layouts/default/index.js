import React from 'react'
import PropTypes from 'prop-types'

import MenuAside from '~/components/MenuAside'

// import Header from '~/components/Header'

import { Wrapper, Container } from './styles'

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <MenuAside />
      <Container>{children}</Container>
    </Wrapper>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
