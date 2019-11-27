import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import Form from '~/components/Form'
import Button from '~/components/Button'

import { Container } from './styles'
const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, ' No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
})

export default function SignUp() {
  function handleSubmit() {
    console.log('cadastro')
  }

  return (
    <Container>
      <span>Machine School</span>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <Button color="#0597F2" type="submit">
          Criar conta
        </Button>
        <Link to="/login">Já tenho Login</Link>
      </Form>
    </Container>
  )
}
