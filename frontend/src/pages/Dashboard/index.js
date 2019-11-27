import React from 'react'

import Search from '~/components/Search'
import UserList from '~/components/UserList'

import { Container } from './styles'

export default function Home() {
  return (
    <Container>
      <Search />
      <UserList />
    </Container>
  )
}
