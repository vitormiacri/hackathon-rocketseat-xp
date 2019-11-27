import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  UserImagemWrapper,
  UserInfoWrapper,
  UserImage,
  UserName,
  UserCarrear,
  UserBio,
} from './styles'

export default function UserItem({ user }) {
  return (
    <Container to={`details/${user}`}>
      <UserImagemWrapper>
        <UserImage
          src={`https://api.adorable.io/avatars/50/${user}adob@adorable.png`}
          alt="Imagem de perfil"
        />
      </UserImagemWrapper>
      <UserInfoWrapper>
        <UserName>Jhon Doe</UserName>
        <UserCarrear>Backend developer</UserCarrear>
        <UserBio>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </UserBio>
      </UserInfoWrapper>
    </Container>
  )
}

UserItem.propTypes = {
  user: PropTypes.number.isRequired,
}
