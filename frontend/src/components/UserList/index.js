import React from 'react'

import UserItem from '~/components/UserItem'

import { Container } from './styles'

export default function UserList() {
  return (
    <Container>
      {[1, 2, 3, 4, 5, 6].map(user => (
        <UserItem key={user} user={user} />
      ))}
    </Container>
  )
}
