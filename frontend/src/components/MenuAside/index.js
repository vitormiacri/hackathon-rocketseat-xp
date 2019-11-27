import React from 'react'

import { Container, Logo, MenuWrapper, MenuItens, MenuItem } from './styles'

export default function MenuAside() {
  return (
    <Container>
      <MenuWrapper>
        <Logo>Time Machine</Logo>
      </MenuWrapper>
      <MenuItens>
        <MenuItem to="/dashboard">Home</MenuItem>
        <MenuItem>Carreiras</MenuItem>
        <MenuItem>Programadores</MenuItem>
        <MenuItem>Meu perfil</MenuItem>
        <MenuItem>Deixar a plataforma</MenuItem>
      </MenuItens>
    </Container>
  )
}
