import React from 'react'

import cogwheels from '~/assets/images/cogwheels.svg'

import Card from '~/components/Card'
import { Container, HeaderPage, BodyPage, Footer } from './styles'

import Header from '~/components/Header'
export default function Home() {
  return (
    <Container>
      <Header />
      <HeaderPage>
        <div>
          <h2>Conecte-se com o seu futuro</h2>
          <img src={cogwheels} alt="" />
        </div>
      </HeaderPage>
      <BodyPage>
        <Card icon="MdAddCircleOutline" description="Conheça o seu futuro" />
        <Card icon="MdAddCircleOutline" description="Conheça o seu futuro" />
        <Card icon="MdAddCircleOutline" description="Conheça o seu futuro" />
      </BodyPage>
      <Footer>
        <span>A Plataforma</span>
      </Footer>
    </Container>
  )
}
