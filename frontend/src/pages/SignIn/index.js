import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import useAuth from '~/hooks/auth'
import Form from '~/components/Form'
import Button from '~/components/Button'

import { Container } from './styles'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
})

export default function SignIn() {
  const { signIn } = useAuth()

  function handleSubmit({ email, password }) {
    signIn({ email, password })
  }

  return (
    <Container>
      <span>Machine</span>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <Button color="#0597F2" type="submit">
          Entrar
        </Button>
        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}
