import React, { useState } from 'react'
import { KeyboardArrowUp as Up } from 'styled-icons/material/KeyboardArrowUp'
import { KeyboardArrowDown as Down } from 'styled-icons/material/KeyboardArrowDown'

import {
  Container,
  Logo,
  MenuWrapper,
  MenuItens,
  MenuDropDown,
  MenuItem,
  MenuButton,
} from './styles'

export default function MenuAside() {
  const [menuDropDown, setMenuDropDown] = useState(false)
  return (
    <Container>
      <MenuWrapper>
        <Logo>Time Machine</Logo>
      </MenuWrapper>
      <MenuItens className="display">
        <MenuItem to="/dashboard">Home</MenuItem>
        <MenuItem>Carreiras</MenuItem>
        <MenuItem>Programadores</MenuItem>
        <MenuItem>Meu perfil</MenuItem>
        <MenuItem>Deixar a plataforma</MenuItem>
      </MenuItens>
      <MenuButton onClick={() => setMenuDropDown(!menuDropDown)}>
        <p>menu</p>
        {menuDropDown ? <Up /> : <Down />}
      </MenuButton>
      <MenuDropDown active={menuDropDown}>
        <MenuItem to="/dashboard">Home</MenuItem>
        <MenuItem>Carreiras</MenuItem>
        <MenuItem>Programadores</MenuItem>
        <MenuItem>Meu perfil</MenuItem>
        <MenuItem>Deixar a plataforma</MenuItem>
      </MenuDropDown>
    </Container>
  )
}
