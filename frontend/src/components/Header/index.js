import React from 'react'
import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import { Container, Content, RightMenu } from './styles'

export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <h3>Machine</h3>
        </Link>
        <RightMenu>
          <Button
            color="transparent"
            border="#fff"
            width={150}
            type="button"
            to="/login"
          >
            Login
          </Button>
        </RightMenu>
      </Content>
    </Container>
  )
}
