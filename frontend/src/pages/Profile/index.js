import React from 'react'
import { Form, Input } from '@rocketseat/unform'

import { Container } from './styles'

export default function Profile() {
  function handleSubmit(data) {
    console.log(data)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <div />
        <Input type="password" name="oldPassword" placeholder="Senha atual" />
        <Input type="password" name="password" placeholder="Nova Senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />
        <button type="submit">Salvar perfil</button>
      </Form>
    </Container>
  )
}
